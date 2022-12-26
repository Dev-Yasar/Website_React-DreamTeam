import React from "react";
// import banner from "../media/banner.jpg";
import man from "../media/OBJECTS.png";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Quote from "../qoute";

function Home() {
  //Sfx func
  let audio = new Audio("/tech.wav");
  const start = () => {
    audio.play();
  };

  return (
    <div>
      {/* Home Banner Start*/}
      <div id="banner-container">
        <div className="homebanner"></div>
        <div className="bannerbolck1">
          <h1 className="banner-title">
            Welcome to <span>Dream Team</span>
          </h1>
          <p className="bannerP">make it simple but siginificant</p>
        </div>
        <div className="bannerbtns">
          <div className="btn-container">
            <NavLink exact to="/qoute">
              <button onClick={start} className="homebtn homebtn1">
                Get free Qoute
              </button>
            </NavLink>
            <NavLink exact to="/artgallery">
              <button onClick={start} className="homebtn">
                Visit Gallery
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* Home Banner End*/}

      {/*  OUR SERVICE START */}
      <section id="block2">
        <div data-aos-delay="300" data-aos="fade-right" id="text-area">
          <p id="our-service">Our Services</p>
        </div>

        <div class="block">
          <div id="box2">
            <div id="box3">
              <NavLink exact to="/logo">
                <div
                  data-aos-delay="300"
                  data-aos="fade-left"
                  onClick={start}
                  class="service"
                >
                  <i class="fas fa-lightbulb icon icon1"></i>
                  <p class="icon-text icon-text1">Logo Design</p>
                </div>
              </NavLink>

              <NavLink exact to="/ads">
                <div
                  data-aos-delay="300"
                  data-aos="fade-left"
                  onClick={start}
                  class="service"
                >
                  <i class="fas fa-ad icon icon2"></i>
                  <p class="icon-text icon-text2">Advertising</p>
                </div>
              </NavLink>

              <NavLink exact to="/edit">
                <div
                  data-aos-delay="300"
                  data-aos="fade-left"
                  onClick={start}
                  class="service"
                >
                  <i class="fas fa-film icon icon3"></i>
                  <p class="icon-text icon-text3">Video Editing</p>
                </div>
              </NavLink>

              <NavLink exact to="/photo">
                <div
                  data-aos-delay="300"
                  data-aos="fade-left"
                  onClick={start}
                  class="service"
                >
                  <i class="fas fa-image icon icon4"></i>
                  <p class="icon-text icon-text4">Photo Editing</p>
                </div>
              </NavLink>

              <NavLink exact to="/poster">
                <div
                  data-aos-delay="300"
                  data-aos="fade-left"
                  onClick={start}
                  class="service"
                >
                  <i class="fas fa-file-image icon icon5"></i>
                  <p class="icon-text icon-text5">Poster Design</p>
                </div>
              </NavLink>

              <NavLink exact to="/ui-ux">
                <div
                  data-aos-delay="300"
                  data-aos="fade-left"
                  onClick={start}
                  class="service"
                >
                  <i class="fab fa-uikit icon icon6"></i>
                  <p class="icon-text icon-text6">UI & UX Design</p>
                </div>
              </NavLink>

              <NavLink exact to="/other">
                <div
                  data-aos-delay="300"
                  data-aos="fade-left"
                  onClick={start}
                  class="service"
                >
                  <i class="fas fa-share icon icon7"></i>
                  <p class="icon-text icon-text7">For Other</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      {/*  OUR SERVICE END */}

      {/* <!-- ABOUT US BLOCK --> */}
      <section class="block">
        <div data-aos-delay="300" data-aos="zoom-in-up" id="rectangle">
          <div id="about">
            <div data-aos-delay="300" data-aos="fade-right">
              <img id="creative" src={man} alt="OBJECTS" />
            </div>
            <div data-aos-delay="500" data-aos="fade-left" id="paragarph">
              <h1>GRAPHIC DESIGN SERVICES</h1>
              <p>
                Graphic Design makes your content or idea look more professional
                and trustworthy and that is very important for your business to
                increase its sales and services or audience. The graphic
                designpromotes creativity and makes your idea more appealing and
                easy to consume for the audience. Every brand has a story that
                helps people connect with that brand and graphic designing is a
                way of making it more effective.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Quote />
      {/* <!-- ABOUT US BLOCK END --> */}
      <Footer />
    </div>
  );
}

export default Home;
