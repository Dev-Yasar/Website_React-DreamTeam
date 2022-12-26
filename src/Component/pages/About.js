import React from "react";
import ProfileCard from "../Cards";
import Footer from "../Footer";


function About() {
  return (
    <div>
      {/* Banner and about section */}
      <div id="about-page">
        <div id="overley-about">
          <h1 id="about-us">About Us</h1>
          <p id="about-descripition">
            Our mission is to help businesses succeed by providing the most
            impactful, creative and scalable content marketing services and
            technology solutions to organizations across the globe.
          </p>
        </div>
      </div>
      {/* why we details */}
      <div className="our-rep1">
        <div data-aos="zoom-in" className="our-rep2">
          <div>
            <h1 id="why-we1">Why we</h1>
          </div>

          <div>
            <ul id="why-we2">
              <li>
                <i class="far fa-smile-beam"></i> 100% Cilent Satification{" "}
              </li>
              <li>
                <i class="fas fa-check"></i> quality of work
              </li>
              <li>
                <i class="fas fa-money-bill-wave-alt"></i> affordable price{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Team Member intro */}
      <div className="pro-block1">
        <h1 data-aos="fade-right" id="proH">
          Dream team
        </h1>
        <h3 data-aos="fade-left" id="proP">
          Meet our team mates :)
        </h3>
        <div className="pro-block2">
      {   cards}
        </div>
      </div>
      {/* // Footer */}
      <Footer />
    </div>
  );
}

export default About;
