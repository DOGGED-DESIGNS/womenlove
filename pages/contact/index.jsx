import React from "react";
import Nav from "../../comps/Nav/Nav";
import Footer from "../../comps/Footer/Footer";
import Statichook from "@/hooks/statichook";

export const getServerSideProps = async ({ params, query }) => {
  const { twoRandom, getCategory, getPost, singleCat } = Statichook();

  const category = await getCategory();

  const post = await getPost();

  return {
    props: {
      category,
      post,
    },
  };
};

const index = ({ post, category }) => {
  return (
    <>
      <div className="main">
        <Nav post={post} cat={category} />
        <div className="py-4 pl-3 bg-white my-5">
          <h1 className="text-center">Reach out to us</h1>
          <p
            className="text-center m-auto"
            style={{
              maxWidth: "800px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, atque maxime a iusto exercitationem deserunt pariatur
            rerum ut iste eaque aliquid rem cupiditate amet sequi incidunt
            nostrum porro impedit
          </p>
        </div>
        {/* <!-- end of blog nav --> */}
        <section className="contact advert mb-5 ">
          <div className="advert__grid advert__grid--modify">
            <div>
              <div className="contact__send">
                <form action="" className="contact__form">
                  <h2 className="contact__h2">send us a message</h2>
                  <p className="p my-2">
                    your email address will never be made public. All fields are
                    required
                  </p>
                  <input type="text" placeholder="name" />
                  <input type="email" placeholder="email" />
                  <input type="number" placeholder="phone" />
                  <textarea
                    name=""
                    placeholder="message"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  <button type="submit">submit</button>
                </form>
              </div>
            </div>

            <div>
              <div className="contact__social">
                <div className="my-5">
                  <h2 className="my-3">Contact Us</h2>
                  <p className="p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iste error modi vitae consectetur possimus quis earum porro
                    id
                  </p>
                </div>
                <div className="my-5">
                  <h2 className="my-3">We are available . Call Us Now</h2>
                  <p className="my-2 p">
                    <i className="mr-2 fas fa-phone"></i> +234 907 617 6485
                  </p>
                  <p className="my-2 p">
                    <i className="mr-2 fas fa-envelope"></i> amaka@gmail.com
                  </p>
                </div>
                <div className="my-5">
                  <h2 className=" mb-2">follow us on social media</h2>
                  <div className="contact__sociallinks">
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
              {/* <!-- this is the category section --> */}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default index;
