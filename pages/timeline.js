import Head from "next/head";
import Footer from "./footer";
import React, { useEffect, useState } from "react";
import ViewPictures from "../components/ViewPictures";
import TimelineHeader from "../components/TimelineHeader";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const arrayofthings = [
    {
      title: "Small Hughes.",
      pics: ["/childhood/ju.jpg", "/childhood/dad.jpg"],
    },
    {
      title: "Medium Hughes.",
      pics: ["/childhood/dad2.jpg", "/childhood/ju2.jpg"],
    },
    {
      title: "Big Hughes.",
      pics: ["/beach_hugo.png", "/sloth_hugo.png", "/robot_hugo.jpg"],
    },
    {
      title: "Married",
      pics: ["/hairstyles/blond.png", "/hairstyles/beard_rat.png"],
    },
  ];

  useEffect(() => {
    document
      .getElementById(`thing${activeIndex}`)
      .scrollIntoView({ behavior: "smooth" });
  }, [activeIndex]);

  useEffect(() => {
    const callback = (e) => {
      if (e.key == "ArrowLeft") {
        setActiveIndex((value) => (value == 0 ? value : value - 1));
      } else if (e.key == "ArrowRight") {
        setActiveIndex((value) =>
          value == arrayofthings.length - 1 ? value : value + 1
        );
      }
    };

    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [arrayofthings.length, setActiveIndex]);

  return (
    <>
      <div
        style={{ position: `relative` }}
        className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-12 md:px-24 lg:px-60"
      >
        <Head>
          <title>Info</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col justify-start items-start w-full flex-1">
          <div className="timelineHolder mb-24">
            {arrayofthings.length > 0 && (
              <TimelineHeader
                {...{ activeIndex, setActiveIndex, arrayofthings }}
              />
            )}
          </div>

          <div className="flex justify-center w-full">
            {arrayofthings.map((thing, index) => (
              <div key={index} id={`thing${index}`}>
                <ViewPictures
                  setActiveIndex={setActiveIndex}
                  index={index}
                  title={thing.title}
                  files={thing.pics}
                />
              </div>
            ))}
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
}
