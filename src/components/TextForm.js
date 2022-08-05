import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpclick = () => {
    // console.log("Change"+text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("You convert into Uppercase!","success")
  };
  const handlelcClick = () => {
    // console.log("Change"+text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("You convert into Lowercase!","success")
  };
  const handleonchange = (event) => {
    // console.log("Change");
    setText(event.target.value);
  };
  const handleCopy = () =>{
    let tex = document.getElementById("mybox");
    tex.select();
    tex.setSelectionRange(0,9999);
    navigator.clipboard.writeText(tex.value);
    props.showAlert("Done Copy!","success")
  }
  const handleExtraSpaces = () =>{
    let remSpaces = text.split(/[ ]+/)
    setText(remSpaces.join(" "))
    props.showAlert("You are remove Extra Spaces","success")
  }
  const handleClear = () =>{
    setText("");
  }
  return (
    <>
      <div className="container" >
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label" >
            <h1 className={`text-${props.mode===`dark`?`light`:`dark`}`}>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleonchange}
            style={{backgroundColor : props.mode===`dark`?`#042743`:`white`,color : props.mode===`dark`?`White`:`black`} }
            >
          </textarea>

        </div>
        <button
          type="button"
          className="btn btn-primary ms-2 "
          onClick={handleUpclick}>
          Convert To UPPERCASE
        </button>
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={handlelcClick} >
          Convert To lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={handleExtraSpaces} >
          Remove extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={handleCopy} >
          Copy
        </button>
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={handleClear} >
          Clear
        </button>
      </div>
      <div className={`container my-3 text-${props.mode===`dark`?`light`:`dark`}`}>
        <h3>Your TextSummary</h3>
        <p>{text.length} characters , and {text.split(" ").length-1} word are count</p>
        <p>{0.008*text.split(" ").length} Minutes is required</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter The text in box to get Preview"}</p>
      </div>
    </>
  );
}
