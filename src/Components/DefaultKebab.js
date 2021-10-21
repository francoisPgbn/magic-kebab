import React from "react";

const DefaultKebab = ({ nom, kebab, addKebabToPanier }) => {
  return (
    <button
      style={{ height: "40px", margin: "5px", width: "100px" }}
      className="default-button"
      onClick={() => addKebabToPanier(kebab)}
    >
      {nom}
    </button>
  );
};

export default DefaultKebab;
