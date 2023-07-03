import React from "react";
import TextField from "@mui/material/TextField";
import "./InputFormStyle.css";
import { Button } from "@mui/material";
const InputForm = () => {
  const [errorMsg, setErrorMsg] = React.useState("");
  const [errorStatus, setErrorStatus] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
const [previewUrl, setPreviewUrl] = React.useState();

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };
  const handleImageClose = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };
  return (
    <form className="inputFieldArea">
      <div className="title">
        <h4>Add New Book</h4>
      </div>
      <div className="formContainer">
        <TextField
          className="txt"
          error={errorStatus}
          id="outlined-error-helper-text"
          label="Book Name"
          placeholder="Harry potter"
          helperText={errorMsg}
        />
        <TextField
          className="txt"
          error={errorStatus}
          id="outlined-error-helper-text"
          label="Book ID"
          placeholder="B00-01"
          helperText={errorMsg}
        />
        <TextField
          className="txt"
          error={errorStatus}
          id="outlined-error"
          label="Book Author"
          placeholder="Jhone camilus"
          helperText={errorMsg}
        />
        <TextField
          className="txt"
          error={errorStatus}
          id="outlined-error-helper-text"
          label="Book Price"
          placeholder="LKR 2000"
          helperText={errorMsg}
        />
        <input
          className="uploadField"
          type="file"
          onChange={handleFileSelect}
        />
        {previewUrl && (
          <div
            className="previewContainer"
            style={{ display:"flex",flexDirection:"row" }}
          >
            <img
              src={previewUrl}
              alt="Preview"
              style={{ width: "20%", height: "20%" }}
            />
            <button className="closeButton" onClick={handleImageClose}>
              x
            </button>
          </div>
        )}
        <Button className="addBtn" variant="contained" color="success">
          + Add Book
        </Button>
      </div>
    </form>
  );
};

export default InputForm;
