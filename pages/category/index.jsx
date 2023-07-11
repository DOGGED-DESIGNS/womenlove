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
              <h1 className="answer__h1">personal safety</h1>
              <p className="answer__p">we all deserve your personal safety</p>
            </div>
            <div className="answer__grid--two">
              <div className="answer__grid--img answer__grid--imgmodify">
                <img src="./asset/img/bg2-8.png" alt="" />
              </div>
            </div>
          </div>
          <section className="confuse confuse__modify">
            <div className="confuse__cont">
              <div className="confuse__cont--img">
                <img src="./asset/img/img2-8.png" alt="" />
              </div>
              <h2 className="confuse__cont--h2">Learn about personal safety</h2>
            </div>
            <div className="confuse__grid">
              <div>
                <a className="confuse__grid--a" href="#">
                  {" "}
                  Dating{" "}
                </a>
              </div>
              <div>
                <a className="confuse__grid--a" href="#">
                  {" "}
                  Men{" "}
                </a>
              </div>
              <div>
                <a className="confuse__grid--a" href="#">
                  {" "}
                  Relationships{" "}
                </a>
              </div>
              <div>
                <a className="confuse__grid--a" href="#">
                  {" "}
                  Women{" "}
                </a>
              </div>
            </div>
          </section>
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
