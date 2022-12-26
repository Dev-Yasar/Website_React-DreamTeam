import React ,{useState}from "react";
import ReactDOM from "react-dom";
import logo from "../Component/media/logo.png";
import { NavLink} from "react-router-dom";

function MobileNav() {
    const [click, setClick]  = useState(false);
    const handleClick = () => setClick(!click);

    let audio = new Audio("/tech.wav")
const start = () => {
  audio.play()
}
  return (
    <div>

   

          <div className="navmobi"> 
          <ul className="MobilNavG">

            <li className="nav-itemV2">
              <NavLink exact to="/"
               activeClassName="active"
               className="nav-links"
               
               onClick={handleClick}>
              <i onClick={start} class="fas fa-home"></i>
              </NavLink >
            </li>
              

            <li className="nav-itemV2">
              <NavLink 
                to="/artgallery"
                activeClassName="active"
                className="nav-links"
               
                onClick={handleClick}>
                <i  onClick={start} class="fas fa-images"></i>
              </NavLink >
            </li>


            <li className="nav-itemV2">
              <NavLink  to="/about" 
               activeClassName="active"
              className="nav-links"
             
              onClick={handleClick}
              >
                <i  onClick={start} class="fas fa-address-card"></i>
              </NavLink >
            </li>

                        <li className="nav-itemV2">
              <NavLink 
                to="/admin"
                activeClassName="active"
                className="nav-links"
                
                onClick={handleClick}>
               <i onClick={start} class="fas fa-user-cog"></i>
              </NavLink >
            </li>

          </ul>
         </div>


     
    
    </div>
  );
}

export default MobileNav;
