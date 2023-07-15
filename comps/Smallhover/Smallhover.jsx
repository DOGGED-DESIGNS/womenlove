import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Smallhover = ({ id, post }) => {
  const [hover, setHover] = useState(false);
  const [postz, setPostz] = useState([]);

  useEffect(() => {
    console.log(post);
    const filt = post.filter((fi) => {
      if (fi.id == id) {
        return fi;
      }
    });

    setPostz(filt);
  }, []);
  return (
    <>
      <div className="navmobile__info">
        <div className="navmobile__question">
          <p> {id} </p>
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
              {postz.map((pa) => {
                return (
                  <a href={`/post/${pa.uuid}`}>
                    <div>
                      <p> {`${pa.title.substring(0.3)}..`} </p>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Smallhover;
