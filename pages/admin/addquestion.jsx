import { useState } from "react";
import Adminnav from "../../comps/Adminnav/Adminnav";
import { motion, AnimatePresence } from "framer-motion";
import { withSessionSsr, getSessionData } from "../api/withsession";
import Statichook from "@/hooks/statichook";
import Editor from "../../comps/Editor";
import Makepost from "@/hooks/makepost";
import { Generalacess } from "@/hooks/context/General";

export const getServerSideProps = withSessionSsr(async ({ req }) => {
  const data = getSessionData(req);

  if (data?.error == true || data?.status == false) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  } else {
    const {
      catCount,
      postCount,
      commentCount,
      hitCount,
      quesCount,
      getCategory,
    } = Statichook();

    const getcategory = await getCategory();

    return {
      props: {
        getcategory,
      },
    };
  }
});

const addquestion = ({ getcategory }) => {
  const {
    postPost,
    postQuest,
    addpost,
    addquestion,
    setAddquestion,
    setAddpost,
  } = Makepost();

  const { loading2 } = Generalacess();
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

    // $id = $_POST['id'];
    //     $question = $_POST['question'];
    //     $des = $_POST['des'];
    //     $img1 = !empty($_FILES['img1'])? $_FILES['img1'] : "";
    const formData = new FormData();

    formData.append("message", "addquestion");
    formData.append("id", e.target.elements.id.value);
    formData.append("question", e.target.elements.question.value);
    formData.append("des", value);
    formData.append("img1", clean(e.target.elements.img1?.files[0]));

    await postQuest(formData);
  };
  return (
    <>
      <main className="admin">
        <Adminnav />
        <section className="addpost">
          <AnimatePresence>
            {addquestion?.message && (
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
                className={`mx-3 my-3 alert alert-${addquestion?.type} fade show`}
              >
                <strong>{addquestion?.message}</strong>
                <a></a>
                <button
                  className="close alert-dismissable mx-3 "
                  onClick={() => {
                    setAddquestion({});
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
                    return <option value={ma.id}> {ma.id} </option>;
                  })}
                </select>
              </div>
            </div>
            <div className="addpost__title">
              <label for="">Title</label>
              <input name="question" className="addpost__title" type="text" />
            </div>
            <div className="addpost__text">
              <label for=""> description </label>
              <Editor
                onChange={(e) => {
                  setValue(e);
                }}
                value={value}
              />
              <div className="choosebtn mt-3">
                <label for="des1">
                  <img src="/asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input className="d-none" type="file" name="img1" id="des1" />
              </div>
            </div>

            <button type="submit"> {loading2 ? "Loading.." : "Submit"} </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default addquestion;
