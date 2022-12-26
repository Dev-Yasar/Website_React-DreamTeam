import React from "react";
import { NavLink } from "react-router-dom";

function Quote() {
  return (
    <div data-aos="fade-up">
      <div  id="plane">
       

      <div  id="qoute-h">
        Have a Project in Mind?
         </div>  

        
         <div>
          <h4 id="qoute-p">
            We understand what your business means to you, so we thoroughly
            discuss to know your needs considering the target user needs and
            modern market trends.
          </h4>
        </div>

      </div>


       
        

      
     
     
      <div id="qoute">
      <NavLink exact to="/qoute" >
        <button className="qoute-btn">Let's Talk</button>
        </NavLink>
      </div>
     

    </div>
  );
}

export default Quote;
