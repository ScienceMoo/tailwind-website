import Head from "next/head";
import Footer from "./footer";
import useScript from "../hooks/useScript";
import React from "react";
import ViewPictures from "../Components/ViewPictures";
import TimelineHeader from "../Components/TimelineHeader";

export default function Timeline() {
  // useScript(
  //   "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
  // );
  // useScript(
  //   "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"
  // );
  useScript(
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenLite.min.js"
  );
  useScript(
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TimelineMax.min.js"
  );

  const $boxOne = React.createRef();
  const $boxTwo = React.createRef();
  const $boxThree = React.createRef();
  const $gay1 = React.createRef();
  const $gay2 = React.createRef();
  const $gay3 = React.createRef();
  const $gay4 = React.createRef();
  const $barFill = React.createRef();
  let $width = 18;
  let currentActive = 1;

  function scrollIntoView(e, refname) {
    console.log(e);
    refname.current.scrollIntoView({ behavior: "smooth" });

    let clicked = e.target;
    if (clicked.className == "bullet") {
      clicked = clicked.parentNode;
    }

    console.log(clicked.parentNode);
    console.log(clicked.className);

    let count = 0;
    let something = clicked.previousSibling;
    while (something !== null) {
      count += 1;
      something = something.previousSibling;
    }
    currentActive = count;
    $width = (count - 1) * 33;

    $barFill.current.style.width = $width + `%`;

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
            <TimelineHeader
              {...{ $barFill, $gay1, $gay2, $gay3, $gay4, scrollIntoView }}
            />{" "}
          </div>

          <div ref={$gay1} id="gay1">
            Small Hughes.
            <ViewPictures
              title="family"
              file1="/familygatherings/omajane.png"
              file2="/familygatherings/family_gathering.png"
            />
          </div>
          <div ref={$gay2} id="gay2">
            Medium Hughes.
            <ViewPictures
              file1="/meals/students.JPG"
              file2="/holidays/christmas_hugo.png"
            />
          </div>
          <div ref={$gay3} id="gay3">
            Big Hughes.
            <ViewPictures
              title="trips and adventures"
              file1="/trips/juli.png"
              file2="/trips/mum_cute.JPG"
            />
          </div>
          <div ref={$gay4} id="gay4">
            Married
            <ViewPictures
              title="hairstyles..."
              file1="/hairstyles/blond.png"
              file2="/hairstyles/beard_rat.png"
            />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
