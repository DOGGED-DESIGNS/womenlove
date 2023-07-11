import React from "react";
import Navhover from "../Navhover/Navhover";

const Nav = () => {
  return (
    <>
      {/* <!-- <div className="searchdialog__modify searchdialog">
        <form action="">
          <div>
            <input type="text" />
            <button type="submit"><i className="fa fa-search"></i></button>
          </div>
          <i className="fas fa-times"></i>
        </form>
      </div> --> */}
      <nav className="admin__nav admin__nav--modify">
        <a className="admin__nav--logo" href="#">
          <img src="./asset/icons/testlogo.svg" alt="" />
        </a>

        <div className="womenlink">
          <Navhover />
        </div>

        {/* <!-- this is just what i want to do --> */}
      </nav>

      <nav className="main__nav2">
        <a className="main__nav2--logo" href="#">
          <img src="./asset/icons/testlogo.svg" alt="" />
        </a>

        <div className="main__nav2--menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* <div className="navmobile">
        <div className="navmobile__search">
          <div>
            <input placeholder="search" type="text" />
            <i className="fas fa-search"></i>
          </div>
          <a href="" className="text-decoration-none">
            <i className="fas fa-times"></i>
          </a>
        </div>
        <div className="d-flex pr-4 py-2">
          <i
            style={{
              cursor: "pointer",
            }}
            className="ml-auto d-block text-white fa-1x fas fa-times"
          ></i>
        </div>

        <div className="navmobile__info">
          <div className="navmobile__question">
            <p>Relationship</p>
            <i className="fas fa-chevron-circle-down"></i>
          </div>
          <div className="navmobile__topic">
            <a href="#">
              <div>
                <p>Have you confirm he is not faking it</p>
              </div>
            </a>
            <a href="#">
              <div>
                <p>Dont waste your time on a broke guy</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>Do men deserve anything</p>
              </div>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Nav;
