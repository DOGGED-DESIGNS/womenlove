import { useEffect } from "react";
import Blognav from "../../comps/blognav";
import ReactPaginate from "react-paginate";

const index = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        dots: false,
        nav: false, // Disable default navigation
        responsive: {
          0: {
            items: 2,
          },
          768: {
            items: 2,
          },
        },
      });
      // Custom Navigation
      $(".custom-next").click(function () {
        $(".owl-carousel").trigger("next.owl.carousel");
      });

      $(".custom-prev").click(function () {
        $(".owl-carousel").trigger("prev.owl.carousel");
      });
    });
  }, []);

  return (
    <>
      <main className="admin">
        <Blognav />

        <div className="singlelinks">
          <a href="">sanagos</a>
          <a href="">posts</a>
          <a href="">fire_extinguisher</a>
          <p>how to use fire extingisher properyly to aviod mistakes</p>
        </div>

        {/* <!-- end of single head --> */}
        <section className="advert">
          <h6 className="headtext mb-5">search result for : car</h6>
          <div className="advert__grid advert__grid--modify">
            <div>
              <div className="post__recent post__recent--modify">
                <div>
                  <div className="post__recent--img post__recent--img--modify">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a
                    className="post__recent--link post__recent--link--modify"
                    href=""
                  >
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                  <p className="post__post--p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corrupti, possimus neque quos ad hic maiores. Ratione porro,
                  </p>
                </div>
              </div>
              <div className="post__recent post__recent--modify">
                <div>
                  <div className="post__recent--img post__recent--img--modify">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a
                    className="post__recent--link post__recent--link--modify"
                    href=""
                  >
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                  <p className="post__post--p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corrupti, possimus neque quos ad hic maiores. Ratione porro,
                  </p>
                </div>
              </div>
              <div className="post__recent post__recent--modify">
                <div>
                  <div className="post__recent--img post__recent--img--modify">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a
                    className="post__recent--link post__recent--link--modify"
                    href=""
                  >
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                  <p className="post__post--p  justifycontent-start ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corrupti, possimus neque quos ad hic maiores. Ratione porro,
                  </p>
                </div>
              </div>
              <div className=" mt-5">
                <ReactPaginate
                  previousLabel={"previous"}
                  forcePage={2}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  pageCount={25}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  containerClassName={"pagination justifycontent-start "}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
              </div>
            </div>

            <div>
              <div>
                {/* <!-- start of advert__img2 --> */}
                <a href="" className="advert__img2">
                  <img src="./asset/img/ard1.png" alt="" />
                </a>
                {/* <!-- advert__img2 --> */}
                <div className="mb-5 border-bottom post__allpost">
                  <span>
                    <h5>Category</h5>
                  </span>
                </div>
                <div className="owl-cover">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="advert__cat">
                        <h5 className="advert__cat--h5">27</h5>
                        <p className="advert__cat--p">fire extinguisher</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="advert__cat">
                        <h5 className="advert__cat--h5">27</h5>
                        <p className="advert__cat--p">fire extinguisher</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="advert__cat">
                        <h5 className="advert__cat--h5">27</h5>
                        <p className="advert__cat--p">fire extinguisher</p>
                      </div>
                    </div>
                    {/* <!-- Add more items as needed --> */}
                  </div>

                  <div className="custom-navigation">
                    <button className="custom-prev">
                      <i className="fa fa-chevron-left"></i>
                    </button>
                    <button className="custom-next">
                      <i className="fa fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
                {/* <!-- tags this are the tags section
              
              --> */}
                <div className="mb-5 border-bottom post__allpost">
                  <span>
                    <h5>Tags</h5>
                  </span>
                </div>

                <div className="advert__tags">
                  <a a href="">
                    fire extinguishers
                  </a>
                  <a a href="">
                    Safety
                  </a>
                  <a a href="">
                    Helment
                  </a>
                  <a a href="">
                    Safety boots
                  </a>
                  <a a href="">
                    Reflextive Vest
                  </a>
                  <a a href="">
                    News
                  </a>
                  <a a href="">
                    Kitchen Fire
                  </a>
                </div>
              </div>

              {/* <!-- this is the category section --> */}
            </div>
          </div>
        </section>

        {/* <!-- footer --> */}
        <footer className="blogfooter">
          <div className="blogfooter__grid border-bottom">
            <div>
              <div className="blogfooter__grid--logo">
                <img src="./asset/icons/logo.svg" alt="" />
              </div>
            </div>
            <div>
              <div className="blogfooter__grid--link">
                <h4>Follow us on social media</h4>
                <div>
                  <span>
                    <a href="">
                      {" "}
                      <i className="fab fa-twitter"></i>{" "}
                    </a>
                  </span>
                  <span>
                    <a href="">
                      {" "}
                      <i className="fab fa-instagram"></i>{" "}
                    </a>
                  </span>
                  <span>
                    <a href="">
                      {" "}
                      <i className="fab fa-facebook"></i>{" "}
                    </a>
                  </span>
                  <span>
                    <a href="">
                      {" "}
                      <i className="fab fa-linkedin"></i>{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          {/* <!-- this is the link and copyright section --> */}
          <div className="blogfooter__link">
            <a href="">Home</a>
            <a href="">Safety</a>
            <a href="">Fire</a>
            <a href="">Fire_extinguisher</a>
          </div>

          <p className="blogfooter__copy">
            &copy; 2023 copyright all right reserved
          </p>
        </footer>
      </main>
    </>
  );
};

export default index;
