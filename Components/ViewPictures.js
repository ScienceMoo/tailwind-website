/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ViewPictures({ index, title, files, setActiveIndex }) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView && setActiveIndex) {
      setActiveIndex(index);
    }
  }, [inView, index, setActiveIndex]);

  return (
    <>
      <section className="py-8 px-4 mt-2" ref={ref}>
        {title && (
          <div className="text-3xl mt-2 text-center w-full mb-2">{title}</div>
        )}
        {files.length % 2 == 1 ? (
          <div className="flex flex-wrap -mx-4 justify-center">
            {files.map((file, index) => (
              <div key={index} className="md:w-1/2 px-4 mb-8 md:mb-4">
                <Image
                  className="rounded shadow-md object-contain"
                  src={file}
                  alt="picture"
                  height="100"
                  width="120"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap -mx-4">
            {files.map((file, index) => (
              <div key={index} className="md:w-1/2 px-4 mb-8 md:mb-4">
                <img
                  className="rounded shadow-md object-contain"
                  src={file}
                  alt="picture"
                  height="100"
                  width="120"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
