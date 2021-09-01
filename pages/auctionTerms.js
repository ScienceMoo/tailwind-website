import Head from "next/head";
import Footer from "./footer";

export default function AuctionTerms() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-12 md:px-24 lg:px-60">
      <Head>
        <title>Auction Terms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-start items-start w-full flex-1">
        <div className="w-full pb-2 mb-4 mt-4">
          <div className="text-3xl">Auction Terms</div>
          <div className="text-sm">Last updated: August 31st, 2021</div>
        </div>

        <div className="text-2xl font-bold mb-4 mt-2">1. Definitions</div>

        <div className="pl-4">
          <p className="mb-1">
            <span className="text-sm mt-2 font-bold text-left">1.1 "HC"</span>
            <span className="text-sm mt-2 text-left">
              means Hugo Cornellier.
            </span>
          </p>

          <p className="mb-1">
            <span className="text-sm mt-2 font-bold text-left">
              1.2 "Media"
            </span>
            <span className="text-sm mt-2 text-left">
              means the “AGE 12 TO MARRIED - I Took a Photo Every Day!” viral
              video, name, logo and the likenesses of Hugo Cornellier contained
              within the audio-video, images, names, titles and audio files
              associated with the Purchased NFT.
            </span>
          </p>

          <p className="mb-1">
            <span className="text-sm mt-2 font-bold text-left">1.3 "NFT"</span>
            <span className="text-sm mt-2 text-left">
              means any blockchain-tracked, non-fungible token.
            </span>
          </p>

          <p className="mb-1">
            <span className="text-sm mt-2 font-bold text-left">1.4 "Own"</span>
            <span className="text-sm mt-2 text-left">
              means, with respect to an NFT, an NFT that you have purchased or
              otherwise rightfully acquired from a legitimate source.
            </span>
          </p>

          <p className="mb-1">
            <span className="text-sm mt-2 font-bold text-left">
              1.5 "Purchased NFT"
            </span>
            <span className="text-sm mt-2 text-left">
              means an NFT that you Own.
            </span>
          </p>
        </div>

        <div className="text-2xl font-bold mb-4 mt-6">2. Ownership</div>

        <div className="pl-4">
          <p>
            <span className="text-sm mt-2 font-bold text-left">2.1 </span>
            <span className="text-sm mt-2 text-left">
              You acknowledge and agree that HC (or, as applicable, his
              licensors) retains ownership of all legal right, title and
              interest in and to the Media and all intellectual property rights
              therein. The rights that you have in and to the NFT are as
              described in this License. HC reserves all rights in and to the
              Media not expressly granted to you in this License.
            </span>
          </p>

          <p>
            <span className="text-sm mt-2 font-bold text-left">2.2 </span>
            <span className="text-sm mt-2 text-left">
              For the avoidance of doubt, nothing in these Terms restricts your
              ability to commercially exploit the Purchased NFT itself.
            </span>
          </p>
        </div>

        <div className="text-2xl font-bold mb-4 mt-6">3. Licence</div>

        <div className="pl-4">
          <p>
            <span className="text-sm mt-2 font-bold text-left">3.1 </span>
            <span className="text-sm mt-2 text-left">
              Subject to your continued compliance with the terms of this
              License, HC grants you a worldwide license to use, exploit and
              display the Purchased NFT.
            </span>
          </p>
        </div>

        <div className="text-2xl font-bold mb-4 mt-6">4. Restrictions</div>

        <div className="pl-4">
          <p>
            <span className="text-sm mt-2 font-bold text-left">4.1 </span>
            <span className="text-sm mt-2 text-left">
              You agree that you may not, nor permit any third party to do or
              attempt to do any of the foregoing without the DCF’s express prior
              written consent in each case:
            </span>
          </p>

          <div className="pl-6">
            <p>
              <span className="text-sm mt-2 text-left">
                (a) use or utilise the underlying Media outside of, or separate
                from, the Purchased NFT for any purpose;
              </span>
            </p>
            <p>
              <span className="text-sm mt-2 text-left">
                (b) use the Purchased NFT or the Media within it in connection
                with images, videos, or other forms of media that depict hatred,
                intolerance, violence, cruelty, or anything else that could
                reasonably be found to constitute hate speech or otherwise
                infringe upon the rights of others or damage the reputation of
                HC;
              </span>
            </p>
            <p>
              <span className="text-sm mt-2 text-left">
                (c) sell or otherwise commercialise the underlying Media outside
                of the Purchased NFT (for the avoidance of doubt nothing herein
                shall restrict or prevent you from selling or distributing for
                commercial gain the Purchased NFT itself); or
              </span>
            </p>

            <p>
              <span className="text-sm mt-2 text-left">
                (d) attempt to trademark, copyright, or otherwise acquire
                additional intellectual property rights in or to the underlying
                Media.
              </span>
            </p>
          </div>

          <p>
            <span className="text-sm mt-2 font-bold text-left">4.2 </span>
            <span className="text-sm mt-2 text-left">
              The license granted herein applies only to the extent that you
              continue to Own the Purchased NFT. If at any time you sell, trade,
              donate, give away, transfer, or otherwise dispose of your
              Purchased NFT for any reason, the license granted herein will
              immediately expire with respect to the Purchased NFT without the
              requirement of notice, and you will have no further rights in or
              to the Purchased NFT.
            </span>
          </p>
        </div>

        <Footer />
      </main>
    </div>
  );
}
