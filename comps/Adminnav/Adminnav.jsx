import React from "react";

const Adminnav = () => {
  return (
    <>
      <nav className="admin__nav">
        <a className="admin__nav--logo" href="#">
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
            <button className="btn btn-outline-dark btn-sm">
              <i className="text-black mr-1 fa-1x fas fa-sign-out-alt"></i>
            </button>
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
