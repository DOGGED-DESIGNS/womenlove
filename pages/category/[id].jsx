import React from "react";
import Nav from "../../comps/Nav/Nav";
import Footer from "../../comps/Footer/Footer";
import Statichook from "@/hooks/statichook";
import { motion } from "framer-motion";
import Animatez from "@/Animate";
import Catbutton from "../../comps/Catbutton/Catbutton";
import Question from "../../comps/Question/Question";
import Postbutton from "../../comps/Postbutton/Postbutton";
export const getServerSideProps = async ({ params, query }) => {
  const { twoRandom, getCategory, getPost, singleCat, categoryPost } =
    Statichook();

  const { id } = query;
  const singlecat = await singleCat(id);

  if (singlecat) {
    const categorypost = await categoryPost(singlecat.id);
    const category = await getCategory();

    const tworandom = await twoRandom(singlecat.id);

    const post = await getPost();
    console.log(categorypost);

    return {
      props: {
        tworandom,
        categorypost,
        category,
        post,
        singlecat,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const index = ({ post, singlecat, category, tworandom, categorypost }) => {
  const { gencont, genchild, menu, menuchild } = Animatez();

  return (
    <>
      <main className="main">
        <Nav post={post} cat={category} />
        <section className="answer">
          <div className="answer__grid">
            <div className="answer__grid--first">
              <h1 className="answer__h1"> {singlecat.title} </h1>
              <p className="answer__p">{singlecat.subtitle1}</p>
            </div>
            <div className="answer__grid--two">
              <div className="answer__grid--img answer__grid--imgmodify">
                <img src={`http://localhost/women/${singlecat.img1}`} alt="" />
              </div>
            </div>
          </div>
          <section className="confuse confuse__modify">
            <div className="confuse__cont">
              <div>
                <div className="extra">
                  <img
                    src={
                      singlecat.img2
                        ? `http://localhost/women/${singlecat.img2}`
                        : `/asset/icons/love.svg`
                    }
                    alt=""
                  />
                </div>
              </div>

              <h2 className="confuse__cont--h2"> {singlecat.subtitle2} </h2>
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
                categorypost.map((ca) => {
                  return (
                    <motion.div variants={genchild}>
                      <Postbutton {...ca} />
                    </motion.div>
                  );
                })
              )}
            </motion.div>
          </section>
          <div
            className="answer__des"
            dangerouslySetInnerHTML={{ __html: singlecat.des }}
          ></div>
        </section>
      </main>
      <section className="main more">
        <h1 className="question__h1">Answers should not be hard to find</h1>
        <p className="text-white question__p">we are here to help.</p>
        <motion.div
          variants={gencont}
          initial={"initial"}
          whileInView={"animate"}
          className="question__grid"
        >
          {tworandom.length < 1 ? (
            <h2> ?? </h2>
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
