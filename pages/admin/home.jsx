import React from "react";
import { motion } from "framer-motion";
import Animatez from "@/Animate";
import Adminnav from "../../comps/Adminnav";

const home = () => {
  const { animatenav, supplychild, supplycont, tapanimate } = Animatez();
  return (
    <>
      <main className="admin">
        <Adminnav />

        {/* <!-- second nav --> */}
        <section className="dash">
          <motion.div
            variants={supplycont}
            initial="initial"
            whileInView="animate"
            className="dash__grid"
          >
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>Categories</p>
                  <h4>17</h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-50%",
                  }}
                  href="#"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/categoryicon.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>Requeste Quotes</p>
                  <h4>5</h4>
                </div>
                <motion.div
                  whileHover={{
                    y: "-50%",
                  }}
                  href="#"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/quote.svg" alt="" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>posts</p>
                  <h4>20</h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-50%",
                  }}
                  href=""
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/post.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>pages</p>
                  <h4>205</h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-50%",
                  }}
                  href="#"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/pages.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default home;
