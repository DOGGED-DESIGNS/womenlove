import React from "react";
import Adminnav from "../../comps/Adminnav/Adminnav";

const index = () => {
  return (
    <>
      <main className="admin">
        <Adminnav />
        <section className="dash">
          <div className="dash__grid">
            <div>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>Categories</p>
                  <h4>17</h4>
                </div>
                <a href="#" className="dash__img">
                  <img src="/asset/icons/adminicon/categoryicon.svg" alt="" />
                </a>
              </div>
            </div>
            <div>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>Question</p>
                  <h4>5</h4>
                </div>
                <a href="#" className="dash__img">
                  <img src="/asset/icons/question.svg" alt="" />
                </a>
              </div>
            </div>

            <div>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>posts</p>
                  <h4>20</h4>
                </div>
                <a href="#" className="dash__img">
                  <img src="/asset/icons/adminicon/post.svg" alt="" />
                </a>
              </div>
            </div>
            <div>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>Comments</p>
                  <h4>205</h4>
                </div>
                <a href="#" className="dash__img">
                  <img src="/asset/icons/commentwhite.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default index;
