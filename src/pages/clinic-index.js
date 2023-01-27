import React, { Component } from "react";
import Layout from "../components/clinic-layout.js";
import Terminal from "../components/clinic-terminal.js";

import { Helmet } from 'react-helmet';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Homebanner from '../images/3.jpg';

import { Link } from 'gatsby';
import Ott from '../images/ott.jpg';
import Varma from '../images/varma.jpg';
import Yoga from '../images/yoga.jpg';
import Pura from '../images/pura.jpg';


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
                        className="d-block w-full home_banner_height "
                        src={Homebanner}
                        alt="First slide"
                      />
                    </div>
                    <div className="px-2 sm:px-6 lg:px-8 text-center lg:text-left carousel-item active ">
                      <img
                        className="d-block w-full home_banner_height"
                        src={Homebanner}
                        alt="Second slide"
                      />
                    </div>
                    
                  </Carousel>
                </div>
              </div>
            </div>                        
            
            {/* Banner Carousel End */}

            {/* TREATMENTS Start */}

            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center lg:text-left ">
              <h3 class="font-medium text-center text-4xl py-4"> TREATMENTS</h3>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <img
                    className="object-cover w-full border h-72"
                    src={Yoga}
                    alt="First slide"
                />
                <img
                    className="object-cover w-full border h-72"
                    src={Ott}
                    alt="Second slide"
                />
                <img
                    className="object-cover w-full border h-72"
                    src={Varma}
                    alt="Third slide"
                />
                <img
                    className="object-cover w-full border h-72"
                    src={Pura}
                    alt="Fourth slide"
                />
            </div>
        </div>
        <div class="pt-4 text-center pb-4">
                <Link to="/services/"> <button class="contact-hover text-white text-center font-bold py-4 px-4 rounded shadow-md bg-blue-500">View Treatment</button></Link>
              </div>

                {/* TREATMENTS End */}

             
             
          </main>
          <Terminal />
        </Layout >
      </>
    )
  }
}

export default IndexPage
