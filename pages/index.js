import Head from "next/head";
import Footer from "./footer";

export default function Home() {
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
          <div className="ext-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 text-center">
            Soon to be memorialized forever as an NFT!
          </div>

          <div className="flex flex-wrap items-center justify-center p-2 mb-4">
            <img
              src="/video_browser.png"
              alt="Age 12 to Married NFT"
              className="h-48 md:h-80 object-contain mb-2"
            />
          </div>

          <p className="mt-3 text-md md:text-xl">
            Seen by over 180 million people, Age 12 to Married is in the top 100
            viral videos of all time. This incredible timelapse of a lifetime
            created by a young man with devotion and dedication has inspired
            many other similar videos on YouTube. Now it will be memoralized in
            internet history forever when it is auctioned off as an NFT.
          </p>

          <div className="flex items-center justify-center w-full text-2xl md:text-3xl mt-5">
            What is an NFT?
          </div>

          <div className="mt-3 text-md md:text-xl">
            NFT's have helped develop the rise of a new world for modern
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
            NFT's give you something that can't be copied, the right to say you
            have ownership of the art piece. Most NFTs are part of a
            cryptocurrency's blockchain, usually Ethereum. Youtube Celebrity
            Hugo Cornellier was invited to join Foundation, a platform that
            allows creators to sell their art as part of the Ethereum
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
            A timelapse of growing up in the early 2000...
          </div>

          <div className="text-center text-xl mt-6 mb-2">
            Hugo's life flashes by in the background of his photos, offering us
            a glimpse of his...
          </div>

          <div class="container mx-auto px-4">
            <div className="text-3xl mt-2 text-center w-full">family</div>

            <section class="py-8 px-4">
              <div class="flex flex-wrap -mx-4">
                <div class="md:w-1/2 px-4 mb-8 md:mb-0">
                  <img
                    class="rounded shadow-md"
                    src="/familygatherings/omajane.png"
                    alt="family"
                  />
                </div>
                <div class="md:w-1/2 px-4 mb-8 md:mb-0">
                  <img
                    class="rounded shadow-md"
                    src="/familygatherings/family_gathering.png"
                    alt="family gathering"
                  />
                </div>
              </div>
            </section>

            <section class="py-8 px-4">
              <div class="flex flex-wrap -mx-4">
                <div class="md:w-1/2 px-4 mb-8 md:mb-0">
                  <img
                    class="rounded shadow-md"
                    src="/meals/students.JPG"
                    alt="student-like meal"
                  />
                </div>
                <div class="md:w-1/2 px-4 mb-8 md:mb-0">
                  <img
                    class="rounded shadow-md"
                    src="/holidays/christmas_hugo.png"
                    alt="christmas hugo"
                  />
                </div>
              </div>
            </section>

            <section class="py-8 px-4">
              <div className="text-3xl mt-2 text-center w-full">
                life events
              </div>
              <div class="flex flex-wrap -mx-4">
                <div class="md:w-1/2 px-4 mb-8 md:mb-0">
                  <img
                    class="rounded shadow-md"
                    src="/lifeevents/buying_house.jpg"
                    alt="buying first house"
                  />
                </div>
                <div class="md:w-1/2 px-4 mb-8 md:mb-0">
                  <img class="rounded shadow-md" src="/sold.png" alt="sold" />
                </div>
              </div>
            </section>

            <section class="py-8 px-4">
              <div className="text-3xl mt-2 text-center w-full">
                trips and adventures
              </div>
              <div class="flex flex-wrap -mx-4">
                <div class="md:w-1/2 px-4 mb-8 md:mb-0">
                  <img
                    class="rounded shadow-md"
                    src="/trips/juli.png"
                    alt="juli"
                  />
                </div>
                <div class="md:w-1/2 px-4 mb-8 md:mb-0">
                  <img
                    class="rounded shadow-md"
                    src="/trips/mum_cute.JPG"
                    alt="family trip"
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="text-3xl mt-4 ">hairstyles...</div>
          <section class="py-8 px-4">
            <div class="flex flex-wrap -mx-4">
              <div class="md:w-1/2 px-4 mb-8 md:mb-0">
                <img
                  class="rounded shadow-md"
                  src="/hairstyles/blond.png"
                  alt="blond"
                />
              </div>
              <div class="md:w-1/2 px-4 mb-8 md:mb-0">
                <img
                  class="rounded shadow-md"
                  src="/hairstyles/beard_rat.png"
                  alt="beard"
                />
              </div>
            </div>
          </section>

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

          <Footer />
        </main>
      </div>
    </>
  );
}
