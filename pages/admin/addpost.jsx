import React from "react";
import Adminnav from "../../comps/Adminnav";
import Editor from "../../comps/Editor";

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
              <div>
                <label for="">tags:</label>
                <input type="text" />
              </div>
              <div>
                <label for="">Author:</label>
                <input type="text" />
              </div>
              <div>
                <label for="">AuthorLinks:</label>
                <input type="text" />
              </div>
            </div>
            <div className="addpost__title">
              <label for="">Title</label>
              <input className="addpost__title" type="text" />
            </div>
            <div className="addpost__text">
              <label for=""> description </label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <Editor />
              <div>
                <label for="des1">
                  <img src="/asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input className="d-none" type="file" name="" id="des1" />
              </div>
            </div>
            <div className="addpost__text">
              <label for=""> description </label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <Editor />
              <div>
                <label for="des1">
                  <img src="/asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input className="d-none" type="file" name="" id="des1" />
              </div>
            </div>
            <div className="addpost__text">
              <label for=""> description </label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <Editor />
              <div>
                <label for="des1">
                  <img src="/asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input className="d-none" type="file" name="" id="des1" />
              </div>
            </div>
            <div className="addpost__text">
              <label for=""> description </label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <Editor />
              <div>
                <label for="des1">
                  <img src="/asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input className="d-none" type="file" name="" id="des1" />
              </div>
            </div>
            <div className="addpost__text">
              <label for=""> description </label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <Editor />
              <div>
                <label for="des1">
                  <img src="/asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input className="d-none" type="file" name="" id="des1" />
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default addpost;
