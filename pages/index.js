import Head from "next/head";
import Header from "./header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-12 md:px-24 lg:px-60">
      <Head>
        <title>Age 12 to Married NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="flex flex-col items-center justify-start w-full flex-1 text-center"
        style={{ maxWidth: "900px" }}
      >
        <Header />

        <div className="text-xl sm:text-2xl md:text-3xl mt-2">
          Soon to be memorialized forever in an NFT auction!
        </div>

        <img
          src="/NFTart.png"
          alt="Age 12 to Married NFT"
          className="h-12 sm:h-32 md:h-48 object-cover w-full"
        />

        <div className="flex flex-col items-center justify-center p-2 text-center border-4 mb-4">
          <img
            src="/hugonft.jpg"
            alt="Age 12 to Married NFT"
            className="h-48 md:h-48 object-contain mb-2"
          />

          <p className="text-gray-500 font-bold text-md self-start">
            184,453,211 views
          </p>
        </div>

        <p className="mt-3 text-md md:text-xl">
          Seen by over 180 million people, Age 12 to Married is in the top 100
          viral videos of all time. This incredible timelapse of a lifetime
          created by a young man with devotion and dedication has inspired many
          other similar videos on YouTube. Now it will be memoralized in
          internet history forever when it is auctioned off as an NFT.
        </p>

        <div className="text-2xl md:text-3xl mt-5">What is an NFT?</div>

        <div className="mt-3 text-md md:text-xl">
          NFT's have helped develop the rise of a new world for modern artists,
          one where digital art forms are recognized and appreciated forever as
          a unique piece of history and culture.
        </div>

        <div className="text-2xl md:text-3xl mt-5">How does it work?</div>

        <div className="mt-3 text-md md:text-xl">
          NFT stands for non-fungible token, meaning unique and
          irreplaceable.NFT's give you something that can't be copied, the right
          to say you have ownership of the art piece. Most NFTs are part of a
          cryptocurrency's blockchain, usually Ethereum.
        </div>

        <footer className="mt-12 flex items-center justify-between w-full h-24 border-t">
          <div>
            <a
              className="flex items-center justify-center"
              href="https://www.youtube.com/channel/UCiEBv40OQ7zB68aK3lltQMg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Channel
            </a>
          </div>
          <div className="flex flex-col">
            <a
              className="flex items-center justify-center"
              href="/faq"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ
            </a>
            <a
              className="flex items-center justify-center"
              href="/auctionTerms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Auction Terms
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
