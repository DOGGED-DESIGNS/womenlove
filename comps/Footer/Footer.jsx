import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" main footer main">
        <div className="footer__grid">
          <div className="footer__grid--first">
            <div className="main__nav2--logo mb-3 ">
              <img src="/asset/icons/logowhite.svg" alt="" />
            </div>
            <p className="footer__grid--p1">
              About women love and relationships
            </p>
            <p className="footer__grid--p2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quos
              ullam id quod, placeat possimus eos error dolorum doloremque.
              Numquam distinctio voluptate ea et impedit cumque fuga cum vero
              nostrum?
            </p>
          </div>
          <div className="footer__grid--two">
            <p className="footer__grid--p1">Follow us</p>

            <div className="footer__grid--social">
              <a href="https://twitter.com/Dogged_Tech" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100083415037542"
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
            <div className="footer__grid--social">
              <a
                href="https://www.instagram.com/dogged_designs/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/uzoechi-jerry-16b872240/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer__grid2">
            <div>
              <div className="footer__grid2--link">
                <p className="footer__grid--p1">Categories</p>
                <a href="#"> Women </a>
                <a href="#"> Dating </a>
                <a href="#"> Relationships </a>
              </div>
            </div>
            <div>
              <div className="footer__grid2--link">
                <p className="footer__grid--p1">Site links</p>
                <a href="#"> Privacy </a>
                <a href="#"> Disclosure</a>
                <a href="/contact"> Contact</a>
                <a href="/about"> About</a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-white">
          <a
            href="https://web.facebook.com/profile.php?id=100083415037542"
            className="p text-white"
            target="_blank"
          >
            {" "}
            created by dogged{" "}
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
