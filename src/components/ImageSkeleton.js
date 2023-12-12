import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ImageSkeleton.css";

function ImageSkeleton() {
  return (
    <div className="skeleton-div">
      <Skeleton count={12} className="image-skeleton" />
    </div>
  );
}

export default ImageSkeleton;
