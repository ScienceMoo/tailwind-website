import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Age 12 to Married NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Age 12 to Married <p className="text-blue-600">NFT!</p>
        </h1>

        <img src="/hugonft.jpg" alt="Vercel Logo" className="h-96" />

        <p className="mt-3 text-xl pl-20 pr-20">
          Seen by over 180 million people, Age 12 to Married is in the top 100
          viral videos of all time. This incredible work of art created by a
          young man with devotion and dedication has inpired many other similar
          videos on YouTube. Now, the video will be removed from YouTube and one
          person will have the opportunity to own it in its new form as a 1/1
          NFT.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full mb-4">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Youtube &rarr;</h3>
            <p className="mt-4 text-xl">
              See the iconic video and check out Hugo's channel
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Frequently asked questions and NFT information.
            </p>
          </a>
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
                href="https://www.youtube.com/channel/UCiEBv40OQ7zB68aK3lltQMg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Channel
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
