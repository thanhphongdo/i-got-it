import React, { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { format } from "prettier";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import * as parserTypescript from "prettier/plugins/typescript";
import * as parserBabel from "prettier/plugins/babel";
import * as parserEstree from "prettier/plugins/estree";

export default function TsxCodeViewer({ tsxCode }: { tsxCode: string }) {
  const [formattedCode, setFormattedCode] = React.useState<string>(tsxCode);
  async function formatTsxString(code: string): Promise<string> {
    try {
      const formattedCode = await format(code, {
        parser: "typescript",
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        plugins: [
          parserTypescript,
          parserBabel,
          parserEstree as unknown as any,
        ],
      });
      return formattedCode;
    } catch (error) {
      return code;
    }
  }

  useEffect(() => {
    formatTsxString(tsxCode).then(setFormattedCode);
  }, [tsxCode]);

  return (
    <SyntaxHighlighter
      language="tsx"
      style={vscDarkPlus}
      showLineNumbers
      wrapLines
      customStyle={{
        fontSize: "14px",
        borderRadius: "8px",
        padding: "16px",
        width: "100%",
      }}
    >
      {formattedCode}
    </SyntaxHighlighter>
  );
}
