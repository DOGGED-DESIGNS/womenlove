import React from "react";
import Adminnav from "../../comps/Adminnav/Adminnav";

import Statichook from "@/hooks/statichook";
import { withSessionSsr, getSessionData } from "../api/withsession";
import Postbody from "../../comps/Postbody/Postbody";
import { Generalacess } from "@/hooks/context/General";
import Quesbody from "../../comps/Quesbody/Quesbody";

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
        catCount,
        getQuest,
        postCount,
        commentCount,
        hitCount,
        quesCount,
      } = Statichook();

      const getquest = await getQuest();

      return {
        props: {
          getquest,
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

const question = ({ getquest }) => {
  const { loading, setLoading, singlequest } = Generalacess();
  return (
    <>
      <main className="main">
        <Adminnav />
        <section className="table">
          <div class="d-flex">
            <a
              href="/admin/addquestion"
              class="catbut text-white  text-decoration-none"
            >
              <img src="/asset/icons/adminicon/add.svg" alt="" /> new question
            </a>
          </div>
          <div className="shadow-sm table__cont container-fluid">
            <div className="table__head">
              <div>
                <div className="table__head--name">
                  <h6>Category</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6>Title</h6>
                </div>
              </div>
              <div>
                <div className="table__head--des">
                  <h6>Img</h6>
                </div>
              </div>

              <div>
                <div className="table__head--act">
                  <h6>action</h6>
                </div>
              </div>
            </div>
            {getquest.length < 1 ? (
              <h2 className=" text-center">No post available</h2>
            ) : (
              getquest.map((get) => {
                return <Quesbody {...get} />;
              })
            )}
          </div>
        </section>

        {/* <!-- Button trigger modal --> */}

        {/* <!-- <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button> --> */}

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="quest"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-lg modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5> */}
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              {loading ? (
                <h2 className=" text-center">Loading..</h2>
              ) : (
                <div className="modal-body">
                  {/* <!-- <div className="spinner-grow m-auto d-block"></div> --> */}
                  <div
                    className="postdisplay p-4"
                    style={{
                      background: "red",
                    }}
                  >
                    {/* <!-- description display --> */}

                    <div className="postdisplay__des1">
                      <div className="postdisplay__des1text ">
                        <p>
                          <img
                            className="postdisplay__img  mr-3  "
                            src={`https://jeffmatthewpatten.com/api2/${singlequest.img}`}
                            alt=""
                          />
                          <span className="postdisplay__title">
                            {singlequest.question}
                          </span>
                          <br />
                          <div
                            style={{
                              color: "white",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: singlequest.des,
                            }}
                          ></div>
                          <div className=" clearfix"></div>
                        </p>
                      </div>
                    </div>

                    {/* <!-- end of description display --> */}
                    {/* <div className="postdisplay__cat">
                    Author: <span>Uzoechi jeremaih</span>
                  </div> */}
                    {/* <div className=" postdisplay__cat">
                      date:{" "}
                      <span className=" text-white-50">
                        {" "}
                        {singlequest.time}{" "}
                      </span>
                    </div> */}
                  </div>
                </div>
              )}

              <div className="modal-footer">
                {/* <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button> */}
                {/* <button type="button" className="btn btn-primary">
                  Save changes
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default question;
