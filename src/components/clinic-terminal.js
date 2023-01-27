import React, { Component } from "react";
import { Link } from 'gatsby';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

class Terminal extends Component {
    render() {
        return (

            <>
           <div class="py-6 bg_light">
           <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center lg:text-left ">
           <h3 class="font-medium text-center text-4xl py-4"> TESTIMONALS</h3>
           <div class="relative ">
              <div id="main-slide" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <Carousel
                    responsive={responsive1}
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
                    <div className=" text-center lg:text-center carousel-item active pb-4 mr-4  bg_white text-lg">
                      <p class="px-4 py-4"> Happy with Doctor friendliness, Explanation of the health issue, Treatment satisfaction, Value for money. I consulted Dr.Mini Nair at her Ayurveda hospital in Koramangala, Bangalore. The doctor advised me Ayurveda medication. I followed properly as per Doctor’s suggestion and it worked well for me. Now I am completely exposing to Sun and even I tried to be outside the whole full day.</p>
                    </div>
                    <div className=" text-center lg:text-center carousel-item active pb-4 mr-4 bg_white text-lg">
                    <p class="px-4 py-4"> Happy with Doctor friendliness, Explanation of the health issue, Treatment satisfaction, Value for money. I consulted Dr.Mini Nair at her Ayurveda hospital in Koramangala, Bangalore. The doctor advised me Ayurveda medication. I followed properly as per Doctor’s suggestion and it worked well for me. Now I am completely exposing to Sun and even I tried to be outside the whole full day.</p>
                    </div>
                    <div className=" text-center lg:text-center carousel-item active pb-4 bg_white text-lg">
                    <p class="px-4 py-4"> Happy with Doctor friendliness, Explanation of the health issue, Treatment satisfaction, Value for money. I consulted Dr.Mini Nair at her Ayurveda hospital in Koramangala, Bangalore. The doctor advised me Ayurveda medication. I followed properly as per Doctor’s suggestion and it worked well for me. Now I am completely exposing to Sun and even I tried to be outside the whole full day.</p>
                    </div>
                    
                  </Carousel>
                </div>
              </div>
            </div> 
            </div>
            </div>  
        </>
              
        )
    }
}

export default Terminal;
