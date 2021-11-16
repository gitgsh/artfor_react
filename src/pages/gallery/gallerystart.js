import React from "react";
import * as THREE from "three";
import { Link } from "react-router-dom";
import { Gallrender } from "./gallrender";

function Gallery() {
  function handleClick(e) {
    window.location.href =
      "http://127.0.0.1:5500/src/pages/gallery/exhibition.html";
  }
  return (
    <div>
      <a href="http://127.0.0.1:5500/src/pages/gallery/exhibition.html">입장</a>
      <button onClick={handleClick}>입장3</button>
      <Gallrender />
    </div>
  );
}

export default Gallery;
