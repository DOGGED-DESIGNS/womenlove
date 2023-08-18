import React from "react";

const Eachcomment = ({ name, comment }) => {
  return (
    <>
      <div className="answer__comment--div">
        <div className="answer__comment--flex">
          <div className="answer__comment--img">
            <img src="/asset/icons/Profile.svg" alt="" />
          </div>

          <p className="answer__comment--name"> {name} </p>
        </div>
        <i>
          <p className="answer__comment--message">{comment}</p>
        </i>
      </div>
    </>
  );
};

export default Eachcomment;
