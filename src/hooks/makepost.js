import { useState } from "react";
import { constant } from "@/constant";
import axios from "axios";

const Makepost = () => {
  const [postmessage, setPostmessage] = useState({});
  const [loading, setLoading] = useState(false);

  const makePost = async (form) => {
    setLoading(true);

    try {
      const data = await axios.post(
        "http://localhost/sanagosApi/php/process.php",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPostmessage(data.data);
      console.log(data.data);

      setLoading(false);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };

  return { makePost, postmessage, setPostmessage, loading };
};

export default Makepost;
