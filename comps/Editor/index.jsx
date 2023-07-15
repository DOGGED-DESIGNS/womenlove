import React from "react";

import dynamic from "next/dynamic";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const Editor = ({ value, onChange }) => {
  return (
    <QuillNoSSRWrapper className="editor" value={value} onChange={onChange} />
  );
};

export default Editor;
