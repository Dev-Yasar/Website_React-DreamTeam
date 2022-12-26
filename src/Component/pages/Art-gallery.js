import React, { useState } from "react";
import Footer from "../Footer";
import ImageGrid from "../imageGrid";
import Model from "../Model";
import ProgressBar from "../ProgressBar";

function ArtGallery() {
  //File set State
  const [file, setFile] = useState(null);
  //error throw State
  const [error, setError] = useState(null);
  //image extenction State
  const types = ["image/png", "image/jpeg"];

  // file handle
  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("please select an image(png/jpeg)");
    }
  };

  // Set file
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="artBg">
      <form className="upload-btn" onChange={changeHandler}>
        {/* upload btn  */}
        <label className="upload-parent">
          <input className="upload-photo" type="file" hidden />
          <span>
            <i class="fas fa-plus-circle"></i>
          </span>
        </label>

        {/* Throw error */}
        <div className="output">
          {error && <div className="error">{error}</div>}
          {/* {file && <div>{file.name}</div>} */}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default ArtGallery;
