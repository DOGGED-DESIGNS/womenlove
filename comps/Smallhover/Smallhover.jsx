import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Smallhover = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className="navmobile__info">
        <div className="navmobile__question">
          <p>Relationship</p>
          <motion.i
            animate={
              hover
                ? {
                    rotate: 180,
                  }
                : {
                    rotate: 0,
                  }
            }
            onClick={() => {
              setHover(!hover);
            }}
            className="fas fa-chevron-circle-down"
          ></motion.i>
        </div>
        <AnimatePresence>
          {hover && (
            <motion.div
              initial={{
                y: "-20%",
                // position: "fixed",
                // opacity: 0,
              }}
              animate={{
                // opacity: 1,
                // position: "fixed",
                y: 0,
              }}
              exit={{
                y: "-20%",
                opacity: 0,
                transition: {
                  //   type: "spring",
                  //   stiffness: 200,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="navmobile__topic"
            >
              <a href="#">
                <div>
                  <p>Have you confirm he is not faking it</p>
                </div>
              </a>
              <a href="#">
                <div>
                  <p>Dont waste your time on a broke guy</p>
                </div>
              </a>
              <a href="">
                <div>
                  <p>Do men deserve anything</p>
                </div>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Smallhover;
