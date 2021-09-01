import Head from "next/head";
import Header from "./header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-12 md:px-24 lg:px-60">
        <Head>
          <title>Age 12 to Married NFT</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main
          className="flex flex-col items-center justify-start w-full flex-1"
          style={{ maxWidth: "900px" }}
        >
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 text-center">
            Soon to be memorialized forever as an NFT!
          </div>

          {/* <img
            src="/NFTart.png"
            alt="Age 12 to Married NFT"
            className="h-16 sm:h-40 md:h-48 object-cover w-full"
          /> */}

          <div className="flex flex-wrap items-center justify-center p-2 mb-4">
            <img
              src="/video_browser.png"
              alt="Age 12 to Married NFT"
              className="h-48 md:h-80 object-contain mb-2"
            />
            {/* <p className="text-gray-500 font-bold text-md self-start">
              184,453,211 views
            </p> */}
          </div>

          <p className="mt-3 text-md md:text-xl">
            Seen by over 180 million people, Age 12 to Married is in the top 100
            viral videos of all time. This incredible timelapse of a lifetime
            created by a young man with devotion and dedication has inspired
            many other similar videos on YouTube. Now it will be memoralized in
            internet history forever when it is auctioned off as an NFT.
          </p>

          <div className="text-2xl md:text-3xl mt-5">What is an NFT?</div>

          <div className="mt-3 text-md md:text-xl">
            NFT's have helped develop the rise of a new world for modern
            artists, one where digital art forms are recognized and appreciated
            forever as a unique piece of history and culture.
          </div>

          <div className="text-2xl md:text-3xl mt-5">How does it work?</div>

          <div className="mt-3 text-md md:text-xl">
            NFT stands for non-fungible token, meaning unique and irreplaceable.
            NFT's give you something that can't be copied, the right to say you
            have ownership of the art piece. Most NFTs are part of a
            cryptocurrency's blockchain, usually Ethereum. Hugo was invited to
            join Foundation, a platform that allows creators to sell their art
            as part of the Ethereum blockchain.
          </div>

          <button className="py-2 px-4 bg-red-500 rounded-lg border-2">
            View on Foundation {"->"}
          </button>

          <footer className="mt-12 flex items-start justify-between w-full h-24 border-t">
            <div>
              <a
                className="flex items-center justify-center"
                href="https://foundation.app/@hugocornellier"
                target="_blank"
                rel="noopener noreferrer"
              >
                Foundation
              </a>

              <a
                className="flex items-center justify-center"
                href="/auctionTerms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Auction Terms
              </a>
              <a href="mailto:hugo.cornellier@gmail.com">Press Inquiries</a>
            </div>
            <div>
              <div>© 2009-2021 Hugo Cornellier</div>
              <a
                className="flex items-center justify-center"
                href="https://www.youtube.com/channel/UCiEBv40OQ7zB68aK3lltQMg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
              <a
                className="flex items-center justify-center"
                href="https://www.youtube.com/channel/UCiEBv40OQ7zB68aK3lltQMg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
