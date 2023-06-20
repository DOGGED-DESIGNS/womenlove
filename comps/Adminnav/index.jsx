import React from "react";

import { motion } from "framer-motion";
import Animatez from "@/Animate";

const Adminnav = () => {
  const { animatenav, supplychild, supplycont, tapanimate } = Animatez();
  return (
    <>
      <motion.nav
        variants={animatenav}
        initial="initial"
        whileInView="animate"
        className="admin__nav"
      >
        <a className="admin__nav--logo" href="#">
          <img src="/asset/icons/logo.svg" alt="" />
        </a>

        <div className="admin__nav--link">
          <div className="admin__nav--input">
            <input type="text" placeholder=" find " />
            <motion.a variants={tapanimate} whileTap="animate" href="#">
              <img
                className="admin__nav--search"
                src="/asset/icons/adminicon/search.svg "
                alt=""
              />
            </motion.a>
          </div>
          <motion.a
            variants={tapanimate}
            whileTap="animate"
            href="#"
            className="admin__nav--notification"
          >
            <img
              className="admin__nav--notificationimg"
              src="/asset/icons/adminicon/notification.svg"
              alt=""
            />
            <div className="admin__nav--info1">29</div>
          </motion.a>
          <motion.a
            variants={tapanimate}
            whileTap="animate"
            href="#"
            className="admin__nav--quote"
          >
            <img
              className="admin__nav--quoteimg"
              src="/asset/icons/adminicon/quotedark.svg"
              alt=""
            />
            <div className="admin__nav--info2">7</div>
          </motion.a>
        </div>

        {/* <!-- this is just what i want to do --> */}
      </motion.nav>
    </>
  );
};

export default Adminnav;
