import React from "react";
import "./ImageModal.css";
import ImageAuthor from "../ImageAuthor/ImageAuthor.js";
import { LuDownload } from "react-icons/lu";
import Button from "../Button/Button.js";
import { AiOutlineClose } from "react-icons/ai";

function ImageModal({ photo, isImageModalOpen, closePhoto, onDownloadImage }) {
  return (
    <div className={`imagemodal-div ${isImageModalOpen && "imagemodal-open"}`}>
      <div className="imagemodal-wrapper">
        <div className="imagemodal-content">
          <ImageAuthor name={photo.dataset.author} iconColor={"black"} />
          <div className="btn-div">
            <Button
              color="white"
              bgColor={"#6e07b3ab"}
              onBtnClick={onDownloadImage}
            >
              <LuDownload />
            </Button>
            <Button color="white" bgColor={"grey"} onBtnClick={closePhoto}>
              <AiOutlineClose />
            </Button>
          </div>
        </div>
        <img src={photo.src} alt="" />
      </div>
    </div>
  );
}

export default ImageModal;
