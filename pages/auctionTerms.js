import Head from "next/head";
import Header from "./header";

export default function AuctionTerms() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-12 md:px-24 lg:px-60">
      <Head>
        <title>Auction Terms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-start items-start w-full flex-1 text-center">
        <Header />

        <div className="border-b-2 pb-4 mb-4 mt-4">
          <div className="text-4xl">Auction Terms</div>
          <div>Last updated: August 31st, 2021</div>
        </div>

        <div className="text-3xl font-bold">1. Definitions</div>

        <div>
          <span className="pl-4 text-md mt-2 font-bold text-left">
            1.1 "Media"
          </span>
          <span className="pl-4 text-md mt-2 text-left">
            means the “Charlie Bit My Finger - Again!” or “Charlie Bit Me” viral
            video, name, logo and the likenesses of Harry Davies-Carr and
            Charlie Davies-Carr contained within the audio-video, images, names,
            titles and audio files associated with the Purchased NFT.
          </span>
        </div>
      </main>

      <footer className="flex items-center justify-between w-full h-24 border-t">
        <div>
          <ul>
            <li>
              <a
                className="flex items-center justify-center"
                href="https://www.youtube.com/channel/UCiEBv40OQ7zB68aK3lltQMg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Channel
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a
                className="flex items-center justify-center"
                href="/faq"
                target="_blank"
                rel="noopener noreferrer"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
