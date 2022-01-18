/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ViewPictures({ index, title, files, setActiveIndex }) {
  return (
    <div>
      <section className="py-8 px-4 mt-2">
        {title && (
          <div className="text-3xl mt-2 text-center w-full mb-2">{title}</div>
        )}
        <div className="flex flex-wrap -mx-4 justify-center">
          {files.map((file, index) => (
            <div key={index} className="md:w-1/2 px-4 mb-8 md:mb-4">
              <Image
                className="rounded shadow-md object-contain"
                src={file}
                alt="picture"
                height="1000"
                width="1000"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
