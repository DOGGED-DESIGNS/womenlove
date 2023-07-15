import React from "react";
import { motion } from "framer-motion";

const Catbutton = ({ id }) => {
  return (
    <>
      <motion.a
        initial={{
          originx: 0,
          scale: 1,
        }}
        whileTap={{
          originx: 0,
          scale: 0.9,
        }}
        transition={{
          type: "spring",
        }}
        className="confuse__grid--a"
        href={`/category/${id}`}
      >
        {id}
      </motion.a>
    </>
  );
};

export default Catbutton;
