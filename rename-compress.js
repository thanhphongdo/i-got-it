const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const folder = process.argv[2];

if (!folder) {
    console.log("❌ Missing folder path.\nUsage: node rename-compress.js <folderPath>");
    process.exit(1);
}

if (!fs.existsSync(folder)) {
    console.log("❌ Folder does not exist:", folder);
    process.exit(1);
}

async function run() {
    const images = fs.readdirSync(folder)
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .sort();

    if (images.length === 0) {
        console.log("❌ No image files found.");
        return;
    }

    console.log(`🔍 Found ${images.length} images. Processing...`);

    let index = 1;

    for (const file of images) {
        const inputPath = path.join(folder, file);

        // Format: img-01.jpg → img-99.jpg
        const num = String(index).padStart(2, "0");
        const outputName = `img-${num}.jpg`;
        const outputPath = path.join(folder, outputName);

        try {
            // Compress + convert → jpg
            await sharp(inputPath)
                .jpeg({
                    quality: 80,     // giảm dung lượng nhưng vẫn giữ chất lượng tốt
                    mozjpeg: true
                })
                .toFile(outputPath);

            console.log(`✔️  ${file} → ${outputName}`);

            // Delete original image after successful conversion
            fs.unlinkSync(inputPath);
            console.log(`🗑️  Deleted original: ${file}`);

            index++;
        } catch (err) {
            console.log(`❌ Error processing ${file}:`, err);
        }
    }

    console.log("🎉 Done!");
}

run();
