import React from "react";
import { motion } from "framer-motion";

export default function Svg_animate() {
  const svgVariants = {
    hidden: { rotate: -180 },
    visible: { rotate: 0 },
    transition: { duration: 3 },
  };

  //   const pathVariants = {
  //     hidden: {
  //       opacity: 0,
  //       pathLength: 0,
  //     },
  //     visible: {
  //       opacity: 1,
  //       pathLength: 1,
  //       transition: {
  //         duration: 3,
  //         ease: "easeInOut",
  //       },
  //     },
  //   };
  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeIn",
      },
    },
  };
  return (
    <div>
     <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
      className="svgs"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.path
        stroke="#1C274C"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 22H2M2 11l4.063-3.25M22 11l-8.126-6.5a3 3 0 00-3.748 0l-.782.625M15.5 5.5v-2A.5.5 0 0116 3h2.5a.5.5 0 01.5.5v5M4 22V9.5M20 9.5v4m0 8.5v-4.5"
        variants={pathVariants}
      ></motion.path>
      <motion.path
        stroke="#1C274C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44M9 22v-5"
        variants={pathVariants}

      ></motion.path>
      <motion.path
        stroke="#1C274C"
        strokeWidth="1.5"
        d="M14 9.5a2 2 0 11-4 0 2 2 0 014 0z"
        variants={pathVariants}

      ></motion.path>
    </motion.svg>
    </div>
  );
}
