import { imgbbAPI } from "api/imgBB";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    const res = await axios({
      method: "post",
      url: imgbbAPI,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageData = res.data.data;
    if (!imageData) {
      toast.error("Upload image failed, please try again");
      return;
    }
    const imageObj = {
      url: imageData.url,
    };
    onChange(name, imageObj);
    setUploadedImage(imageObj.url);
    toast.success("Upload image successfully", {
      position: "top-right",
    });
  };
  return (
    <label className="w-full text-text3 h-[620px] border-2 border-text4 border-dashed rounded-xl cursor-pointer flex items-center justify-center">
      {!uploadedImage && (
        <>
          <input
            type="file"
            onChange={handleUploadImage}
            id={name}
            name={name}
            className="hidden"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
        </>
      )}
      {uploadedImage && (
        <img
          src={uploadedImage}
          className="object-cover object-center w-full h-full"
          alt="Thumbnail"
        />
      )}
    </label>
  );
};

export default ImageUpload;
