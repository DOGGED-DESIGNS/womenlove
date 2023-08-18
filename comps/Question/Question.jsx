import { useState } from "react";
import Animatez from "@/Animate";
import { motion } from "framer-motion";

const Question = ({ question, img, uuid }) => {
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
            <img src={`https://jeffmatthewpatten.com/api1/${img}`} alt="" />
          </div>

          <h2 className="question__cont--h2"> {question} </h2>
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
              href={`/answer/${uuid}`}
            >
              <motion.i
                whileTap={{
                  originx: 0,
                  scale: 1.1,
                }}
                className="fas fa-arrow-alt-circle-right"
              ></motion.i>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Question;
