import React, { useState,useEffect} from "react";
import image1 from "../Images/photo-1.jpeg";
import image2 from "../Images/image2.jpeg";
import image3 from "../Images/image3.jpeg";
import image4 from "../Images/image4.webp";
import image5 from "../Images/image5.jpeg";
import { useScroll, motion } from "framer-motion";
import "../src/index.css";

function Carousel() {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const interval = 2000; // 3 seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, interval);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [image1, image2, image3, image4, image5];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <>
      <div className="mainContainer">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={image}
            className="rounded-[12px] childImage"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "40%", position: "absolute" }}
          />
        ))}
      </div>
     
    </>
  );
}

export default Carousel;
