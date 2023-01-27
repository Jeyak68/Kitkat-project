import React, { Component } from "react";
import Layout from "../components/eye-layout.js";
import Terminal from "../components/eye-terminal.js";

import { Helmet } from 'react-helmet';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Eye1 from '../images/eye1.jpg';
import Eye2 from '../images/eye2.jpg';
import Eye from '../images/eye.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUserDoctor,faFirstAid } from "@fortawesome/free-solid-svg-icons";



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
                    <div className="text-center lg:text-left carousel-item active">
                      <img
                        className="d-block w-full home_banner_height "
                        src={Eye1}
                        alt="First slide"
                      />
                    </div>
                    <div className="text-center lg:text-left carousel-item active ">
                      <img
                        className="d-block w-full home_banner_height"
                        src={Eye2}
                        alt="Second slide"
                      />
                    </div>
                    
                  </Carousel>
                </div>
              </div>
            </div>                        
            
            {/* Banner Carousel End */}

            {/* TREATMENTS Start */}

            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center lg:text-left py-4">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-1 pt-4">
                      <div class="text-center"> 
                          <div class="pb-2">
                            <FontAwesomeIcon icon={faFirstAid}  className="object-cover w-24 items-center border h-24"/>
                          </div>
                          <div class="pb-4">
                            <span class="text-2xl">GLAUCOMA</span>
                          </div>
                          <div class="pb-4">
                            <p class="text-lg">Glaucoma Is A Term For A Group Of Eye Disorders Which Result In Damage To The Optic Nerve. This Is Most Often Due To Increased Pressure In The Eye. The Disorders Can Be Roughly Divided Into Two Main Categories: “Open-Angle” And “Closed-Angle” Glaucoma.</p>
                          </div>
                        </div>
                        <div class="text-center"> 
                          <div class="pb-2">
                            <FontAwesomeIcon icon={faUserDoctor}  className="object-cover w-24 items-center border h-24"/>
                          </div>
                          <div class="pb-4">
                            <span class="text-2xl">CATARACT SURGERY</span>
                          </div>
                          <div class="pb-4">
                            <p class="text-lg">Cataract Surgery Is The Removal Of The Natural Lens Of The Eye That Has Developed An Opacification, Which Is Referred To As A Cataract. Metabolic Changes Of The Crystalline Lens Fibers Over Time Lead To The Development Of The Cataract And Loss Of Transparency, Causing Impairment Or Loss Of Vision.</p>
                          </div>
                        </div>
                        <div class="text-center"> 
                          <div class="pb-2">
                          <img
                           className="object-cover w-24 justify-center border h-24"
                          src={Eye}
                          alt="Second slide"
                        />
                          </div>
                          <div class="pb-4">
                            <span class="text-2xl">OPHTHALMOLOGY</span>
                          </div>
                          <div class="pb-4">
                            <p class="text-lg">Ophthalmology Is A Branch Of Medicine Specializing In The Anatomy, Function And Diseases Of The Eye. Ophthalmologist Is A Specialist In Medical And Surgical Eye Problems. Since Ophthalmologists Perform Operations On Eyes, They Are Both Surgical And Medical Specialists.</p>
                          </div>
                        </div>
                    </div>
                    
              </div>

              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
                    <h1 class="text-4xl text-center pb-4">Why Choose Us</h1>
                      <div class="flex flex-row">
                        <div class="basis-1/4"><h1 class="text-2xl text-blue">Healthy Eyes</h1></div>
                        <div class="basis-3/4"><h1 class="text-4xl text-blue pb-2">Balaji Eye Hospital</h1>
                         <p>Your Eyes Are An Important Part Of Your Health. There Are Many Things You Can Do To Keep Them Healthy And Make Sure You Are Seeing Your Best.</p>
                         <ul class="pl-5 mt-2 space-y-1 list-decimal list-inside">
                              <li>Eat for Good Vision</li>
                              <li>Wear Sunglasses</li>
                              <li>Use Safety Eyewear</li>
                              <li>Look away from the computer screen</li>
                              <li>Visit your Eye Doctor regularly</li>
                          </ul>
                          </div>
                      </div>

                    </div>
             
                    <div class="home_banner_height d-block w-full eye_index_background_image">
                      </div>
          </main>
          <Terminal />
        </Layout >
      </>
    )
  }
}

export default IndexPage
