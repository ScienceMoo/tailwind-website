/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function ViewPictures({ index, title, files, setActiveIndex }) {
  return (
    <div>
      <section>
        {title && (
          <div className="text-3xl mt-4 mb-2 text-center w-full">{title}</div>
        )}
        <div className="flex flex-wrap justify-center">
          {files.map((file, index) => (
            <div
              key={index}
              style={{
                position: `relative`,
                height: `300px`,
              }}
              className="w-full sm:w-5/12 m-4"
            >
              <Image
                className="rounded shadow-md object-contain"
                src={file}
                alt="picture"
                layout="fill"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
