import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText("You have clicked on handleUpClick");
    //console.log('UpperCase was clicked' + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  };
  const handleLowClick = () => {
    setText("You have clicked on handleUpClick");
    //console.log('UpperCase was clicked' + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    //console.log('On change')
  };
  const [text, setText] = useState("Enter your text here ");
  //text:'new state'; //wrong way to change state
  //setText('new state');//correct way to change state
  return (
    <>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleOnChange}
            id="mybox"
            rows="7"
          ></textarea>
        </div>
        <button className="btn-btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn-btn-primary mx-2 my-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
