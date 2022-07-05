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
    <div className="introduction">
      <img
        src={img1}
        alt="cloud1"
        id="img1"
        style={{
          left: `${-15 - offsetY * 0.3 + "%"}`,
          width: `${100 + offsetY * 0.3 + "%"}`,
        }}
      />
      <img
        src={img2}
        alt="cloud2"
        id="img2"
        style={{
          right: `${-30 - offsetY * 0.3 + "%"}`,
          width: `${100 + offsetY * 0.3 + "%"}`,
        }}
      />
      <h1 className="text-white text-7xl font-medium leading-normal" id="text">
        Welcome to the <br /> <span className="uppercase">Himalayas</span>
      </h1>
    </div>
  );
};

export default Introduction;
