import axios from "axios";
import ImageUploader from "quill-image-uploader";
import { useMemo, useState } from "react";
import ReactQuill, { Quill } from "react-quill";

import "react-quill/dist/quill.snow.css";
import { imgbbAPI } from "utils/api-config";

Quill.register("modules/imageUploader", ImageUploader);
const RichTextEditor = ({ className = "" }) => {
  const [content, setContent] = useState("");
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        // [{ indent: "-1" }, { indent: "+1" }],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, false] }],
        ["clean"],
        [("link", "image")],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );
  return (
    <div className="w-full">
      <ReactQuill
        className={className}
        id="story"
        modules={modules}
        value={content}
        onChange={setContent}
        theme="snow"
      />
    </div>
  );
};

export default RichTextEditor;
