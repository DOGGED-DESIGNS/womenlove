import React from "react";

const Navhover = () => {
  return (
    <>
      <div>
        <a href="#" className="">
          {" "}
          home{" "}
        </a>
      </div>
      <div>
        <a href="#" className="">
          {" "}
          Relationships{" "}
        </a>
      </div>
      <div>
        <a href="#" className="">
          {" "}
          Women{" "}
        </a>
      </div>
      <div>
        <a href="#" className="">
          {" "}
          Dating{" "}
        </a>
        <div className="navhover">
          <a href="" className="text-decoration-none">
            <p>Dating and how to deal with cheating</p>
          </a>
          <a href="" className="text-decoration-none">
            <p>Relationship is what i want</p>
          </a>
          <a href="" className="text-decoration-none">
            <p>Feel free to open up to your partners</p>
          </a>
        </div>
        {/* <!-- <div className="point" /> --> */}
      </div>

      <div>
        <a href="" className="admin__nav--modify--link text-decoration-none">
          <i className="text-black mr-1 fa-1x fas fa-search"></i>

          {/* <!-- <img
               className="admin__nav--quoteimg"
               src="./asset/icons/adminicon/quotedark.svg"
               alt=""
             /> --> */}
        </a>
      </div>
    </>
  );
};

export default Navhover;
