import { useEffect } from "react";
import Blognav from "../../comps/blognav";
import Statichook from "@/hooks/statichook";
export const getStaticPaths = async () => {
  const { displayposts } = Statichook();

  const data = await displayposts();

  console.log(data);

  const paths = data.map((da) => {
    return {
      params: { id: da.uuid.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { singlePost } = Statichook();
  const id = context.params.id;
  const single = await singlePost(id);

  return {
    props: { single },
  };
};

const index = ({ single }) => {
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
          <a href=""> {single.id} </a>
          <p> {single.title} </p>
        </div>
        <section className="single">
          <div className="single__grid">
            <div>
              <div className="post__recent--tag">
                <a href="" className="post__recent--cat">
                  {single.id}
                </a>
                <br />
                <h4 className="single__h4">{single.title}</h4>
                <span className="single__span">
                  <img src="/asset/icons/Profile.svg" alt="" />

                  {`By ${single.author}`}
                </span>
              </div>
            </div>
            <div>
              <div className="single__img">
                <img
                  src={`http://localhost/sanagosApi/${single.img1}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end of single head --> */}
        <section className="advert">
          <div className="advert__grid advert__grid--modify">
            <div>
              <div className="singlesocial">
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
              {/* <!-- this is the description and image section --> */}

              <div className="my-2">
                {single.des1 && (
                  <div
                    className="pb-3 pt-5 "
                    dangerouslySetInnerHTML={{ __html: single.des1 }}
                  ></div>
                )}

                {single.img2 && (
                  <div className="imagepreset  ">
                    <img
                      src={`http://localhost/sanagosApi/${single.img2}`}
                      alt=""
                    />
                  </div>
                )}

                {single.des2 && (
                  <div
                    className="pb-3 pt-5 "
                    dangerouslySetInnerHTML={{ __html: single.des2 }}
                  ></div>
                )}
              </div>
              <div className="my-2">
                {single.img3 && (
                  <div className=" imagepreset">
                    <img
                      className=" "
                      src={`http://localhost/sanagosApi/${single.img3}`}
                      alt=""
                    />
                  </div>
                )}

                {single.des3 && (
                  <div
                    className="pb-3 pt-5 "
                    dangerouslySetInnerHTML={{ __html: single.des3 }}
                  ></div>
                )}
              </div>
              <div className="my-2">
                {single.img4 && (
                  <div className="imagepreset">
                    <img
                      src={`http://localhost/sanagosApi/${single.img4}`}
                      alt=""
                    />
                  </div>
                )}

                {single.des4 && (
                  <div
                    className=" mb-3 mt-5"
                    dangerouslySetInnerHTML={{ __html: single.des4 }}
                  ></div>
                )}
              </div>
              <div className="my-2">
                {single.img4 && (
                  <div className="imagepreset">
                    <img
                      className=" mt-5 mb-3"
                      src={`http://localhost/sanagosApi/${single.img4}`}
                      alt=""
                    />
                  </div>
                )}
                {single.des5 && (
                  <div
                    className=" mb-3 mt-5"
                    dangerouslySetInnerHTML={{ __html: single.des5 }}
                  ></div>
                )}
              </div>

              {/* <!-- comment section
             --> */}
              <div className="mt-5 single__comment">
                <h5 className="headtext">Leave a reply</h5>
                <p className="p">
                  your email address will not be published the required fields
                  are marked
                  <span className="text-primary specialspan"> *</span>
                </p>
                <form action="">
                  <textarea
                    placeholder="comment *"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>

                  <div className="single__comment--flex">
                    <input placeholder="name *" type="text" />
                    <input placeholder="email *" type="email" />
                    <input placeholder="website" type="text" />
                  </div>

                  <small className="text-secondary">
                    <input className="mr-2" type="checkbox" /> save my name,
                    email and pasword on this browser for the next time i
                    comment
                  </small>

                  <button className="submit">Post Comments</button>
                </form>
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
