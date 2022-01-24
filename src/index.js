import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { Navbar, BackgroundImage } from "./components";
import image from "./assets/Skyscrapers.webp";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BackgroundImage image={image} />
  </React.StrictMode>,
  document.getElementById("root")
);
