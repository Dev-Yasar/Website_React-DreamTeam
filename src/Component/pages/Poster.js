import React from "react";
import Footer from "../Footer";

import Quote from "../qoute";

function Poster() {
  return (
    <div>
      {/* tiile */}
      <div className="service-page">
        <h1 className="heading">poster Designing</h1>
        <p className="explain">we post your idea into poster</p>
      </div>

      {/* Wave svg */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0963ff"
          fill-opacity="1"
          d="M0,224L30,208C60,192,120,160,180,133.3C240,107,300,85,360,112C420,139,480,213,540,224C600,235,660,181,720,138.7C780,96,840,64,900,80C960,96,1020,160,1080,160C1140,160,1200,96,1260,69.3C1320,43,1380,53,1410,58.7L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>

      {/* Plans */}
      <div className="plan-div">
        <div className="plan plan1">
          <h1> Basic</h1>
          <ul>
            <li>2 Sample designs</li>
            <li>3 Revises for correction</li>
            <li>Delivery time: 1 or 2 days</li>
          </ul>
        </div>

        <div className="plan plan2">
          <h1> Standard</h1>
          <ul>
            <li>3 Sample designs</li>
            <li>5 Revises for correction</li>
            <li>Delivery time: 1 - 3 days</li>
          </ul>
        </div>

        <div className="plan plan3">
          <h1>
            {" "}
            Premium <i class="fas fa-crown"></i>
          </h1>
          <ul>
            <li>5 Sample designs</li>
            <li>8 Revises for correction</li>
            <li>Delivery time: 1 - 3 days</li>
          </ul>
        </div>
      </div>

      <Quote />
      <Footer />
    </div>
  );
}

export default Poster;
