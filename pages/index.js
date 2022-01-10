/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Footer from "./footer";
import ViewPictures from "../Components/ViewPictures";
import Image from "next/image";

export default function Home() {
  const arrayofthings = [
    {
      title: "Family",
      pics: [
        "/familygatherings/omajane.png",
        "/familygatherings/family_gathering.png",
        "/meals/students.JPG",
        "/holidays/christmas_hugo.png",
      ],
    },
    {
      title: "Life events",
      pics: ["/lifeevents/buying_house.jpg", "/sold.png"],
    },
    {
      title: "Trips and adventures.",
      pics: ["/trips/juli.png", "/trips/mum_cute.JPG"],
    },
    {
      title: "Hairstyles",
      pics: ["/hairstyles/blond.png", "/hairstyles/beard_rat.png"],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-12 md:px-24 lg:px-60">
        <Head>
          <title>Age 12 to Married NFT</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main
          className="flex flex-col items-center justify-start w-full flex-1"
          style={{ maxWidth: "900px" }}
        >
          <div
            style={{ margin: "20px 0" }}
            className="flex items-center justify-center w-full text-2xl md:text-3xl mt-5"
          >
            Soon to be Memorialized Forever as an NFT!
          </div>

          <div className="flex flex-wrap items-center justify-center p-2 mb-4">
            <img
              src="/video_browser.png"
              alt="Age 12 to Married NFT"
              className="h-48 md:h-80 object-contain mb-2"
            />
          </div>

          <p className="mt-3 text-md md:text-xl">
            With over 210 million views, Age 12 to Married is in the top 100
            viral videos of all time. In this incredible timelapse, we see a
            young man grow up before our very eyes in an impressive display of
            dedication and devotion. For the first and only time in history, the
            video will forever be memorialized in internet history and minted as
            an NFT.
          </p>

          <div className="flex items-center justify-center w-full text-2xl md:text-3xl mt-5">
            What is an NFT?
          </div>

          <div className="mt-3 text-md md:text-xl">
            NFT&apos;s have helped develop the rise of a new world for modern
            artists, one where digital art forms are recognized and appreciated
            forever as a unique piece of history and culture.
          </div>

          <div className="flex items-center justify-center w-full text-xl md:text-2xl mt-5">
            <img
              src="/eth.svg"
              alt="ETH coin"
              className="h-8 object-contain mr-4"
            />
            How does it work?
          </div>

          <div className="mt-3 text-md md:text-xl">
            NFT stands for non-fungible token, meaning unique and irreplaceable.
            NFT&apos;s give you something that can&apos;t be copied, the right
            to say you have ownership of the art piece. Most NFTs are part of a
            cryptocurrency&apos;s blockchain, usually Ethereum. Youtube
            Celebrity Hugo Cornellier was invited to join Foundation, a platform
            that allows creators to sell their art as part of the Ethereum
            blockchain.
          </div>

          <a href="https://foundation.app/@hugocornellier">
            <div
              className="py-2 px-6 bg-red-600 rounded-lg text-lg text-white mt-6 font-bold"
              style={{
                background: "rgb(2,0,36)",
                background:
                  "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,144,255,1) 100%)",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              View on Foundation &rarr;
            </div>
          </a>

          <div className="text-center text-3xl mt-10">
            A Photo Every Day... For 12 Years
          </div>

          <div className="text-center text-xl mt-6 mb-2">
            Hugo&apos;s life flashes by in the background of his photos,
            offering us a glimpse of his...
          </div>

          <div className="container mx-auto px-4">
            {arrayofthings &&
              arrayofthings.map((thing, index) => (
                <div key={index}>
                  <ViewPictures title={thing.title} files={thing.pics} />
                </div>
              ))}
          </div>

          <div className="text-xl mt-4 text-center w-full mb-2">
            He even put it all together into a mosaic with more than 4000
            photos!
          </div>

          <img
            src="/mosaic_hugo.jpg"
            alt="robot hugo"
            className="h-56 md:h-80 object-contain"
          />

          <div className="text-xl mt-4 text-center w-full">
            Hugo is still taking photos today!
          </div>

          <a href="http://localhost:3000/timeline">
            <button
              className="round-button"
              style={{
                display: "inline-flex",
                minWidth: "64px",
                WebkitBoxAlign: "center",
                alignItems: "center",
                WebkitBoxPack: "center",
                justifyContent: "center",
                position: "relative",
                width: "auto",
                boxSizing: "border-box",
                WebkitTapHighlightColor: "transparent",
                outline: "0px",
                border: "0px",
                margin: "0px",
                cursor: "pointer",
                userSelect: "none",
                verticalAlign: "middle",
                appearance: "none",
                textDecoration: "none",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontWeight: "500",
                fontSize: "0.875rem",
                lineHeight: "1.75",
                letterSpacing: "0.02857em",
                textTransform: "uppercase",
                padding: "6px 16px",
                transition:
                  "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(216, 27, 96)",
                boxShadow:
                  "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
                borderRadius: "20px !important",
                whiteSpace: "nowrap",
              }}
            >
              View Timeline
            </button>
          </a>

          <Footer />
        </main>
      </div>
    </>
  );
}
