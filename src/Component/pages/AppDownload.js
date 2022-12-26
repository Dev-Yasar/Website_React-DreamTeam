import React,{Suspense} from "react";
import { useEffect, lazy } from "react";

import Loader from "../Loader";

// const appScreen1 = lazy(() => import("../media/app-screen1.png"));

import appScreen1 from "../media/app-screen1.png";
import Apk from "../media/dream-team.apk";



function AppDownload() {
  return (
    <div className="ourAppBody">
      <div className="AppDesc">
        <h1>DREAM TEAM APP</h1>
        <p>andriod app version of our website</p>
        <a href={Apk} download="dream-team.apk" ><button> <i class="fas fa-download"></i> Download now</button></a>
      </div>
      <div className="mobilesscr">
        <div className="mobilesscr2">
        <Suspense fallback={<Loader/>}>
        <img className="appScreen1" src={appScreen1} alt="svg"/>
       <img className="appScreen2" src={appScreen1} alt="svg"/>
       </Suspense>
      {/* <img className="svg1" src={grap} alt="svg"/>
      <img className="svg2" src={grap} alt="svg"/> */}
        </div>

      </div>
    </div>
  );
}

export default AppDownload;
