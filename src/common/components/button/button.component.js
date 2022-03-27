import React from "react";
import "./button.styles.css";

function MyButton(props) {
  let fontWeight = props.fontWeight ? props.fontWeight : "600";
  let width = props.width ? props.width : "120px";

  return (
    <button
      onClick={props.onClick}
      className="common-button"
      style={{ fontWeight: fontWeight, width: width }}
    >
      {props.buttonName}
    </button>
  );
}

export default MyButton;
