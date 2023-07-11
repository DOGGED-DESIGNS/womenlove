import { useState } from "react";
import Animatez from "@/Animate";
import { motion } from "framer-motion";

const Question = (obj) => {
  const [hover, setHover] = useState(false);

  const runHover = () => {
    setHover(true);
  };
  return (
    <>
      <motion.div
        onHoverStart={() => {
          setHover(true);
        }}
        onHoverEnd={() => {
          setHover(false);
        }}
      >
        <div className="question__cont">
          <div className="question__cont--img">
            <img src="./asset/img/img1-8.png" alt="" />
          </div>

          <h2 className="question__cont--h2">what is your question oga me??</h2>
          <div className="question__cont--direct">
            <motion.a
              initial={{
                x: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
              }}
              animate={
                hover
                  ? {
                      x: "7px",
                    }
                  : {
                      x: 0,
                    }
              }
              href=""
            >
              <i className="fas fa-arrow-alt-circle-right"></i>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Question;
