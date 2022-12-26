import React ,{useState}from "react";
import ReactDOM from "react-dom";
import logo from "../Component/media/logo.png";
import { NavLink} from "react-router-dom";

function NavBar() {
const [click, setClick]  = useState(false);
const handleClick = () => setClick(!click);

let audio = new Audio("/tech.wav")
const start = () => {
  audio.play()
}

  return (
    <div>

   
        <nav className="navbar" >
        <div className="nav-container">
          <div id="logo"> 
          <NavLink  to="/">
            <img  id="logoImg"  src={logo} />
          </NavLink>
          <p>Dream Team</p>
          </div>


  
          <ul className={click ? "nav-menus active" : "nav-menus" }>
            {/* v1 */}
            <li className="nav-itemV1">
              <NavLink exact to="/"
               activeClassName="active"
               className="nav-links"
               onClick={handleClick}
               onClick={start}>
                 
                Home
              </NavLink >
            </li>
              
            <li className="nav-itemV1">
              <NavLink 
                to="/admin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                onClick={start}>
                Admin
              </NavLink >
            </li>

            <li className="nav-itemV1">
              <NavLink 
                to="/artgallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                onClick={start}>
                Art Gallery
              </NavLink >
            </li>


            <li className="nav-itemV1">
              <NavLink  to="/about" 
               activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              onClick={start}>
                About
              </NavLink >
            </li>
 
     </ul>
          <div className="nav-icon" onClick={handleClick}> 
           <i className={click ? "fas fa-times" :"fas fa-bars"}></i>
          </div>
        </div>
      </nav>

     
    
    </div>
  );
}

export default NavBar;
