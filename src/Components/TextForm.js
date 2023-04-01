import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperClicked = () => {
    // console.log("handleUpperClicked" );
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClicked = () => {
    // console.log("lowercasecliced")
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };
  const onChangeHandler = (event) => {
    // console.log("onchangehandler clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.boxHeading}
        </h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={onChangeHandler}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpperClicked}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowerClicked}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearText}>
          Reset
        </button>
      </div>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your text summary:</h3>
        <p>
          {text.split(" ").length} words and {text.length} charracters.
        </p>
      </div>
    </>
  );
}
