import React from "react";
import { motion } from "framer-motion";
function Practice() {
  const main = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      variants={main}
      initial="hidden"
      animate="visible"
      className="cont"
    >
      <motion.div variants={child} className="items"></motion.div>
      <motion.div variants={child} className="items"></motion.div>
      <motion.div variants={child} className="items"></motion.div>
      <motion.div variants={child} className="items"></motion.div>
      <motion.div variants={child} className="items"></motion.div>
      <motion.div variants={child} className="items"></motion.div>
      <motion.div variants={child} className="items"></motion.div>
      <motion.div variants={child} className="items"></motion.div>
      <motion.div variants={child} className="items"></motion.div>
    </motion.div>
  );
}

export default Practice;
