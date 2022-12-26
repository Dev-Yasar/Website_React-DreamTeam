import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer>
        <div id="footer">
          <h1>Dream Team</h1>

          {/* Footer Nav links  */}
          <div className="footerContainer">
            <ul>
              <NavLink exact to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/admin">
                <li>Admin</li>
              </NavLink>
              <NavLink to="/artgallery">
                <li>ArtGallery</li>
              </NavLink>
              <NavLink to="/about">
                <li>About</li>
              </NavLink>
            </ul>
          </div>
          <NavLink  to="/our-app" >
        <div className="appRouteFooter">
          <p><i class="fab fa-android"> </i>  download our android app</p>
          </div>
          </NavLink>
          {/* Footer Social Media icon */}
          <ol id="social-media">
            <a  href="https://instagram.com/dream_team_designers?utm_medium=copy_link"  target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCcB2ir-_MeoSevr2G8z6p1w" target="_blank">
              <i class="fab fa-youtube"></i>
            </a>

            <a  href="https://twitter.com/DREAMTE52886071?t=56vG3gRpj6S3kRJ77oKTtA&s=09"  target="_blank">
              <i class="fab fa-twitter" ></i>
            </a>
            <a  href="mailto:dteamisp@gmail.com" target="_blank">
            <i class="fas fa-envelope-open"></i>
            </a>
          </ol>
          {/* Developer  */}
          <NavLink to="/dev">
            <h2 id="developers">
              {" "}
              <i class="fas fa-code"></i> developers
            </h2>
          </NavLink>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
