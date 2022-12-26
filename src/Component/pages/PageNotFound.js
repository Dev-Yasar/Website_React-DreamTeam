import React from 'react';
import P404 from "../media/404.png";
import { NavLink} from "react-router-dom";

function PageNotFound() {
  return (
    
    <div className='errorPageBg'>
       <div className='errorBg'>
           <div className='errorBgConatiner'>
           <img src={P404} />
           <NavLink  to="/">
           <button><i class="fas fa-long-arrow-alt-left"></i> back home</button>
           </NavLink>
           </div>
           
       </div>
    </div>
  );
}

export default PageNotFound;
