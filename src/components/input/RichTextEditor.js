import { imgbbAPI } from "api/imgBB";
import axios from "axios";
import ImageUploader from "quill-image-uploader";
import { useMemo } from "react";
import ReactQuill, { Quill } from "react-quill";

import "react-quill/dist/quill.snow.css";

Quill.register("modules/imageUploader", ImageUploader);
const RichTextEditor = ({ content, setContent, className = "" }) => {
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
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
    <>
      <ReactQuill
        className={`${className}`}
        placeholder="Tell your story..."
        modules={modules}
        value={content}
        onChange={setContent}
        theme="snow"
      />
    </>
  );
};

export default RichTextEditor;
