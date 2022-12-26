import React from "react";
import { CircleLoader } from "react-awesome-loaders";
 function LoaderTwo() {


  return (
      <div className="loadingScr">
         
         <>
      <CircleLoader
        meshColor={"#0963ff"}
        lightColor={"#337eff"}
        duration={1.5}
        desktopSize={"90px"}
        mobileSize={"64px"}
      />
      </>
      </div>
  )
}
export default LoaderTwo;