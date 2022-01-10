import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ViewPictures({ index, title, files, setActiveIndex }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setActiveIndex(index);
    }
  }, [inView]);

  return (
    <>
      <section className="py-8 px-4 mt-2" ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
        {title && (
          <div className="text-3xl mt-2 text-center w-full mb-2">{title}</div>
        )}
        {files.length % 2 == 1 ? (
          <div className="flex flex-wrap -mx-4 justify-center">
            {files.map((file, index) => (
              <div key={index} className="md:w-1/2 px-4 mb-8 md:mb-4">
                <img className="rounded shadow-md" src={file} alt="picture" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap -mx-4">
            {files.map((file, index) => (
              <div key={index} className="md:w-1/2 px-4 mb-8 md:mb-4">
                <img className="rounded shadow-md" src={file} alt="picture" />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
