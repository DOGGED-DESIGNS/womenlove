import React from "react";
import Question from "../comps/Question/Question";
import Nav from "../comps/Nav/Nav";
import Footer from "../comps/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Animatez from "@/Animate";

const index = () => {
  const { gencont, genchild, menu, menuchild } = Animatez();
  return (
    <>
      <main className="main ">
        <Nav />

        <header className="header">
          <h1 className="header__h1">
            Love is more than what <br />
            you feel.
          </h1>
        </header>
        {/* <!-- question section --> */}
        <section className="question">
          <h1 className="question__h1">
            Have a question about your <br />
            Relationship?
          </h1>
          <p className="question__p">know things about relsationsip</p>
          <div className="question__grid">
            <Question />
          </div>

          <div className="question__img">
            <img src="./asset/img/img2-8.png" alt="" />
          </div>
        </section>

        {/* <!-- confusing section --> */}
        {/* <!-- div nav --> */}
      </main>
      <section className="confuse main">
        <div className="confuse__cont">
          <div className="confuse__cont--img">
            <img src="./asset/img/img2-8.png" alt="" />
          </div>
          <h2 className="confuse__cont--h2">
            Love is confusing. <br />
            we are here to help.
          </h2>
        </div>
        <motion.div
          variants={gencont}
          initial={"initial"}
          whileInView={"animate"}
          className="confuse__grid"
        >
          <motion.div variants={genchild}>
            <a className="confuse__grid--a" href="#">
              {" "}
              Dating{" "}
            </a>
          </motion.div>
          <motion.div variants={genchild}>
            <a className="confuse__grid--a" href="#">
              {" "}
              Men{" "}
            </a>
          </motion.div>
          <motion.div variants={genchild}>
            <a className="confuse__grid--a" href="#">
              {" "}
              Relationships{" "}
            </a>
          </motion.div>
          <motion.div variants={genchild}>
            <a className="confuse__grid--a" href="#">
              {" "}
              Women{" "}
            </a>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default index;
