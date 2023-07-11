import { useState } from "react";
import Navhover from "../Navhover/Navhover";
import { motion, AnimatePresence } from "framer-motion";
import Animatez from "@/Animate";
import Smallhover from "../Smallhover/Smallhover";
const Nav = () => {
  const { menu, menuchild } = Animatez();
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const [search2, setSearch2] = useState(false);
  return (
    <>
      <AnimatePresence>
        {search2 && (
          <motion.div
            initial={{
              y: "-100%",
              //   opacity: 0,
            }}
            animate={{
              //   opacity: 1,
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
            className="searchdialog__modify searchdialog"
          >
            <form action="">
              <div>
                <input className=" " type="text" />
                <button className="  " type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <i
                onClick={() => {
                  setSearch2(false);
                }}
                className="fas fa-times"
              ></i>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="admin__nav admin__nav--modify">
        <a className="admin__nav--logo" href="#">
          <img src="./asset/icons/testlogo.svg" alt="" />
        </a>

        <div className="womenlink">
          <Navhover />
          <Navhover />
          <Navhover />
          <Navhover />
          <Navhover />

          <div>
            <a
              href="#"
              className="admin__nav--modify--link text-decoration-none"
            >
              <i
                onClick={() => {
                  setSearch2(true);
                }}
                className="text-black mr-1 fa-1x fas fa-search"
              ></i>

              {/* <!-- <img
               className="admin__nav--quoteimg"
               src="./asset/icons/adminicon/quotedark.svg"
               alt=""
             /> --> */}
            </a>
          </div>
        </div>

        {/* <!-- this is just what i want to do --> */}
      </nav>

      <nav className="main__nav2">
        <a className="main__nav2--logo" href="#">
          <img src="./asset/icons/testlogo.svg" alt="" />
        </a>

        <motion.div
          onClick={() => {
            setToggle(true);
          }}
          variants={menu}
          initial={"initial"}
          whileInView={"animate"}
          whileHover={"animate"}
          className="main__nav2--menu"
        >
          <motion.span variants={menuchild}></motion.span>
          <motion.span variants={menuchild}></motion.span>
          <motion.span variants={menuchild}></motion.span>
        </motion.div>
      </nav>

      <AnimatePresence>
        {toggle && (
          <motion.div
            transition={{
              delay: 0.5,
              type: "spring",
              // stiffness: 100,
              // damping: 10,
              // mass: 10,
            }}
            initial={{
              x: "100vw",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100vw",
            }}
            className="navmobile"
          >
            <AnimatePresence>
              {search && (
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
                  className="navmobile__search  "
                >
                  <div>
                    <form className=" d-flex  align-items-center">
                      <input
                        className="form-control form-control-sm"
                        placeholder="search"
                        type="text"
                      />
                      <button className="btn " type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <a href="#" className="text-decoration-none">
                    <i
                      onClick={() => {
                        setSearch(false);
                      }}
                      className="fas fa-times"
                    ></i>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="  align-items-center d-flex mb-4 pr-4 py-2">
              <i
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSearch(true);
                }}
                className="fas fa-search text-white mx-3  "
              ></i>
              <i
                onClick={() => {
                  setToggle(false);
                }}
                style={{
                  cursor: "pointer",
                }}
                className="ml-auto d-block text-white fa-1x fas fa-times"
              ></i>
            </div>

            <Smallhover />
            <Smallhover />
            <Smallhover />
            <Smallhover />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
