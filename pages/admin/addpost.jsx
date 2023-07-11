import React from "react";
import Adminnav from "../../comps/Adminnav/Adminnav";

const addpost = () => {
  return (
    <>
      <main className="admin">
        <Adminnav />
        <section className="addpost">
          <form action="" className="addpost__form">
            <div className="addpost__select">
              <div>
                <label for="">category</label>
                <select name="" id="">
                  <option value="">safety</option>
                  <option value="">safety</option>
                </select>
              </div>
            </div>
            <div className="addpost__title">
              <label for="">Title</label>
              <input className="addpost__title" type="text" />
            </div>
            <div className="addpost__text">
              <label for=""> description </label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <div className="choosebtn mt-3">
                <label for="des1">
                  <img src="./asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input className="d-none" type="file" name="" id="des1" />
              </div>
            </div>

            <button type="submit">submit</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default addpost;
