import React, { useState } from "react";
import avatar from "../media/avatar.png";
import Analytics from "./Analytics";
import ArtGallery from "./Art-gallery";
import EmptyAdmin from "./EmptyAdmin";

function AdminPanel() {
  //Gallery view in Admin Console
  const [gallery, setGallery] = useState(true);
  //Analyticsview in Admin Console
  const [analytics, setAnalytics] = useState(true);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //Gallery btn fun
  function gallerybtn() {
    setGallery(false);
    setAnalytics(true);
    document.getElementById("adminDefaultText").style.display = "none";
  }

  //Analaytics btn fun
  function analayticsbtn() {
    setGallery(true);
    setAnalytics(false);
    document.getElementById("adminDefaultText").style.display = "none";
  }

  return (
    <div>
      {/*  Nav bar for Admin Panel */}
      <div className="adminToggle">
        <i
          onClick={handleClick}
          className={
            click ? "fas fa-times adminmenu1" : "fas fa-arrow-right adminmenu2"
          }
        ></i>
        <h4>admin console</h4>
      </div>
      <div className="adminBg">
        <div className={click ? "adminNavBar active" : "adminNavBar"}>
          <div>
            <img src={avatar} className="adminAvatar" avatar />
          </div>
          <h3 className="adminName">Dream team admin</h3>

          <div className="adminNav">
            <h1 onClick={gallerybtn} className="adminNavLink">
              {" "}
              Image Upload <i class="fas fa-upload"></i>
            </h1>

            <h1 onClick={analayticsbtn} className="adminNavLink">
              analytics <i class="fas fa-chart-line"></i>
            </h1>
          </div>

          {/* <button className='logoutbtn'>Log out</button> */}
        </div>

        {/* Pages Render Section */}
        <div className="pages">
          <div id="adminDefaultText">
            <EmptyAdmin />
          </div>

          {gallery ? <></> : <ArtGallery />}
          {analytics ? <></> : <Analytics />}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
