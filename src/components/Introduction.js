import { useState, useEffect } from "react";
import img1 from "../images/cloud1.png";
import img2 from "../images/cloud2.png";

const Introduction = () => {
  const [offsetY, setOffsetY] = useState();
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full introduction">
      <div className="relative w-full h-96 md:h-screen z-50 overflow-hidden">
        <img
          src={img1}
          alt="cloud1"
          className="absolute xl:w-full top-1/2 -translate-y-1/2 z-20"
          id="img1"
          style={{
            left: `${-15 - offsetY * 0.3 + "%"}`,
            width: `${100 + offsetY * 0.3 + "%"}`,
          }}
        />
        <img
          src={img2}
          alt="cloud2"
          className="absolute xl:w-full top-1/2 -translate-y-1/2 z-20"
          id="img2"
          style={{
            right: `${-30 - offsetY * 0.3 + "%"}`,
            width: `${100 + offsetY * 0.3 + "%"}`,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="text-white text-xl md:text-7xl 2xl:text-8xl font-medium leading-normal">
            Welcome to the <br /> <span className="uppercase">Himalayas</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
