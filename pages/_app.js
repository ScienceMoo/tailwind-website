import "tailwindcss/tailwind.css";
import Header from "./header";
import "../timeline.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
