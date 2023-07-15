import { useState, useEffect } from "react";
import Adminnav from "../../../comps/Adminnav/Adminnav";
import { motion, AnimatePresence } from "framer-motion";
import { withSessionSsr, getSessionData } from "../../api/withsession";
import Statichook from "@/hooks/statichook";
import Editor from "../../../comps/Editor";
import Makepost from "@/hooks/makepost";
import { Generalacess } from "@/hooks/context/General";

export const getServerSideProps = withSessionSsr(
  async ({ req, params, id }) => {
    const data = getSessionData(req);

    if (data?.error == true || data?.status == false) {
      return {
        redirect: {
          destination: "/login",
        },
      };
    } else {
      const { id } = params;

      const {
        catCount,
        postCount,
        commentCount,
        hitCount,
        quesCount,
        getCategory,

        singleQuest,
      } = Statichook();

      const getcategory = await getCategory();
      const singlequest = await singleQuest(id);
      if (singlequest) {
        return {
          props: {
            getcategory,
            singlequest,
          },
        };
      } else {
        return {
          notFound: true,
        };
      }
    }
  }
);

const editquest = ({ getcategory, singlequest }) => {
  const {
    postPost,
    updateques,
    setUpdateques,
    editQuest,
    addpost,
    setAddpost,
    editPost,
    setupdateques,
  } = Makepost();

  const { loading2 } = Generalacess();
  const [title, setTitle] = useState(singlequest.question);
  const [des, setDes] = useState(singlequest.des);
  const [img1des1, setImg1des1] = useState(singlequest.img);
  const [category, setCategory] = useState(singlequest.id);
  const [uuid, setUuid] = useState(singlequest.uuid);

  useEffect(() => {}, []);

  const clean = (test) => {
    if (test) {
      return test;
    } else {
      return "";
    }
  };

  const [value, setValue] = useState("");
  const handleSubmitz = async (e) => {
    e.preventDefault();

    // $uuid = $_POST['uuid'];
    // $id = $_POST['id'];
    // $title = $_POST['title'];
    // $des = $_POST['des'];
    // $img1des1 = $_POST['img1des1'];
    // $img = !empty($_FILES['img1'])? $_FILES['img1'] : "";
    const formData = new FormData();

    formData.append("message", "editquestion");
    formData.append("uuid", uuid);
    formData.append("id", e.target.elements.id.value);
    formData.append("question", e.target.elements.question.value);
    formData.append("des", des);
    formData.append("img1des1", img1des1);
    formData.append("img1", clean(e.target.elements.img1?.files[0]));

    // await postPost(formData);
    await editQuest(formData);
  };
  return (
    <>
      <main className="admin">
        <Adminnav />
        <section className="addpost">
          <AnimatePresence>
            {updateques?.message && (
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
                className={`mx-3 my-3 alert alert-${updateques?.type} fade show`}
              >
                <strong>{updateques?.message}</strong>
                <a></a>
                <button
                  className="close alert-dismissable mx-3 "
                  onClick={() => {
                    setUpdateques({});
                  }}
                >
                  {" "}
                  &times;{" "}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <form onSubmit={handleSubmitz} action="" className="addpost__form">
            <div className="addpost__select">
              <div>
                <label for="">category</label>
                <select name="id" id="">
                  {getcategory.map((ma) => {
                    return (
                      <option
                        selected={ma.id == category && true}
                        value={ma.id}
                      >
                        {ma.id}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="addpost__title">
              <label for="">Question</label>
              <input
                value={title}
                onChange={() => {
                  setTitle(e.target.value);
                }}
                name="question"
                className="addpost__title"
                type="text"
              />
            </div>
            <div className="addpost__text">
              <label for=""> description </label>
              <Editor
                onChange={(e) => {
                  setDes(e);
                }}
                value={des}
              />
              <div className="choosebtn mt-3">
                <label for="des1">
                  <img src="/asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input
                  onChange={() => {
                    setImg1des1("");
                  }}
                  className="d-none"
                  type="file"
                  name="img1"
                  id="des1"
                />
              </div>
            </div>

            <button type="submit"> {loading2 ? "loading.." : "submit"} </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default editquest;
