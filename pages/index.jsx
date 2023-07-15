import React from "react";
import Question from "../comps/Question/Question";
import Nav from "../comps/Nav/Nav";
import Footer from "../comps/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Animatez from "@/Animate";
import Catbutton from "../comps/Catbutton/Catbutton";
import Statichook from "@/hooks/statichook";
import category from "./admin/category";

export const getServerSideProps = async () => {
  const { fourRandom, getCategory, getPost } = Statichook();

  const fourrandom = await fourRandom();

  const category = await getCategory();

  const post = await getPost();

  return {
    props: {
      fourrandom,
      category,
      post,
    },
  };
};

const index = ({ fourrandom, category, post }) => {
  const { gencont, genchild, menu, menuchild } = Animatez();
  return (
    <>
      <main className="main ">
        <Nav post={post} cat={category} />

        <header className="header">
          <motion.h1
            variants={genchild}
            initial="initial"
            animate="animate"
            className="header__h1"
          >
            Love is more than what <br />
            you feel.
          </motion.h1>
        </header>
        {/* <!-- question section --> */}
        <section className="question">
          <h1 className="question__h1">
            Have a question about your <br />
            Relationship?
          </h1>
          <p className="question__p">know things about relsationsip</p>
          <motion.div
            variants={gencont}
            initial={"initial"}
            whileInView={"animate"}
            className="question__grid"
          >
            {fourrandom.length < 1 ? (
              <h2> loading.. </h2>
            ) : (
              fourrandom.map((rand) => {
                return (
                  <motion.div variants={genchild}>
                    <Question {...rand} />
                  </motion.div>
                );
              })
            )}
          </motion.div>

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
          {category.length < 1 ? (
            <h2>loading..</h2>
          ) : (
            category.map((ca) => {
              return (
                <motion.div variants={genchild}>
                  <Catbutton id={ca.id} />
                </motion.div>
              );
            })
          )}
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default index;
