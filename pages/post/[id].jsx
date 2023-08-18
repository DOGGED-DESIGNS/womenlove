import React from "react";
import Nav from "../../comps/Nav/Nav";
import Footer from "../../comps/Footer/Footer";
import Question from "../../comps/Question/Question";
import Animatez from "@/Animate";
import { useEffect, useState } from "react";
import Statichook from "@/hooks/statichook";
import { motion, AnimatePresence } from "framer-motion";
import Makepost from "@/hooks/makepost";
import { useRouter } from "next/router";
import Eachcomment from "../../comps/Eachcomment/Eachcomment";

export const getServerSideProps = async ({ params, query }) => {
  const { twoRandom, getCategory, singlePost, getPost, getComment } =
    Statichook();

  const { id } = query;
  const singlepost = await singlePost(id);

  if (singlepost) {
    const category = await getCategory();
    const getcomment = await getComment();

    const tworandom = await twoRandom(singlepost.id);

    const post = await getPost();

    return {
      props: {
        tworandom,
        getcomment,
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

const index = ({ post, singlepost, category, getcomment, tworandom }) => {
  const { gencont, genchild, menu, menuchild } = Animatez();
  const { addComment } = Makepost();
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      e.target.elements.comment.value == "" ||
      e.target.elements.email.value == "" ||
      e.target.elements.name.value == ""
    ) {
      setError(true);
    } else {
      const form = new FormData();

      form.append("message", "addcomment");
      form.append("uuid", singlepost.uuid);
      form.append("comment", e.target.elements.comment.value);
      form.append("email", e.target.elements.email.value);
      form.append("name", e.target.elements.name.value);
      form.append("website", e.target.elements.website.value);

      await addComment(form);

      router.reload();
    }
  };

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
                  src={`https://jeffmatthewpatten.com/api1/${singlepost.img}`}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            className="answer__des"
            dangerouslySetInnerHTML={{ __html: singlepost.des }}
          ></div>
          <div className=" answer__comment--div">
            <div className="answer__comment">
              <h2 className="answer__comment--h2">comments</h2>

              {getcomment.map((com) => {
                return <Eachcomment {...com} />;
              })}
            </div>
          </div>

          <div className="mt-5 single__comment single__comment--modify">
            <h5 className="headtext">Leave a reply</h5>
            <p className="p">
              your email address will not be published the required fields are
              marked
              <span className="text-primary specialspan"> *</span>
            </p>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: "-20px",
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: "-30px",
                    transition: {
                      type: "spring",
                      // stiffness: 500,
                    },
                  }}
                  className={`alert show  alert-dismissible alert-danger fade`}
                >
                  <strong> kindly fill the neccessary form fields </strong>

                  <button
                    onClick={() => {
                      setError(false);
                    }}
                    className="close"
                  >
                    {" "}
                    &times;{" "}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            <form onSubmit={handleSubmit} action="">
              <textarea
                placeholder="comment *"
                name="comment"
                id=""
                cols="30"
                maxLength={200}
                rows="10"
              ></textarea>

              <div className="single__comment--flex">
                <input
                  placeholder="name *"
                  maxLength={20}
                  name="name"
                  type="text"
                />
                <input
                  placeholder="email *"
                  maxLength={20}
                  name="email"
                  type="email"
                />
                <input
                  placeholder="website"
                  maxLength={20}
                  name="website"
                  type="text"
                />
              </div>

              {/* <small className="text-secondary">
                    <input className="mr-2" type="checkbox" /> save my name,
                    email and pasword on this browser for the next time i
                    comment
                  </small> */}

              <motion.button
                whileHover={{
                  origins: 0,
                  scale: 0.8,
                  boxShadow: "0px 0px 7px white",
                }}
                type="submit"
                whileTap={{
                  originx: 0,
                  scale: 1.1,
                }}
                className="submit"
              >
                Post Comments
              </motion.button>
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
