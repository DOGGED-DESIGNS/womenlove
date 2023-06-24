// import { useState } from "react";
import { constant } from "@/constant";

import axios from "axios";

// #F80000,#4500F8,#000000
// red, blue,black

// <p><span style="background-color: rgb(247, 247, 248); color: rgb(55, 65, 81);">A fire is a devastating event that can occur unexpectedly, posing a significant threat to life, property, and peace of mind. While we hope never to experience a house fire, it is essential to be prepared for such emergencies. One crucial safety measure every household should implement is the presence of a fire extinguisher. In this blog post, we will explore the reasons why having a fire extinguisher at home is of utmost i</span>mportance.</p>

const Statichook = () => {
  const displayrecent = async () => {
    const data = await axios.post(
      "http://localhost/sanagosApi/php/process.php",
      {
        message: "recent",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };

  const displayposts = async () => {
    const data = await axios.post(
      "http://localhost/sanagosApi/php/process.php",
      {
        message: "drawpost",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };
  const singlePost = async (id) => {
    const data = await axios.post(
      "http://localhost/sanagosApi/php/process.php",
      {
        message: "singlepost",
        id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };
  const top = async () => {
    const data = await axios.post(
      "http://localhost/sanagosApi/php/process.php",
      {
        message: "top",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };
  const trending = async () => {
    const data = await axios.post(
      "http://localhost/sanagosApi/php/process.php",
      {
        message: "trending",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };
  const tag = async () => {
    const data = await axios.post(
      "http://localhost/sanagosApi/php/process.php",
      {
        message: "tag",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };
  const categoryEach = async () => {
    const data = await axios.post(
      "http://localhost/sanagosApi/php/process.php",
      {
        message: "categoryeach",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };

  const category = async () => {
    try {
      const data = await axios.post(
        "http://localhost/sanagosApi/php/process.php",
        {
          message: "drawcategory",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data?.data;
    } catch (err) {
      console.log(err?.response?.data);
      console.log(err);
    }
    //
  };
  return {
    category,
    displayposts,
    displayrecent,
    categoryEach,
    trending,
    top,
    tag,
    singlePost,
  };
};

export default Statichook;
