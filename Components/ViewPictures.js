export default function ViewPictures({ title, file1, file2 }) {
  // console.log(file1);
  // console.log(file2);
  return (
    <>
      <section className="py-8 px-4">
        {title && (
          <div className="text-3xl mt-2 text-center w-full">{title}</div>
        )}
        <div className="flex flex-wrap -mx-4">
          <div className="md:w-1/2 px-4 mb-8 md:mb-0">
            <img
              className="rounded shadow-md"
              src={file1}
              alt="student-like meal"
            />
          </div>
          <div className="md:w-1/2 px-4 mb-8 md:mb-0">
            <img
              className="rounded shadow-md"
              src={file2}
              alt="christmas hugo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
