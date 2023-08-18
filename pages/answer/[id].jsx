import React from "react";
import Nav from "../../comps/Nav/Nav";
import Footer from "../../comps/Footer/Footer";
import Statichook from "@/hooks/statichook";
import { motion, AnimatePresence } from "framer-motion";
import Animatez from "@/Animate";
import Question from "../../comps/Question/Question";

export const getServerSideProps = async ({ params, query }) => {
  const { twoRandom, getCategory, singleQuest, getPost } = Statichook();

  const { id } = params;
  const singlequest = await singleQuest(id);

  if (singlequest) {
    const category = await getCategory();

    const tworandom = await twoRandom(singlequest.id);

    const post = await getPost();

    return {
      props: {
        tworandom,
        category,
        post,
        singlequest,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const index = ({ tworandom, category, singlequest, post }) => {
  const { gencont, genchild, menu, menuchild } = Animatez();

  return (
    <>
      <main className="main">
        <Nav post={post} cat={category} />
        <section className="answer">
          <h1 className="answer__h1">{singlequest.question}</h1>

          <div className="answer__div">
            <div className="answer__social">
              <a href="https://twitter.com/Dogged_Tech" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/dogged_designs/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100083415037542"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div
            className="answer__des"
            dangerouslySetInnerHTML={{ __html: singlequest.des }}
          ></div>
        </section>
      </main>
      <section className=" main more">
        <h1 className="question__h1">Answers should not be hard to find</h1>
        <p className="text-white question__p">we are here to help.</p>

        <motion.div
          variants={gencont}
          initial={"initial"}
          whileInView={"animate"}
          className="question__grid"
        >
          {tworandom.length < 1 ? (
            <h2> loading.. </h2>
          ) : (
            tworandom.map((rand) => {
              return (
                <motion.div variants={genchild}>
                  <Question {...rand} />
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
