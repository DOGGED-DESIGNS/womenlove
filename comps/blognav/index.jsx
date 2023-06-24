import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Animatez from "@/Animate";
import Editor from "../../comps/Editor";

const Blognav = () => {
  const [togglesearch, setTogglesearch] = useState(false);

  const [sethover, setSethover] = useState(false);

  const {
    linkcont,
    tapanimate,
    animatenav,
    menu,
    menuchild,
    genchild,
    gencont,
  } = Animatez();

  const [navtoggle, setNavtoggle] = useState(false);
  return (
    <>
      <motion.nav
        variants={animatenav}
        initial="initial"
        whileInView="animate"
        className="main__nav"
      >
        <a className="main__nav--logo" href="#">
          <img src="/asset/icons/logo.svg" alt="" />
        </a>

        <motion.div
          variants={gencont}
          initial="initial"
          whileInView="animate"
          className="bloglink"
        >
          <motion.a variants={genchild} href="#">
            {" "}
            Home{" "}
          </motion.a>
          <motion.a variants={genchild} href="#">
            {" "}
            fire_extinguisher{" "}
          </motion.a>
          <motion.a variants={genchild} href="#">
            {" "}
            safety{" "}
          </motion.a>
          <motion.a variants={genchild} href="#">
            {" "}
            fire{" "}
          </motion.a>
          <motion.div
            onHoverStart={() => {
              setSethover(true);
            }}
            onHoverEnd={() => {
              setSethover(false);
            }}
            variants={genchild}
            className="bloglink__contact"
          >
            <a href="#"> contacts </a>
            <AnimatePresence>
              {sethover && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: "-10px",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: "10px",
                    transition: {
                      delay: 1.2,
                    },
                  }}
                  className="bloglink__contact--extra"
                >
                  <a href="">about_us</a>
                  <a href="">contact_us</a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        <motion.a
          variants={tapanimate}
          whileTap="animate"
          className="bloglink__search"
          onClick={() => {
            setTogglesearch(true);
          }}
        >
          <i className="fa fa-search"></i>
        </motion.a>
      </motion.nav>

      {/* second navigation */}
      <motion.nav
        variants={animatenav}
        initial="initial"
        whileInView="animate"
        className="main__nav2"
      >
        <a className="main__nav2--logo" href="#">
          <img src="./asset/icons/logo.svg" alt="" />
        </a>

        <motion.div
          variants={menu}
          initial="initial"
          whileHover="animate"
          whileInView="animate"
          onClick={() => {
            setNavtoggle(!navtoggle);
          }}
          className="main__nav2--menu border"
        >
          <motion.span variants={menuchild}></motion.span>
          <motion.span variants={menuchild}></motion.span>
          <motion.span variants={menuchild}></motion.span>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {togglesearch && (
          <motion.div
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              y: "-100%",
              opacity: 0,
              transition: {
                type: "spring",
                stiffness: 200,
              },
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            var
            className="searchdialog"
          >
            <form action="">
              <div>
                <input type="text" />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <i
                onClick={() => {
                  setTogglesearch(false);
                }}
                className="fas fa-times"
              ></i>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <!-- start of blognav --> */}

      <AnimatePresence>
        {navtoggle && (
          <motion.nav
            initial={{
              x: "100vw",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
              },
            }}
            exit={{
              x: "100vw",
              opacity: 0,
            }}
            className="blogsmall"
          >
            <span
              onClick={() => {
                setNavtoggle(false);
              }}
              className="blogsmall__close"
            >
              <i className="fas fa-times"></i>
            </span>

            <div className="blogsmall__input">
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fa fa-search"></i>
              </button>
            </div>
            <div className="blogsmall__link">
              <a href="">Fire extinguisher</a>
              <a href="">Safety Helment</a>
              <a href="">Fire</a>
              <a href="">News</a>
            </div>
            <div className="mt-3 mb-2 blogsmall__contact">
              <h5 className="">Contact</h5>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                aperiam?
              </p>
            </div>

            <div className="blogsmall__social">
              <h4>Follow us on social media</h4>
              <div>
                <span>
                  <a href="">
                    {" "}
                    <i className="fab fa-twitter"></i>{" "}
                  </a>
                </span>
                <span>
                  <a href="">
                    {" "}
                    <i className="fab fa-instagram"></i>{" "}
                  </a>
                </span>
                <span>
                  <a href="">
                    {" "}
                    <i className="fab fa-facebook"></i>{" "}
                  </a>
                </span>
                <span>
                  <a href="">
                    {" "}
                    <i className="fab fa-linkedin"></i>{" "}
                  </a>
                </span>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Blognav;
