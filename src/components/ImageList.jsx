import React from "react";
import "../styles/ImageList.css";
import Imagecard from "./ImageCard";

const ImageList = ({ images }) => {
  const imagesTotal = images.map((image) => {
    return <Imagecard image={image} key={image.id}></Imagecard>
  });

  return <div className="ui row image-list" style={{justifyItems: 'center'}}>{imagesTotal}</div>;
};
export default ImageList;
