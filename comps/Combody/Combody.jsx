import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Makepost from "@/hooks/makepost";
import { useRouter } from "next/router";

const Combody = ({ id, uuid, title, comment, email, name }) => {
  const [toggle, setToggle] = useState(false);
  const { deleteComment } = Makepost();
  const router = useRouter();
  return (
    <>
      <div className="table__body">
        <div className="">
          <div className="table__head--phone">
            <p>{title.substring(0, 70)}</p>
          </div>
        </div>
        <div>
          <div className="table__head--phone">
            <p> {name} </p>
          </div>
        </div>
        <div>
          <div className="table__head--phone">
            <p> {email} </p>
          </div>
        </div>
        <div>
          <div className="table__head--des">
            <p> {comment} </p>
          </div>
        </div>

        <div className="">
          <div className="table__head--act">
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{
                    // opacity: 0,
                    translateY: 0,
                    left: "0%",
                    translateX: "-50%",
                  }}
                  animate={{
                    // opacity: 1,
                    left: "0%",
                    translateX: "-50%",
                    translateY: "-5px",
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 0,
                  }}
                  className="table__perform"
                >
                  <a
                    onClick={async () => {
                      await deleteComment(id);
                      router.reload();
                    }}
                  >
                    <img src="/asset/icons/adminicon/waste.svg" alt="" />
                  </a>
                  <a href="" data-toggle="modal" data-target="#exampleModal">
                    <img src="/asset/icons/adminicon/view.svg" alt="" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
            {/* <!-- end of the thing --> */}
            <a
              style={{
                cursor: "pointer",
              }}
              className="p-2"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <img
                className="table__menu"
                src="/asset/icons/adminicon/menu_1.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Combody;
