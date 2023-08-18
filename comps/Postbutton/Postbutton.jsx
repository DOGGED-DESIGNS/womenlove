import React from "react";
import { motion } from "framer-motion";

const Postbutton = ({ uuid, title }) => {
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
        href={`/post/${uuid}`}
      >
        {`${title.substring(0, 30)}...`}
      </motion.a>
    </>
  );
};

export default Postbutton;
