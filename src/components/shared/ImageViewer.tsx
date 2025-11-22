import { useEffect, useRef, useState } from "react";
import chevronUp from "../../assets/images/chevron-up.svg";

export function ImageViewer({ images }: { images: string[] }) {
  const [view, setView] = useState({
    opened: false,
    index: 0,
  });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (view.opened) {
      document.body.style.overflow = "hidden";
      ref.current?.focus();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [view]);

  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 flex-wrap">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full relative cursor-pointer"
            onClick={() => setView({ opened: true, index })}
          >
            <img src={src} className="w-full rounded-lg" />
          </div>
        ))}
      </div>
      {view.opened && (
        <div
          className="fixed z-[100] top-0 left-0 w-full h-full flex justify-center items-center p-4 bg-black/80 py-12 focus:outline-none"
          tabIndex={0}
          ref={ref}
          onKeyDown={(e) => {
            switch (e.key) {
              case "Escape":
                setView({ opened: false, index: 0 });
                break;
              case "ArrowLeft":
                setView({
                  ...view,
                  index:
                    view.index - 1 < 0 ? images.length - 1 : view.index - 1,
                });
                break;
              case "ArrowRight":
                setView({
                  ...view,
                  index:
                    view.index + 1 > images.length - 1 ? 0 : view.index + 1,
                });
                break;
            }
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: `url("${images[view.index]}") no-repeat center / contain`,
            }}
          >
            <div
              className="w-8 h-8 p-1 absolute right-4 top-1/2 flex justify-center items-center border border-gray-500 bg-white/50 rounded-md cursor-pointer"
              onClick={() =>
                setView({
                  ...view,
                  index:
                    view.index + 1 > images.length - 1 ? 0 : view.index + 1,
                })
              }
            >
              <img src={chevronUp} className="w-full rotate-90" alt="" />
            </div>
            <div
              className="w-8 h-8 p-1 absolute left-4 top-1/2 flex justify-center items-center border border-gray-500 bg-white/50 rounded-md cursor-pointer"
              onClick={() =>
                setView({
                  ...view,
                  index:
                    view.index - 1 < 0 ? images.length - 1 : view.index - 1,
                })
              }
            >
              <img src={chevronUp} className="w-full -rotate-90" alt="" />
            </div>
            <div className="absolute bottom-4 w-full flex items-center justify-center gap-4">
              <div className="bg-white/30 rounded-md text-white px-4 py-2">
                {view.index + 1} / {images.length}
              </div>
              <div
                className="bg-white/30 rounded-md text-white px-4 py-2 cursor-pointer"
                onClick={() =>
                  setView({
                    opened: false,
                    index: 0,
                  })
                }
              >
                Close
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
