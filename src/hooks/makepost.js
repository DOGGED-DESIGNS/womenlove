import { useState } from "react";
import { constant } from "@/constant";
import axios from "axios";
import { Generalacess } from "./context/General";

const Makepost = () => {
  const [addpost, setAddpost] = useState({});
  const [addquestion, setAddquestion] = useState({});
  const [addcategory, setAddcategory] = useState({});
  const [updatepost, setUpdatepost] = useState({});
  const [updatecat, setUpdatecat] = useState({});
  const [updateques, setUpdateques] = useState({});
  // const [loading, setLoading] = useState(false);
  const [deletecategory, setDeletecategory] = useState({});
  const [singlecategory, setSinglecategory] = useState({});

  const {
    id,
    setId,
    des,
    comment,
    loading2,
    setLoading2,
    singlequest,
    setSinglequest,
    loading,
    singlepost,
    setSinglepost,
    setLoading,
    setComment,
    title,
    setTitle,
    setDes,
    subtitle1,
    setSubtitle1,
    subtitle2,
    setSubtitle2,
    img1,
    setImg1,
    img2,
    setImg2,
  } = Generalacess();

  const postCat = async (formdata) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
      formdata,
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setAddcategory(data.data);
  };

  const postPost = async (formdata) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
      formdata,
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setAddpost(data.data);
  };

  const postQuest = async (formdata) => {
    setLoading2(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
      formdata,
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setLoading2(false);

    setAddquestion(data.data);
  };

  const editQuest = async (formdata) => {
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
      formdata,
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setUpdateques(data.data);
  };
  const editPost = async (formdata) => {
    setLoading2(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
      formdata,
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setLoading2(false);
    setUpdatepost(data.data);
  };

  const editCat = async (formdata) => {
    setLoading(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
      formdata,
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setLoading(false);
    setUpdatecat(data.data);
  };
  const deleteCat = async (id) => {
    setLoading(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
      {
        message: "deletecategory",
        id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setLoading(false);

    setDeletecategory(data.data);
  };

  const deleteComment = async (id) => {
    setLoading(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
      {
        message: "deletecomment",
        id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setLoading(false);

    setDeletecategory(data.data);
  };
  const addComment = async (form) => {
    setLoading(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
      form,
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setLoading(false);

    setDeletecategory(data.data);
  };

  const deletePost = async (id) => {
    setLoading(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
      {
        message: "deletepost",
        uuid: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setLoading(false);
  };
  const deleteQuest = async (id) => {
    setLoading(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
      {
        message: "deletequestion",
        uuid: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setLoading(false);
  };
  const singlePost = async (id) => {
    setLoading(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
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
    setLoading(false);
    setSinglepost(data.data);
  };
  const singleQuest = async (id) => {
    setLoading(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
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
    setLoading(false);
    setSinglequest(data.data);
  };
  // single comment
  const singleComment = async (id) => {
    setLoading(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
      {
        message: "singlecomment",
        id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setLoading(false);
    setComment(data.data);
  };
  const singleCat = async (id) => {
    setLoading(true);
    const data = await axios.post(
      "https://jeffmatthewpatten.com/api1/php/process.php",
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

    setLoading(false);

    setId(data.data.id);
    setSubtitle1(data.data.subtitle1);
    setSubtitle2(data.data.subtitle2);
    setImg1(data.data.img1);
    setImg2(data.data.img2);
    setDes(data.data.des);
    setTitle(data.data.title);
  };

  return {
    loading,
    addcategory,
    addpost,
    setAddpost,
    singlecategory,
    addComment,
    deleteComment,
    singleComment,
    setUpdateques,
    singleCat,
    addpost,
    setAddcategory,
    addquestion,
    updatecat,
    deleteCat,
    updateques,
    singlePost,
    setAddquestion,
    deletePost,
    deleteQuest,
    singleQuest,
    updatepost,
    setUpdatepost,
    postPost,
    postCat,
    postQuest,
    editQuest,
    editPost,
    editCat,
  };
};

export default Makepost;
