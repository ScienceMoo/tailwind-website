import Head from "next/head";
import Header from "./header";

export default function Faq() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-start items-center w-full flex-1 px-2 md:px-20 text-center">
        <Header />

        <div className="border-b-2 pb-4 px-2 md:px-20 mb-4">
          <h1 className="text-4xl">Frequently Asked Questions</h1>
        </div>

        <div className="flex flex-col items-start justify-start w-full px-2 md:px-20">
          <div className="mb-4 flex flex-col items-start justify-start">
            <p className="font-bold">What is an NFT?</p>
            <p>Lorem epsum...</p>
          </div>

          <div className="mb-4 flex flex-col items-start justify-start">
            <p className="font-bold">Do I need cryptocurrency to buy an NFT?</p>
            <p>Lorem epsum...</p>
          </div>

          <div className="mb-4 flex flex-col items-start justify-start">
            <p className="font-bold">
              When will the NFTs be available for withdrawal/transfer?
            </p>
            <p>Lorem epsum...</p>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-between w-full h-24 border-t pl-20 pr-20">
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
