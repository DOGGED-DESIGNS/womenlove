// import { useState } from "react";
import { constant } from "@/constant";

import axios from "axios";

// #F80000,#4500F8,#000000
// red, blue,black

// <p><span style="background-color: rgb(247, 247, 248); color: rgb(55, 65, 81);">A fire is a devastating event that can occur unexpectedly, posing a significant threat to life, property, and peace of mind. While we hope never to experience a house fire, it is essential to be prepared for such emergencies. One crucial safety measure every household should implement is the presence of a fire extinguisher. In this blog post, we will explore the reasons why having a fire extinguisher at home is of utmost i</span>mportance.</p>

const Statichook = () => {
  const catCount = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "categorycount",
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

  const hitCount = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "hit",
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

  const commentCount = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "commentcount",
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

  const postCount = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "postcount",
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

  const quesCount = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "questioncount",
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
  const getCategory = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "getcategory",
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
  const getComment = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "getcomment",
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
  const getPost = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "getpost",
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
  const getQuest = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "getquestion",
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
  const fourRandom = async () => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "fourrandom",
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
  const twoRandom = async (id) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "tworandom",
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
  const singlePost = async (id) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "singlepost",
        uuid: id,
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
  const singleCat = async (id) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "singlecategory",
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
  const singleQuest = async (id) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api2/php/process.php",
      {
        message: "singlequestion",
        uuid: id,
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

  return {
    catCount,
    hitCount,
    getPost,
    getQuest,
    singleCat,
    getCategory,
    twoRandom,
    commentCount,
    postCount,
    quesCount,
    singleQuest,
    singleCat,
    getComment,
    singlePost,
    fourRandom,
  };
};

export default Statichook;
