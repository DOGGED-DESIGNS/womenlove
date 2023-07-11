import React from "react";
import Adminnav from "../../comps/Adminnav/Adminnav";

const category = () => {
  return (
    <>
      <main className="admin">
        <Adminnav />
        <section className="table">
          <div className="d-flex">
            <button
              data-toggle="modal"
              data-target="#exampleModal"
              className="catbut"
            >
              <img src="/asset/icons/adminicon/add.svg" alt="" /> new category
            </button>
          </div>
          <div className="table__cont container-fluid">
            <div className="table__head">
              <div>
                <div className="table__head--name">
                  <h6>Category</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6>Subitle1</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6>Subitle2</h6>
                </div>
              </div>
              <div>
                <div className="table__head--des">
                  <h6>description</h6>
                </div>
              </div>
              <div>
                <div className="table__head--act">
                  <h6>Action</h6>
                </div>
              </div>
            </div>

            <div className="shadow-sm table__body">
              <div>
                <div className="table__head--name">
                  <p>Relationships</p>
                </div>
              </div>

              <div>
                <div className="table__head--phone">
                  <p>Do you think you can do more that this</p>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <p>Do you think you can do more that this</p>
                </div>
              </div>
              <div>
                <div className="table__head--des">
                  <p>Do you think you can do more that this</p>
                </div>
              </div>
              <div className="">
                <div className="table__head--act">
                  <div className="table__perform">
                    <a href="">
                      <img src="/asset/icons/adminicon/waste.svg" alt="" />
                    </a>
                    {/* <!-- <a href="" data-toggle="modal" data-target="#exampleModal">
                    <img src="./asset/icons/adminicon/view.svg" alt="" />
                  </a> --> */}
                    <a href="">
                      <img src="/asset/icons/adminicon/update.svg" alt="" />
                    </a>
                  </div>
                  {/* <!-- end of the thing --> */}
                  <a href="">
                    <img
                      className="table__menu"
                      src="./asset/icons/adminicon/menu_1.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- modal --> */}
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
                <form action="">
                  <div className="form-group">
                    <label for="" className="col-form-label">
                      New Category:
                    </label>
                    <input type="text" className="form-control" name="" id="" />
                  </div>
                  <div className="form-group mb-3">
                    <label for="" className="col-form-label">
                      Subtitle1:
                    </label>
                    <input type="text" className="form-control" name="" id="" />
                  </div>
                  <div className="form-group mb-3">
                    <label for="" className="col-form-label">
                      Subtitle2:
                    </label>
                    <input type="text" className="form-control" name="" id="" />
                    <div className="choosebtn mt-2">
                      <label for="des1">
                        <img src="./asset/icons/adminicon/upload.svg" alt="" />
                        choose file
                      </label>
                      <input className="d-none" type="file" name="" id="des1" />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label for="" className="col-form-label">
                      Description:
                    </label>
                    <textarea className="d-block" rows="" cols=""></textarea>
                    <div className="choosebtn mt-2">
                      <label for="des1">
                        <img src="./asset/icons/adminicon/upload.svg" alt="" />
                        choose file
                      </label>
                      <input className="d-none" type="file" name="" id="des1" />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="d-block w-100 ml-auto my-3 btn btn-danger"
                    data-dismiss="modal"
                  >
                    submit
                  </button>
                </form>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default category;
