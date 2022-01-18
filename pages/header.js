import "@fontsource/raleway/400.css";
import "@fontsource/roboto/400.css";
import Image from "next/image";
import Link from "next/link";
import react from "react";

export default function Header() {
  return (
    <>
      <div className="flex justify-center items-center w-full px-4 sm:px-12 md:px-24 lg:px-60 bg-gray-100">
        <div
          className="flex justify-between items-center w-full"
          style={{ maxWidth: `900px` }}
        >
          <Link passHref href="/">
            <div className="flex items-center justify-start">
              <Image
                src="/logo.svg"
                alt="Age 12 to Married NFT"
                className="h-12 sm:h-16 md:h-24 object-contain"
                height="60"
                width="70"
              />
              <div>
                <div className="font-roboto text-md sm:text-xl md:text-3xl">
                  Age 12 to Married
                </div>
                <div className="font-raleway font-semibold text-xs sm:text-sm md:text-xl self-start">
                  I Took a Photo Every Day!
                </div>
              </div>
            </div>
          </Link>
          <a href="https://opensea.io/Hugo_Cornellier">
            <div
              className="shadow hover:shadow-none py-2 px-4 sm:px-5 md:px-6 rounded-lg text-xs sm:text-sm md:text-md text-white font-bold"
              style={{
                background: "rgb(2,0,36)",
                background:
                  "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,144,255,1) 100%)",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              Follow &rarr;
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
