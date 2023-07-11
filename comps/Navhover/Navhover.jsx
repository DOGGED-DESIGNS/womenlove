import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navhover = () => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <motion.div
        onHoverStart={() => {
          setHover(true);
        }}
        onHoverEnd={() => {
          setHover(false);
        }}
        className=""
      >
        <motion.a
          onHoverStart={() => {
            setHover(true);
          }}
          onHoverEnd={() => {
            setHover(false);
          }}
          href="#"
          className="border"
        >
          {" "}
          Dating{" "}
        </motion.a>

        <AnimatePresence>
          {hover && (
            <motion.div
              initial={{
                y: "-20px",
                opacity: 0,
                translateX: "-50%",
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: "-20px",
                opacity: 0,
                transition: {
                  delay: 0.5,
                },
              }}
              className="navhover"
            >
              <a href="" className="text-decoration-none">
                <p>Dating and how to deal with cheating</p>
              </a>
              <a href="" className="text-decoration-none">
                <p>Relationship is what i want</p>
              </a>
              <a href="" className="text-decoration-none">
                <p>Feel free to open up to your partners</p>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* <!-- <div className="point" /> --> */}
      </motion.div>
    </>
  );
};

export default Navhover;
