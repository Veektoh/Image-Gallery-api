import React, { useState, useEffect } from "react";
import "./Gallery.css";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";
import downloadImage from "../utilis/downloadImage";
import ImageSkeleton from "./ImageSkeleton";
import useFetch from "../utilis/useFetch";

function Gallery({ search }) {
  const [image, setImage] = useState("");
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const initialURL = `https://api.pexels.com/v1/curated?page=${1}&per_page=${20}`;
  const [apiURL, setApiURL] = useState(initialURL);

  const apiKey = "ZWqYVV3Te9LspT59d4NRryZkwtphlq8Hi7pTmxMVV7Leodwnfskj37gJ";
  const { isLoading, error, nextPage, totalPhoto, refetch, searchFetch } =
    useFetch(apiURL, apiKey);

  useEffect(() => {
    if (search === "" || null) {
      return;
    }
    searchFetch(search);
    // eslint-disable-next-line
  }, [search]);

  console.log(search);

  function handleOpenCloseModal(e) {
    setIsImageModalOpen(!isImageModalOpen);
    setImage(e.target);
  }
  function loadMore() {
    setApiURL(() => nextPage);
  }

  const photoList =
    !isLoading &&
    !error &&
    totalPhoto.map((photo, i) => (
      <ImageCard
        key={i}
        name={photo.photographer}
        imgURL={photo.src.large2x}
        openPhoto={handleOpenCloseModal}
      />
    ));

  const loadingSkeleton = isLoading && <ImageSkeleton />;

  const errorMessage = (
    <div className="error-div">
      <p className="error-message-div">Could not load image please refresh</p>
    </div>
  );

  const button = error ? (
    <button
      className="loadmore-btn"
      onClick={() => refetch(initialURL)}
      disabled={isLoading}
    >
      {isLoading ? "loading..." : "refresh"}
    </button>
  ) : (
    <button className="loadmore-btn" onClick={loadMore} disabled={isLoading}>
      {isLoading ? "loading..." : "Load more"}
    </button>
  );

  const photoModal = isImageModalOpen && (
    <ImageModal
      photo={image}
      isImageModalOpen={isImageModalOpen}
      closePhoto={handleOpenCloseModal}
      onDownloadImage={() => downloadImage(image.src)}
    />
  );

  return (
    <section className="gallery">
      <ul className="gallery-layout">
        {loadingSkeleton}
        {photoList}
      </ul>
      {error && errorMessage}
      {button}
      {photoModal}
    </section>
  );
}

export default Gallery;
