import React, { Component } from "react";
import Layout from "../components/layout.js";
import Terminal from "../components/terminal.js";

import { Helmet } from 'react-helmet';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Homebanner1 from '../images/1.jpg';
import Homebanner2 from '../images/2.jpg';
import Homebanner3 from '../images/3.jpg';

import { Link } from 'gatsby';
import Logo from '../images/eye.png';


class IndexPage extends Component {
  state = {
    activeSilde: 0
  };

  handleSlideSelect = () => { };

  render() {





    const responsive = {
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
    };

    const responsive1 = {
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 }
    };

    const CustomDot = ({ onMove, index, onClick, active }) => {
      // onMove means if dragging or swiping in progress.
      // active is provided by this lib for checking if the item is active or not.
      return (
        <li
          className={active ? "active" : "inactive"}
          onClick={() => onClick()}
        >
          {index + 1}
        </li>
      );
    };

    return (
      <>
        <Helmet title="Dr. Laji Ba " />
        <Layout>
          <main>
            {/* Banner Carousel Start */}
            <div class="relative p-4 ">
              <div id="main-slide" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <Carousel
                    responsive={responsive}
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    customDot={<CustomDot />}
                  // customRightArrow={<CustomRight />}
                  // customLeftArrow={<CustomLeft />}
                  >
                    <div className="px-2 sm:px-6 lg:px-8 text-center lg:text-left carousel-item active">
                      <img
                        className="d-block w-full banner_height "
                        src={Homebanner1}
                        alt="First slide"
                      />
                    </div>
                    <div className="px-2 sm:px-6 lg:px-8 text-center lg:text-left carousel-item active ">
                      <img
                        className="d-block w-full banner_height"
                        src={Homebanner2}
                        alt="Second slide"
                      />
                    </div>
                    <div className="px-2 sm:px-6 lg:px-8 text-center lg:text-left carousel-item active ">
                      <img
                        className="d-block w-full banner_height"
                        src={Homebanner3}
                        alt="Second slide"
                      />
                    </div>
                    
                  </Carousel>
                </div>
              </div>
            </div>                        
            
            {/* Banner Carousel End */}

              
          </main>
          <div class="h-full d-block w-full background_image py-6">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
              <div class="grid grid-cols-3 gap-8 px-6 py-8">
            <div>
                    <h2 class="mb-6 text-2xl font-semibold uppercase text_white">Website</h2>
                        <Link to="/clinic-index/"><p class="text-2xl text-white pb-2">AAYUSH POLY CLINIC </p></Link>
                        <Link to="/eye-index/"><p class="text-2xl text-white pb-2">BALAJI EYE HOSPITAL </p></Link>
                        <Link to="/shop-index/"><p class="text-2xl text-white pb-2">BALAJI ENTERPRISES & EXPORTS </p></Link>
                </div>
                <div>
                    <h2 class="mb-6 text-2xl font-semibold uppercase text_white">ADDRESS</h2>
                        <p class="text-xl footer_text pb-2">BalajiEye Foundation,</p>
                        <p class="text-xl footer_text pb-2">80/2 Cutcherry Street,</p>
                        <p class="text-xl footer_text pb-2">Gobichettipalayam,</p>
                        <p class="text-xl footer_text">Erode.</p>
                </div>
                <div>
                    <h2 class="mb-6 text-2xl font-semibold text_white uppercase ">LOCATION & CONTACT</h2>
                    <h2 class="mb-6 text-xl font-semibold uppercase text_white">EMAIL</h2>
                    <p class=" text-xl footer_text pb-6">1drlajibacure@gmail.com</p>

                    <h2 class="mb-6 text-xl font-semibold uppercase text_white">Phone</h2>
                    <p class=" text-xl footer_text">+91 9688515552</p>
                </div>
                
            </div>
                  </div>
                </div>
        </Layout >
      </>
    )
  }
}

export default IndexPage
