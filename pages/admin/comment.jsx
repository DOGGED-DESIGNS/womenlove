import React from "react";
import Adminnav from "../../comps/Adminnav/Adminnav";
import Combody from "../../comps/Combody/Combody";

import Statichook from "@/hooks/statichook";
import { withSessionSsr, getSessionData } from "../api/withsession";
import { Generalacess } from "@/hooks/context/General";
//
export const getServerSideProps = withSessionSsr(async ({ req }) => {
  const data = getSessionData(req);

  if (data) {
    if (data?.error == true || data?.status == false) {
      return {
        redirect: {
          destination: "/login",
        },
      };
    } else {
      const {
        getComment,
        catCount,
        postCount,
        commentCount,
        hitCount,
        quesCount,
      } = Statichook();

      const getcomment = await getComment();

      return {
        props: {
          getcomment,
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

const comment = ({ getcomment }) => {
  const {
    id,
    setId,
    des,
    comment,
    setComment,
    title,
    setTitle,
    setDes,
    subtitle1,
    setSubtitle1,
    subtitle2,
    setSubtitle2,
    img1,
    setImg1,
    img2,
    setImg2,
  } = Generalacess();
  return (
    <>
      <main className="admin">
        <Adminnav />
        <section className="table">
          <div className="shadow-sm table__cont container-fluid">
            <div className="table__head">
              <div>
                <div className="table__head--des">
                  <h6>Post</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6>Name</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6>Email</h6>
                </div>
              </div>
              <div>
                <div className="table__head--des">
                  <h6>Comment</h6>
                </div>
              </div>
              <div>
                <div className="table__head--act">
                  <h6>action</h6>
                </div>
              </div>
            </div>
            {getcomment.length < 1 ? (
              <h2 className=" text-center text-info">NO COMMENT AVIALABLE</h2>
            ) : (
              getcomment.map((ma) => {
                return <Combody {...ma} />;
              })
            )}
            {/* <Combody />
            <Combody />
            <Combody /> */}
          </div>
        </section>

        {/* <!-- Button trigger modal --> */}

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-lg modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* <!-- <div className="spinner-grow m-auto d-block"></div> --> */}
                <div className="postdisplay">
                  {/* <!-- <div className="postdisplay__tag">
                  tag: <span>extinguisher</span><span>fire</span>
                </div> --> */}
                  <div className="postdisplay__cat">
                    Post: <span> {comment.title} </span>
                  </div>
                  <div className="postdisplay__cat">
                    Email: <span>{comment.email}</span>
                  </div>

                  <div className="postdisplay__cat">
                    Comments:
                    <span className="text-white">{comment.comment}</span>
                  </div>
                  {/* <div className="postdisplay__cat">
                    email: <span>uzoechijerry@gmail.com</span>
                  </div> */}
                  {/* <!-- description display --> */}

                  {/* <!-- end of description display --> */}
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default comment;
