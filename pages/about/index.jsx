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
        <section className="advert">
          <div className="advert__grid advert__grid--modify">
            <div>
              <div className="my-5">
                <h1 className="">About us</h1>
              </div>
              <div className="my-5">
                <p className="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  dolor, molestiae odit expedita illum natus inventore!
                  Cupiditate alias porro deleniti fugit praesentium ipsam
                  repudiandae accusamus, vel odit, vero facilis maiores.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default index;
