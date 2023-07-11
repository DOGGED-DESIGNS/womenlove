import React from "react";
import Nav from "../../comps/Nav/Nav";
import Footer from "../../comps/Footer/Footer";

const index = () => {
  return (
    <>
      <main className="main">
        <Nav />
        <section className="answer">
          <div className="answer__grid">
            <div className="answer__grid--first">
              <div>
                <h1 className="answer__h1">
                  How to create boundries in your relationships
                </h1>
              </div>
            </div>

            <div className="answer__grid--two">
              <div className="answer__grid--img">
                <img src="./asset/img/img2-8.png" alt="" />
              </div>
            </div>
          </div>

          <div className="answer__des">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              eum voluptates similique nesciunt in nostrum quam porro sint, enim
              autem vitae sequi quia ea perferendis aliquid ducimus dolorum illo
              quod voluptatibus blanditiis recusandae cum sit! Inventore porro
              dicta tempore quam voluptas perferendis. Ratione animi velit dicta
              voluptas! Necessitatibus, esse rem.
            </p>
            <h2>Diary of an ungrateful patner</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              eum voluptates similique nesciunt in nostrum quam porro sint, enim
              autem vitae sequi quia ea perferendis aliquid ducimus dolorum illo
              quod voluptatibus blanditiis recusandae cum sit! Inventore porro
              dicta tempore quam voluptas perferendis. Ratione animi velit dicta
              voluptas! Necessitatibus, esse rem.
            </p>
          </div>
          <div className="answer__comment">
            <h2 className="answer__comment--h2">comments</h2>

            <div className="answer__comment--div">
              <div className="answer__comment--flex">
                <div className="answer__comment--img">
                  <img src="./asset/icons/Profile.svg" alt="" />
                </div>

                <p className="answer__comment--name">Amaka</p>
              </div>
              <i>
                <p className="answer__comment--message">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam, unde!
                </p>
              </i>
            </div>
            <div className="answer__comment--div">
              <div className="answer__comment--flex">
                <div className="answer__comment--img">
                  <img src="./asset/icons/Profile.svg" alt="" />
                </div>

                <p className="answer__comment--name">Amaka</p>
              </div>
              <i>
                <p className="answer__comment--message">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam, unde!
                </p>
              </i>
            </div>
            <div className="answer__comment--div">
              <div className="answer__comment--flex">
                <div className="answer__comment--img">
                  <img src="./asset/icons/Profile.svg" alt="" />
                </div>

                <p className="answer__comment--name">Amaka</p>
              </div>
              <i>
                <p className="answer__comment--message">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam, unde!
                </p>
              </i>
            </div>
          </div>

          <div className="mt-5 single__comment single__comment--modify">
            <h2 className="single__comment--modify--h2">Leave a comment</h2>
            <p className="p">
              your email address will not be published the required fields are
              marked
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
                <input className="mr-2" type="checkbox" /> save my name, email
                and pasword on this browser for the next time i comment
              </small>

              <button className="submit">Post Comments</button>
            </form>
          </div>
        </section>

        <section className="more">
          <h1 className="question__h1">Answers should not be hard to find</h1>
          <p className="text-white question__p">we are here to help.</p>
          <div className="question__grid">
            <div>
              <div className="question__cont">
                <div className="question__cont--img">
                  <img src="./asset/img/img1-8.png" alt="" />
                </div>

                <h2 className="question__cont--h2">
                  what is your question oga me??
                </h2>
                <div className="question__cont--direct">
                  <a href="">
                    <i className="fas fa-arrow-alt-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="question__cont">
                <div className="question__cont--img">
                  <img src="./asset/img/img1-8.png" alt="" />
                </div>

                <h2 className="question__cont--h2">
                  what is your question oga me??
                </h2>
                <div className="question__cont--direct">
                  <a href="">
                    <i className="fas fa-arrow-alt-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default index;
