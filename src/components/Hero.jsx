import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full pt-10 mb-10">
        {/* object fit: cover => maintain ascpect ratio & clips contain =>would not clip: */}
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          className="black_btn"
          type="button"
          onClick={() => window.open("https://github.com/paudel54")}
        >
          Click Me
        </button>
      </nav>
      <h1 className="head_text">
        {/* we can control tailwnd default property of minWidth- explesitely with max width;; */}
        Summarize Articles with <br /> Paieu
        <br className="max-md:hidden" />
        <span className="orange_gradient">
          AI for your's <br /> Document Summary.{" "}
        </span>
      </h1>
      <h2 className="desc">
        Simplifiy your reading with Summize, an open-Source article summarizer
        that transforms lengthy article into clear and consise summaries.
      </h2>
    </header>
  );
};

export default Hero;
