export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center w-full">
        <a href="/">
          <div className="flex items-center justify-start">
            <img
              src="/hugo_nft.svg"
              alt="Age 12 to Married NFT"
              className="h-16 md:h-24 object-contain"
            />
            <div>
              <h1 className="text-xl md:text-3xl">Age 12 to Married</h1>
              <div className="text-xl self-start mb-4">
                I Took a Photo Every Day!
              </div>
            </div>
          </div>
        </a>
        <button className="py-2 px-4 bg-blue-400 rounded-lg font-bold h-12 text-sm md:text-md">
          Contact
        </button>
      </div>
    </>
  );
}
