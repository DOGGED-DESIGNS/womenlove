import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navhover = ({ id, post }) => {
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
          href={`/category/${id}`}
          className=""
        >
          {id}
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
              {postz.map((pa) => {
                return (
                  <a href={`/post/${pa.uuid}`} className="text-decoration-none">
                    <p> {`${pa.title.substring(0.3)}..`} </p>
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* <!-- <div className="point" /> --> */}
      </motion.div>
    </>
  );
};

export default Navhover;
