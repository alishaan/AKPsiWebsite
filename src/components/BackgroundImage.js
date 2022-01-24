import React from "react";
import PropTypes from "prop-types";

function BackgroundImage({ image }) {
  return <img src={image} className="w-screen" />;
}

BackgroundImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default BackgroundImage;
