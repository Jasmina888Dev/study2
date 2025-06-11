import React, { useEffect, useState } from "react";
import flower1 from "../../assets/image/flower1.jpg";
import flower2 from "../../assets/image/flower2.jpg";
import flower3 from "../../assets/image/flower3.jpg";
import flower4 from "../../assets/image/flower4.jpg";

const Home = () => {
  const images = [flower1, flower2, flower3, flower4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <img
            src={images[currentIndex]}
            alt="Slideshow"
            // style={{
            //   width: "400px",
            //   height: "200px",
            //   transition: "opacity 1s ease-in-out",
            // }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
