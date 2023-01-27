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
           <h3 class="font-medium text-center text-4xl py-4">FAQ'S</h3>
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
                    <div className=" text-center lg:text-center carousel-item active pb-4 bg_white text-lg">
                      <h1 class="pt-4">What is the difference between Myopia and Hypermetropia?</h1>
                    <p class="px-4 py-4"> There is a clear distinction between Myopia and Hyperopia, although both forms hinder or impair the vision of the eye. Myopia is essentially ‘short-sightedness’ or ‘near vision’ whilst Hyperopia is ‘Long-sightedness’. these problems arise either because the lens or the actual eyeball shape is incorrect and therefore unable to focus light properly on the retina..</p>
                    </div>
                    <div className=" text-center lg:text-center carousel-item active pb-4 mr-4  bg_white text-lg">
                      <h1 class="pt-4">I work on a computer all day. Can this hurt my eyes?</h1>
                      <p class="px-4 py-4"> Computer monitors emit levels of radiation that are considerably lower than the maximum allowed for safety, according to a study by the National Institute for Occupational Safety and Health. NIOSH compared the maximum radiation levels in a group of monitors with the safety standards.</p>
                    </div>
                    <div className=" text-center lg:text-center carousel-item active pb-4 bg_white text-lg">
                      <h1 class="pt-4">I'm interested in having Cataract done. What information do I need to know?</h1>
                    <p class="px-4 py-4">We have a section of Cataract Surgery. You need to refer it and still have some questions, feel free to Contact Us...</p>
                    </div>
                    <div className=" text-center lg:text-center carousel-item active pb-4 mr-4 bg_white text-lg">
                      <h1 class="pt-4">Can eyes be transplanted?</h1>
                    <p class="px-4 py-4"> No. Currently, there is no way to transplant a whole eye. However, corneas have been successfully transplanted for many years..</p>
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
