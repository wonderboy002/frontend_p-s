import * as React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Example = () => (
  <div>
    <motion.div
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {["I", "Like", "framer", "motion","and you",6,7,8].map((x,index) => (
        <motion.div
          key={index}
          className="item h-[10px] child w-[10px] bg-black"
          variants={item}
        >
          
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Example;
