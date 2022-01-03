import Head from "next/head";
import Footer from "./footer";

export default function Info() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-12 md:px-24 lg:px-60">
      <Head>
        <title>Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-start items-start w-full flex-1">
        <div className="w-full pb-2 mb-4 mt-4">
          <div className="text-3xl">F.A.Q. 🌟</div>
        </div>
        <br></br>Q) How is your face always in the centre?
        <br></br>A) I stabilized each photo manually, frame by frame (notice how the borders are always moving?). It took me around 50+ hours in total for this video. I posted a video explaining the process in detail here: https://youtu.be/FGXGHYonfGM?t=2m16s<br></br>

        <br></br>Q) Why don't you smile?
        <br></br>A) Mainly for consistency. From the beginning, I planned to have the same expression in every photo, and it's easier to keep a straight face than it is to smile in the same way each time. Secondly, I wanted to capture the physical changes in my face, while avoiding the emotional changes in my life. <br></br>

        <br></br>Q) Why did you start? What gave you the idea?
        <br></br>A) In 2008, I watched Noah Kalina's project here on YouTube, and I decided to start my own that focuses on myself aging, since I was still young at the time. I was also motivated by wanting to document my life, and to be able to show this to my family in the future.<br></br>

        <br></br>Q) Do you plan to keep going forever? Will you ever stop?
        <br></br>A) I have no intention of stopping. The plan is to continue this project forever.<br></br>

        <br></br>Q) Where are you from?
        <br></br>A) I was born in London, England, but have spent most of my life in Canada. I'm currently living in Fredericton, Canada.<br></br>

        <br></br>Q) How old were you when you were married?
        <br></br>A) I was 21, but turned 22 less than a month later.<br></br>

        <Footer />
      </main>
    </div>
  );
}
