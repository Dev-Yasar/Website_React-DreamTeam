import React from "react";
import { BoxesLoader } from "react-awesome-loaders";
 function Loader() {


  return (
      <div className="loadingScr">
         <BoxesLoader
          boxColor={"#0963ff"}/>
      </div>
  )
}
export default Loader;