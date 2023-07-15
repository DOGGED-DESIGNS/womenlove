import { useState, useEffect } from "react";
import Makepost from "@/hooks/makepost";
import { useRouter } from "next/router";

import { motion, AnimatePresence } from "framer-motion";
// "id": "",
// 		"subtitle1": "",
// 		"subtitle2": "",
// 		"des": "",
// 		"img1": "",
// 		"img2": ""
const Catbody = ({ id, title, subtitle1, subtitle2, des, img1, img2 }) => {
  useEffect(() => {
    console.log(title);
  }, []);

  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  const { deleteCat, singleCat } = Makepost();
  return (
    <>
      <div className="shadow-sm table__body">
        <div>
          <div className="table__head--name">
            <p>{id}</p>
          </div>
        </div>

        <div>
          <div className="table__head--phone">
            <p> {`${title.substring(0, 20)}..`} </p>
          </div>
        </div>
        <div>
          <div class="table__head--des d-flex align-items-center">
            <div class="desimg">
              <img src={`https://jeffmatthewpatten.com/api2${img1}`} alt="" />
            </div>
          </div>
        </div>
        <div className="">
          <div class="  table__head--des d-flex align-items-center">
            <div class="desimg">
              <img src={`https://jeffmatthewpatten.com/api2${img2}`} alt="" />
            </div>
          </div>
        </div>
        <div className=" ">
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
                      await deleteCat(id);
                      router.reload();
                    }}
                    href=""
                  >
                    <img src="/asset/icons/adminicon/waste.svg" alt="" />
                  </a>
                  {/* <a href="" data-toggle="modal" data-target="#exampleModal">
                    <img src="/asset/icons/adminicon/view.svg" alt="" />
                  </a> */}
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    data-target="#update"
                    data-toggle="modal"
                    onClick={async () => {
                      await singleCat(id);
                    }}
                  >
                    <img src="/asset/icons/adminicon/update.svg" alt="" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* <!-- end of the thing --> */}
            <a
              className="p-3"
              style={{
                cursor: "pointer",
              }}
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

export default Catbody;
