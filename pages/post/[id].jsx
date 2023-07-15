import React from "react";
import Nav from "../../comps/Nav/Nav";
import Footer from "../../comps/Footer/Footer";
import Statichook from "@/hooks/statichook";
import Question from "../../comps/Question/Question";
import { motion } from "framer-motion";
import Animatez from "@/Animate";

export const getServerSideProps = async ({ params, query }) => {
  const { twoRandom, getCategory, singlePost, getPost } = Statichook();

  const { id } = query;
  const singlepost = await singlePost(id);

  if (singlepost) {
    const category = await getCategory();

    const tworandom = await twoRandom(singlepost.id);

    const post = await getPost();

    return {
      props: {
        tworandom,
        category,
        post,
        singlepost,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const index = ({ post, singlepost, category, tworandom }) => {
  const { gencont, genchild, menu, menuchild } = Animatez();

  return (
    <>
      <main className="main">
        <Nav post={post} cat={category} />
        <section className="answer">
          <div className="answer__grid">
            <div className="answer__grid--first">
              <div>
                <h1 className="answer__h1">{singlepost.title}</h1>
              </div>
            </div>

            <div className="answer__grid--two">
              <div className="answer__grid--img">
                <img
                  src={`https://jeffmatthewpatten.com/api2/${singlepost.img}`}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            className="answer__des"
            dangerouslySetInnerHTML={{ __html: singlepost.des }}
          ></div>
          <div className="answer__comment">
            <h2 className="answer__comment--h2">comments</h2>

            <div className="answer__comment--div">
              <div className="answer__comment--flex">
                <div className="answer__comment--img">
                  <img src="/asset/icons/Profile.svg" alt="" />
                </div>

                <p className="answer__comment--name">Amaka</p>
              </div>
              <i>
                <p className="answer__comment--message">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam, unde!
                </p>
              </i>
            </div>
            <div className="answer__comment--div">
              <div className="answer__comment--flex">
                <div className="answer__comment--img">
                  <img src="/asset/icons/Profile.svg" alt="" />
                </div>

                <p className="answer__comment--name">Amaka</p>
              </div>
              <i>
                <p className="answer__comment--message">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam, unde!
                </p>
              </i>
            </div>
            <div className="answer__comment--div">
              <div className="answer__comment--flex">
                <div className="answer__comment--img">
                  <img src="/asset/icons/Profile.svg" alt="" />
                </div>

                <p className="answer__comment--name">Amaka</p>
              </div>
              <i>
                <p className="answer__comment--message">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam, unde!
                </p>
              </i>
            </div>
          </div>

          <div className="mt-5 single__comment single__comment--modify">
            <h2 className="single__comment--modify--h2">Leave a comment</h2>
            <p className="p">
              your email address will not be published the required fields are
              marked
              <span className="text-primary specialspan"> *</span>
            </p>
            <form action="">
              <textarea
                placeholder="comment *"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>

              <div className="single__comment--flex">
                <input placeholder="name *" type="text" />
                <input placeholder="email *" type="email" />
                <input placeholder="website" type="text" />
              </div>

              <small className="text-secondary">
                <input className="mr-2" type="checkbox" /> save my name, email
                and pasword on this browser for the next time i comment
              </small>

              <button className="submit">Post Comments</button>
            </form>
          </div>
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
