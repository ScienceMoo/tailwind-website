export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center w-full px-4 bg-blue-400">
        <a href="/">
          <div className="flex items-center justify-start">
            <img
              src="/hugo_nft.svg"
              alt="Age 12 to Married NFT"
              className="h-12 sm:h-16 md:h-24 object-contain"
            />
            <div>
              <h1 className="text-md sm:text-xl md:text-3xl">
                Age 12 to Married
              </h1>
              <div className="text-xs sm:text-sm md:text-xl self-start">
                I Took a Photo Every Day!
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://foundation.app/@hugocornellier"
          className="px-4 font-bold text-sm md:text-md text-center"
          style={{ maxWidth: "100px" }}
        >
          Follow on Foundation
        </a>
      </div>
    </>
  );
}
