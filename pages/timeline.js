import Head from "next/head";
import Footer from "./footer";
import React from "react";
import ViewPictures from "../Components/ViewPictures";
import TimelineHeader from "../Components/TimelineHeader";

export default function Timeline() {

  const arrayofthings = [
    {
      title: 'Small Hughes.', 
      pics: [
        "/childhood/ju.jpg", 
        "/childhood/dad.jpg",
      ]
    },
    {
      title: 'Medium Hughes.', 
      pics: [
        "/childhood/dad2.jpg",
        "/childhood/ju2.jpg",
      ]
    },
    {
      title: 'Big Hughes.', 
      pics: [
        "beach_hugo.png",
        "sloth_hugo.png",
        "robot_hugo.jpg"
      ]
    },
    {
      title: 'Married', 
      pics: [
        "/hairstyles/blond.png",
        "/hairstyles/beard_rat.png"
      ]
    },
  ]

  arrayofthings.forEach((thing) => {
    thing.ref = React.createRef()
  })

  const $barFill = React.createRef();

  const [currentActive, setCurrentActive] = React.useState(0)
  const [width, setWidth] = React.useState(0)

  function scrollIntoView(e, refname) {
    console.log(e);
    refname.current.scrollIntoView({ behavior: "smooth" });

    let clicked = e.target;
    if (clicked.className == "bullet") {
      clicked = clicked.parentNode;
    }
    else if (clicked.className == "label") {
      clicked = clicked.parentNode;
    }

    // console.log(clicked.parentNode);
    // console.log(clicked.className);

    let count = 0;
    let something = clicked.previousSibling;
    while (something !== null) {
      count += 1;
      something = something.previousSibling;
    }
    setCurrentActive(count)
    setWidth((count - 1) * (100 / (arrayofthings.length - 1)))

    $barFill.current.style.width = ((count - 1) * (100 / (arrayofthings.length - 1))) + `%`;

    something = clicked.previousSibling;
    for (let i = 1; i < count; i++) {
      something.className = "point point--complete";
      something = something.previousSibling;
    }

    if (clicked.nextSibling) {
      clicked.nextSibling.className = "point";
      if (clicked.nextSibling.nextSibling) {
        clicked.nextSibling.nextSibling.className = "point";
        if (clicked.nextSibling.nextSibling.nextSibling) {
          clicked.nextSibling.nextSibling.nextSibling.className = "point";
        }
      }
    }

    clicked.className = "point point--active";
  }

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
              <TimelineHeader
                {...{ $barFill, scrollIntoView, arrayofthings }}
              />
            )}
          </div>

          {arrayofthings.map((thing, index) => (
            <div key={index} ref={thing.ref} id={`thing${index}`}>
              <ViewPictures
                title={thing.title}
                files={thing.pics}
              />
            </div>
          ))}
          
          <Footer />
        </main>
      </div>

    </>
  );
}
