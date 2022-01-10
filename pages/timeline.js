import Head from "next/head";
import Footer from "./footer";
import React from "react";
import ViewPictures from "../Components/ViewPictures";
import TimelineHeader from "../Components/TimelineHeader";

export default function Timeline() {
  const [currentActive, setCurrentActive] = React.useState(0);
  const [width, setWidth] = React.useState(0);

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
      pics: ["beach_hugo.png", "sloth_hugo.png", "robot_hugo.jpg"],
    },
    {
      title: "Married",
      pics: ["/hairstyles/blond.png", "/hairstyles/beard_rat.png"],
    },
  ];

  arrayofthings.forEach((thing) => {
    thing.ref = React.createRef();
  });

  function setTimelineItem(num) {
    setCurrentActive(num);
    setWidth(num * (100 / (arrayofthings.length - 1)));

    document.getElementById("bar_fill").style.width =
      num * (100 / (arrayofthings.length - 1)) + `%`;

    for (let i = 0; i < num; i++) {
      document.getElementById(`point${i}`).className = "point point--complete";
    }

    for (let i = num + 1; i < arrayofthings.length; i++) {
      document.getElementById(`point${i}`).className = "point";
    }

    document.getElementById(`point${num}`).className = "point point--active";
  }

  function clickTimelineItem(e, refname) {
    scrollIntoView(refname);
    let clicked = e.target;
    if (clicked.className == "bullet") {
      clicked = clicked.parentNode;
    } else if (clicked.className == "label") {
      clicked = clicked.parentNode;
    }

    // console.log(clicked.parentNode);
    // console.log(clicked.className);

    let count = -1;
    let something = clicked.previousSibling;
    while (something !== null) {
      count += 1;
      something = something.previousSibling;
    }

    setTimelineItem(count);
  }

  function scrollIntoView(refname) {
    refname.current.scrollIntoView({ behavior: "smooth" });
  }

  function leftArrow() {
    console.log(currentActive);
    setCurrentActive(currentActive - 1);
    console.log(currentActive);
    if (currentActive != 0) {
      setTimelineItem(currentActive - 1);
    }
  }

  function rightArrow() {
    console.log(currentActive);
    setCurrentActive(currentActive + 1);
    console.log(currentActive);
    if (currentActive != arrayofthings.length - 1) {
      setTimelineItem(currentActive + 1);
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key == "ArrowLeft") {
        leftArrow();
      } else if (e.key == "ArrowRight") {
        rightArrow();
      }
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        console.log(e);
      });
    };
  }, []);

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

        <main
          onScroll={(e) => onWindowScroll(e)}
          className="flex flex-col justify-start items-start w-full flex-1"
        >
          <div className="timelineHolder ">
            {arrayofthings.length > 0 && (
              <TimelineHeader {...{ clickTimelineItem, arrayofthings }} />
            )}
          </div>

          {arrayofthings.map((thing, index) => (
            <div key={index} ref={thing.ref} id={`thing${index}`}>
              <ViewPictures title={thing.title} files={thing.pics} />
            </div>
          ))}

          <Footer />
        </main>
      </div>
    </>
  );
}
