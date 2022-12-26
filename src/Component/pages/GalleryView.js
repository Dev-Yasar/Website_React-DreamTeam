import React,{Suspense} from "react";
import {useState, useEffect, lazy } from "react";
import Footer from '../Footer';
// import ImageGrid from '../imageGrid';
import Model from '../Model';
import ProgressBar from '../ProgressBar';
import LoaderTwo from "../Loader2";

const ImageGrid = lazy(() => import("../imageGrid"));

function GalleryView() {
 //File set State
  const [file, setFile] = useState(null);
  //error throw State
  const [error, setError] = useState(null);
   //image extenction State
  const types = ['image/png' ,'image/jpeg'];

  // file handle
  const changeHandler =(e) => {
    let selected = e.target.files[0];

    if(selected &&  types.includes(selected.type)){
      setFile(selected);
      setError("")
    }else{
      setFile(null)
       setError("please select an image(png/jpeg)")
    }

  }

  const [selectedImg,setSelectedImg] =useState(null);

  return (

    <div className="artBg" >
    
       <div className='art-gallery' >
         <div>
         <h1>Dream Team </h1>
         <p>Art Gallery</p>
         </div>
       
       </div>

      {/* <form  className='upload-btn' onChange={changeHandler}>
        <label className='upload-parent'>
        <input  className='upload-photo' type="file" hidden />
        <span> <i  class="fas fa-plus-circle"></i></span>
     
        </label>
    
      
        
        <div className='output'>
          {error && <div className='error'>{error}</div>}
          {/* {file && <div>{file.name}</div>} */}
          {/* {file && <ProgressBar file={file} setFile={setFile}/> } */}
        {/* </div> */}
       
      {/* </form> */}
      <Suspense fallback={<LoaderTwo/>} >
      <ImageGrid setSelectedImg={setSelectedImg}/>
      </Suspense>
    {selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
   
    <Footer/>
    </div>
  );
}

export default GalleryView;
