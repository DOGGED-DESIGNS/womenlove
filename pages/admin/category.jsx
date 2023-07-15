import { useState, useEffect } from "react";

import { Generalacess } from "@/hooks/context/General";

import { useRouter } from "next/router";
import Adminnav from "../../comps/Adminnav/Adminnav";
import Catbody from "../../comps/Catbody/Catbody";
import Editor from "../../comps/Editor";
import Makepost from "@/hooks/makepost";
import addpost from "./addpost";
import { motion, AnimatePresence } from "framer-motion";
import { withSessionSsr, getSessionData } from "../api/withsession";
import Statichook from "@/hooks/statichook";

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
      const { getCategory } = Statichook();

      const getcategory = await getCategory();

      return {
        props: {
          getcategory,
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

const category = ({ getcategory }) => {
  const {
    id,
    setId,
    des,
    title,
    setTitle,
    setDes,
    loading,
    subtitle1,
    setSubtitle1,
    subtitle2,
    setSubtitle2,
    img1,
    setImg1,
    img2,
    setImg2,
  } = Generalacess();

  const router = useRouter();
  const [value, setvalue] = useState("");
  const {
    postCat,
    addcategory,
    singleCat,
    setAddcategory,
    singlecategory,
    editPost,
    updatepost,
    setUpdatepost,
  } = Makepost();

  //   $id = $_POST['id'];
  //   $subtitle1 = $_POST['subtitle1'];
  //   $subtitle2 = $_POST['subtitle2'];
  //   $des = $_POST['des'];
  //   $img1 = !empty($_FILES['img1'])? $_FILES['img1'] : "";
  //  $img2 = !empty($_FILES['img2'])? $_FILES['img2'] : "";
  const clean = (test) => {
    if (test) {
      return test;
    } else {
      return "";
    }
  };

  const handleSubmit = async (e) => {
    console.log("i have bee coubmited");
    e.preventDefault();

    const formData = new FormData();

    formData.append("message", "addcategory");
    formData.append("id", e.target.elements.id.value);
    formData.append("subtitle1", e.target.elements.subtitle1.value);
    formData.append("title", e.target.elements.title.value);
    formData.append("subtitle2", e.target.elements.subtitle2.value);
    formData.append("des", value);
    formData.append("img1", clean(e.target.elements.img1?.files[0]));
    formData.append("img2", clean(e.target.elements.img2?.files[0]));

    await postCat(formData);
  };
  return (
    <>
      <main className="admin">
        <Adminnav />
        <section className="table">
          <div className="d-flex">
            <button
              data-toggle="modal"
              data-target="#exampleModal"
              className="catbut"
            >
              <img src="/asset/icons/adminicon/add.svg" alt="" /> new category
            </button>
          </div>
          <div className="table__cont container-fluid">
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
                <div className="table__head--des ">
                  <h6>img1</h6>
                </div>
              </div>
              <div>
                <div className="table__head--des ">
                  <h6>img2</h6>
                </div>
              </div>
              <div>
                <div className="table__head--act">
                  <h6>Action</h6>
                </div>
              </div>
            </div>

            {getcategory.length < 1 ? (
              <h2 className=" text-center"> NO category available </h2>
            ) : (
              getcategory.map((cat) => {
                return <Catbody {...cat} />;
              })
            )}
          </div>
        </section>

        {/* <!-- modal --> */}
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
                  onClick={() => {
                    router.reload();
                  }}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <AnimatePresence>
                {addcategory?.message && (
                  <motion.div
                    initial={{
                      y: "-20%",
                      // position: "fixed",
                      // opacity: 0,
                    }}
                    animate={{
                      // opacity: 1,
                      // position: "fixed",
                      y: 0,
                    }}
                    exit={{
                      y: "-20%",
                      opacity: 0,
                      transition: {
                        //   type: "spring",
                        //   stiffness: 200,
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className={`mx-3 alert alert-${addcategory?.type} fade show`}
                  >
                    <strong>{addcategory?.message}</strong>
                    <button
                      className="close alert-dismissable mx-3 "
                      onClick={() => {
                        setAddcategory({});
                      }}
                    >
                      {" "}
                      &times;{" "}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="modal-body">
                {/* <!-- <div className="spinner-grow m-auto d-block"></div> --> */}
                <form onSubmit={handleSubmit} action="">
                  <div className="form-group">
                    <label for="" className="col-form-label">
                      New Category:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="id"
                      id=""
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label for="" className="col-form-label">
                      Title:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      id=""
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label for="" className="col-form-label">
                      Subtitle1:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subtitle1"
                      id=""
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label for="" className="col-form-label">
                      Subtitle2:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subtitle2"
                      id=""
                    />
                    <div className="choosebtn mt-2">
                      <label for="des1">
                        <img src="/asset/icons/adminicon/upload.svg" alt="" />
                        choose file
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="img1"
                        id="des1"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label for="" className="col-form-label">
                      Description:
                    </label>
                    <Editor
                      onChange={(e) => {
                        setvalue(e);
                      }}
                      value={value}
                    />
                    <div className="choosebtn mt-2">
                      <label for="des2">
                        <img src="/asset/icons/adminicon/upload.svg" alt="" />
                        choose file
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="img2"
                        id="des2"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="d-block w-100 ml-auto my-3 btn btn-danger"
                  >
                    submit
                  </button>
                </form>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>

        {/* update modal */}

        <div
          className="modal fade"
          id="update"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-lg modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={() => {
                    router.reload();
                  }}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <AnimatePresence>
                {updatepost?.message && (
                  <motion.div
                    initial={{
                      y: "-20%",
                      // position: "fixed",
                      // opacity: 0,
                    }}
                    animate={{
                      // opacity: 1,
                      // position: "fixed",
                      y: 0,
                    }}
                    exit={{
                      y: "-20%",
                      opacity: 0,
                      transition: {
                        //   type: "spring",
                        //   stiffness: 200,
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className={`mx-3 alert alert-${updatepost?.type} fade show`}
                  >
                    <strong>{updatepost?.message}</strong>
                    <button
                      className="close alert-dismissable mx-3 "
                      onClick={() => {
                        setUpdatepost({});
                      }}
                    >
                      {" "}
                      &times;{" "}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {loading ? (
                <h2>loading</h2>
              ) : (
                <div className="modal-body">
                  {/* <!-- <div className="spinner-grow m-auto d-block"></div> --> */}
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const formdata = new FormData();
                      formdata.append("message", "updatecategory");
                      formdata.append("id", id);
                      formdata.append("title", e.target.elements.title.value);
                      formdata.append(
                        "subtitle2",
                        e.target.elements.subtitle2.value
                      );
                      formdata.append(
                        "subtitle1",
                        e.target.elements.subtitle1.value
                      );
                      formdata.append("des", des);
                      formdata.append(
                        "img1",
                        clean(e.target.elements.img1?.files[0])
                      );

                      formdata.append(
                        "img2",
                        clean(e.target.elements.img2?.files[0])
                      );
                      formdata.append("img1des1", img1);
                      formdata.append("img2des2", img2);

                      await editPost(formdata);
                    }}
                    action=""
                  >
                    <div className="form-group">
                      <label for="" className="col-form-label">
                        New Category:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="id"
                        value={id}
                        onChange={(e) => {
                          setId(e.target.value);
                        }}
                        id=""
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label for="" className="col-form-label">
                        Title:
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        className="form-control"
                        name="title"
                        id=""
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label for="" className="col-form-label">
                        Subtitle1:
                      </label>
                      <input
                        type="text"
                        value={subtitle1}
                        onChange={(e) => {
                          setSubtitle1(e.target.value);
                        }}
                        className="form-control"
                        name="subtitle1"
                        id=""
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label for="" className="col-form-label">
                        Subtitle2:
                      </label>
                      <input
                        value={subtitle2}
                        onChange={(e) => {
                          setSubtitle2(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        name="subtitle2"
                        id=""
                      />
                      <div className="choosebtn mt-2">
                        <label for="des11">
                          <img src="/asset/icons/adminicon/upload.svg" alt="" />
                          choose file
                        </label>
                        <input
                          className="d-none"
                          type="file"
                          name="img1"
                          onChange={(e) => {
                            setImg1("");
                          }}
                          id="des11"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label for="" className="col-form-label">
                        Description:
                      </label>
                      <Editor
                        onChange={(e) => {
                          setDes(e);
                        }}
                        value={des}
                      />
                      <div className="choosebtn mt-2">
                        <label for="des22">
                          <img src="/asset/icons/adminicon/upload.svg" alt="" />
                          choose file
                        </label>
                        <input
                          className="d-none"
                          type="file"
                          name="img2"
                          id="des22"
                          onChange={() => {
                            setImg2("");
                          }}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="d-block w-100 ml-auto my-3 btn btn-danger"
                    >
                      Update
                    </button>
                  </form>
                </div>
              )}

              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default category;
