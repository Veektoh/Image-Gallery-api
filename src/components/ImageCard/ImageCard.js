import React from "react";
import "./ImageCard.css";
import ImageAuthor from "../ImageAuthor/ImageAuthor";
import Button from "../Button/Button";
import { LuDownload } from "react-icons/lu";
import downloadImage from "../../utilis/downloadImage";

function ImageCard({ imgURL, name, openPhoto }) {
  return (
    <li className="image-div">
      <img src={imgURL} alt="" onClick={openPhoto} data-author={name} />
      <div className="image-overlay">
        <ImageAuthor name={name} iconColor={"white"} />
        <Button
          color="black"
          bgColor={"white"}
          onBtnClick={() => downloadImage(imgURL)}
        >
          <LuDownload />
        </Button>
      </div>
    </li>
  );
}

export default ImageCard;
