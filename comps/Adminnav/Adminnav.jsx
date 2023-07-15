import React from "react";
import { withSessionSsr, getSessionData } from "../../pages/api/withsession";
import { useRouter } from "next/router";
import axios from "axios";

// export const getServerSideProps = withSessionSsr(async ({ req }) => {
//   const data = getSessionData(req);

//   // console.log(data);

//   if (data?.error == true || data?.status == false) {
//     return {
//       redirect: {
//         destination: "/login",
//       },
//     };
//   }
//   return {
//     props: data ? data : { message: "", error: "", status: "" },
//   };
// });

const Adminnav = ({ tata }) => {
  const router = useRouter();

  return (
    <>
      <nav className="admin__nav">
        <a href={"/admin"} className="admin__nav--logo">
          <img src="/asset/icons/testlogo.svg" alt="" />
        </a>

        <div className="admin__nav--link">
          <div className="admin__nav--input">
            <input type="text" placeholder=" find " />
            <a href="#">
              <img
                className="admin__nav--search"
                src="/asset/icons/adminicon/search.svg "
                alt=""
              />
            </a>
          </div>
          <a
            href="#"
            className="mx-3 text-decoration-none admin__nav--notification"
          >
            <img
              className="admin__nav--notificationimg"
              src="/asset/icons/commentdark.svg"
              alt=""
            />
            <div className="admin__nav--info1 text-decoration-none">29</div>
          </a>

          <a
            href=""
            className="mx-3 my-2 text-decoration-none admin__nav--quote"
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  await axios.post(
                    "/api/withsession",
                    {
                      message: "logout",
                    },
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );
                  router.reload();
                } catch (error) {}
              }}
            >
              <button type="submit" className="btn btn-outline-dark btn-sm">
                <i className="text-black mr-1 fa-1x fas fa-sign-out-alt"></i>
              </button>
            </form>
            {/* <!-- <img
              className="admin__nav--quoteimg"
              src="./asset/icons/adminicon/quotedark.svg"
              alt=""
            /> --> */}
          </a>
        </div>

        {/* <!-- this is just what i want to do --> */}
      </nav>
    </>
  );
};

export default Adminnav;
