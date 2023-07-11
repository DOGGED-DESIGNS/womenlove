import React from "react";
import Adminnav from "../../comps/Adminnav/Adminnav";

const comment = () => {
  return (
    <>
      <main className="admin">
        <Adminnav />
        <section className="table">
          <div className="shadow-sm table__cont container-fluid">
            <div className="table__head">
              <div>
                <div className="table__head--des">
                  <h6>Post</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6>Name</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6>phone</h6>
                </div>
              </div>
              <div>
                <div className="table__head--des">
                  <h6>description</h6>
                </div>
              </div>
              <div>
                <div className="table__head--act">
                  <h6>action</h6>
                </div>
              </div>
            </div>

            <div className="table__body">
              <div className="">
                <div className="table__head--phone">
                  <p>this is the title of the post ..</p>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <p>Chiamaka</p>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <p>09076176485</p>
                </div>
              </div>
              <div>
                <div className="table__head--des">
                  <p>This is the description</p>
                </div>
              </div>

              <div className="">
                <div className="table__head--act">
                  <div className="table__perform">
                    <a href="">
                      <img src="/asset/icons/adminicon/waste.svg" alt="" />
                    </a>
                    <a href="" data-toggle="modal" data-target="#exampleModal">
                      <img src="/asset/icons/adminicon/view.svg" alt="" />
                    </a>
                  </div>
                  {/* <!-- end of the thing --> */}
                  <a href="">
                    <img
                      className="table__menu"
                      src="/asset/icons/adminicon/menu_1.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Button trigger modal --> */}

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-lg modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* <!-- <div className="spinner-grow m-auto d-block"></div> --> */}
                <div className="postdisplay">
                  {/* <!-- <div className="postdisplay__tag">
                  tag: <span>extinguisher</span><span>fire</span>
                </div> --> */}
                  <div className="postdisplay__cat">
                    Name: <span>fire_extinguisher</span>
                  </div>
                  <div className="postdisplay__cat">
                    phone: <span>09076176485</span>
                  </div>

                  <div className="postdisplay__cat">
                    Comments:
                    <span className="text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum ratione eveniet corporis laudantium delectus
                      assumenda rem voluptatum reiciendis cum, eius ut aperiam
                      dignissimos maxime consectetur dolore laboriosam explicabo
                      incidunt temporibus cupiditate magnam aspernatur repellat
                      necessitatibus! Voluptas error illo numquam, qui quibusdam
                      esse quos explicabo quam animi rerum doloribus minus
                      vitae!
                    </span>
                  </div>
                  <div className="postdisplay__cat">
                    email: <span>uzoechijerry@gmail.com</span>
                  </div>
                  {/* <!-- description display --> */}

                  {/* <!-- end of description display --> */}
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default comment;
