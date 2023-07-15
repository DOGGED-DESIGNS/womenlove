import React from "react";
import Adminnav from "../../comps/Adminnav/Adminnav";
import { motion } from "framer-motion";
import Animatez from "@/Animate";
// import { withSessionSsr, getSessionData } from "../api/withsession";
import Statichook from "@/hooks/statichook";
import { withSessionSsr, getSessionData } from "../api/withsession";

//
export const getServerSideProps = withSessionSsr(async ({ req }) => {
  const data = getSessionData(req);

  if (data) {
    console.log("data is set");
    if (data?.error == true || data?.status == false) {
      return {
        redirect: {
          destination: "/login",
        },
      };
    } else {
      const { catCount, postCount, commentCount, hitCount, quesCount } =
        Statichook();

      const catcount = await catCount();
      const postcount = await postCount();
      const commentcount = await commentCount();
      const hitcount = await hitCount();
      const quescount = await quesCount();

      return {
        props: {
          catcount,
          postcount,
          commentcount,
          hitcount,
          quescount,
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
});
const index = ({ catcount, postcount, commentcount, hitcount, quescount }) => {
  const { supplychild, supplycont } = Animatez();
  return (
    <>
      <main className="admin">
        <Adminnav />
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
                  <h4>{catcount}</h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-30%",
                  }}
                  href="/admin/category"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/categoryicon.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>Question</p>
                  <h4>{quescount}</h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-30%",
                  }}
                  href="/admin/question"
                  className="dash__img"
                >
                  <img src="/asset/icons/question.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>posts</p>
                  <h4>{postcount}</h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-30%",
                  }}
                  href="/admin/posts"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/post.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>Comments</p>
                  <h4>{commentcount}</h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-30%",
                  }}
                  href="/admin/comment"
                  className="dash__img"
                >
                  <img src="/asset/icons/commentwhite.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>Hits</p>
                  <h4>{hitcount.hits}</h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-30%",
                  }}
                  href="#"
                  className="dash__img"
                >
                  <i className=" fa-2x text-white fas fa-bullseye"></i>
                  {/* <img src="/asset/icons/commentwhite.svg" alt="" /> */}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default index;
