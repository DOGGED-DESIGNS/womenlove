import Navbar from "../../comps/Navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Animatez from "@/Animate";
import Editor from "../../comps/Editor";
import Blognav from "../../comps/blognav";
const About = () => {
  const [togglesearch, setTogglesearch] = useState(false);

  const {
    linkcont,
    tapanimate,
    animatenav,
    menu,
    menuchild,
    genchild,
    gencont,
  } = Animatez();

  const [navtoggle, setNavtoggle] = useState(false);

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
      {/* <!-- start of search diallog --> */}

      {/* <!-- end of search dialog --> */}
      <main className="admin">
        {/* <!-- this is for tablets and mobile --> */}

        {/* <!-- second nav --> */}

        <Blognav />

        {/* <!-- end of blog nav --> */}
        <section className="post">
          {/* <Editor
            onChange={(value) => {
              console.log(value);
            }}
          /> */}

          <div className="post__grid">
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <motion.div variants={genchild} className="post__post">
                <div className="post__post--img">
                  <img src="./asset/img/presentation-8.png" alt="" />
                  <a href="#"> fire_extinguisher </a>
                </div>
                <a href="">this is the title of the post </a>
                <span>
                  By sanagos . <span>12/10/23</span>
                </span>
                <p className="post__post--p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  consectetur aut rem et ut molestias, nostrum laudantium fuga
                  perferendis aliquid eum architecto fugit quod expedita enim.
                  Accusantium odit quas adipisci?
                </p>
              </motion.div>
              <motion.div variants={genchild} className="post__post">
                <div className="post__post--img">
                  <img src="./asset/img/presentation-8.png" alt="" />
                  <a href="#"> fire_extinguisher </a>
                </div>
                <a href="">
                  why you should never leave the <br />
                  switch of any appliace on before going to bed
                </a>
                <span>
                  By sanagos . <span>12/10/23</span>
                </span>
                <p className="post__post--p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  consectetur aut rem et ut molestias, nostrum laudantium fuga
                  perferendis aliquid eum architecto fugit quod expedita enim.
                  Accusantium odit quas adipisci?
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <motion.div variants={genchild} className="post__allpost">
                <span>
                  <h5>Recent Post</h5>
                </span>
                <span>
                  <a href="#">All Post recent post</a>
                </span>
              </motion.div>
              <motion.div variants={genchild} className="post__recent">
                <div>
                  <div className="post__recent--img">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a className="post__recent--link" href="">
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <br />
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                </div>
              </motion.div>
              <motion.div variants={genchild} className="post__recent">
                <div>
                  <div className="post__recent--img">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />

                  <a className="post__recent--link" href="">
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                </div>
              </motion.div>
              <motion.div variants={genchild} className="post__recent">
                <div>
                  <div className="post__recent--img">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a className="post__recent--link" href="">
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                </div>
              </motion.div>
              <motion.div variants={genchild} className="post__recent">
                <div>
                  <div className="post__recent--img">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a className="post__recent--link" href="">
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                </div>
              </motion.div>
              <motion.div variants={genchild} className="post__recent">
                <div>
                  <div className="post__recent--img">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a className="post__recent--link" href="">
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* <!-- top post trending section --> */}

        <section className="top">
          <div className="mb-5 post__allpost">
            <span>
              <h5>Top Post</h5>
            </span>
            <span>
              <a href="#">All Top post</a>
            </span>
          </div>
          <motion.div
            variants={gencont}
            initial="initial"
            whileInView="animate"
            className="top__grid"
          >
            <motion.div variants={genchild}>
              <div className="top__grid--img1">
                <img src="./asset/img/presentation-8.png" alt="" />
                {/* <!-- grid one absolite --> */}
                <div className="top__grid--move1">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <motion.a
                    initial={{
                      x: 0,
                    }}
                    whileHover={{
                      x: "-30px",
                    }}
                    transition={{
                      stiffness: 700,
                    }}
                    className="  post__recent--link top__grid--link"
                    href=""
                  >
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder if this was a thing to deal with
                  </motion.a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <motion.div variants={genchild} className="top__grid--img2">
                <img src="./asset/img/presentation-8.png" alt="" />
                {/* <!-- grid one absolite --> */}
                <div className="top__grid--move2">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a className="post__recent--link top__grid--link2" href="">
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                </div>
              </motion.div>
              {/* <!-- this is the second grid2 --> */}
              <motion.div variants={genchild} className="top__grid--img2">
                <img src="./asset/img/presentation-8.png" alt="" />
                {/* <!-- grid one absolite --> */}
                <div className="top__grid--move2">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a className="post__recent--link top__grid--link2" href="">
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* <!-- trending post --> */}
        <section className="top top__modify">
          <div className="mb-5 post__allpost">
            <span>
              <h5>Trending posts</h5>
            </span>
            <span>
              <a href="#">All Trending post</a>
            </span>
          </div>
          <div className="top__grid top__grid--modify">
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <motion.div variants={genchild} className="post__recent">
                <div>
                  <div className="post__recent--img">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a className="post__recent--link" href="">
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                </div>
              </motion.div>
              {/* <!-- this is the second grid2 --> */}
              <motion.div variants={genchild} className="post__recent">
                <div>
                  <div className="post__recent--img">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a className="post__recent--link" href="">
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <motion.div variants={genchild} className="post__recent">
                <div>
                  <div className="post__recent--img">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a className="post__recent--link" href="">
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                </div>
              </motion.div>
              {/* <!-- this is the second grid2 --> */}
              <motion.div variants={genchild} className="post__recent">
                <div>
                  <div className="post__recent--img">
                    <img src="./asset/img/presentation-8.png" alt="" />
                  </div>
                </div>
                <div className="post__recent--tag">
                  <a href="" className="post__recent--cat">
                    Extinguisher
                  </a>
                  <br />
                  <a className="post__recent--link" href="">
                    How to use fire extinguishers properly to aviod damage to
                    the cylinder
                  </a>
                  <span className="post__recent--tagspan">
                    By Sanagos . <span>03/4/23</span>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* <!-- section --> */}
        <section className="advert">
          <div className="advert__grid">
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <a href="" className="advert__img">
                <img src="./asset/img/ard2.png" alt="" />
              </a>
              <motion.div
                variants={genchild}
                className="post__recent post__recent--modify"
              >
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
              </motion.div>
              <motion.div
                variants={genchild}
                className="post__recent post__recent--modify"
              >
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
              </motion.div>
              <motion.div
                variants={genchild}
                className="post__recent post__recent--modify"
              >
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
              </motion.div>
            </motion.div>
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
          {/* // <!-- this is the link and copyright section --> */}
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

export default About;
