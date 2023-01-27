import React, { Component } from "react";
import Layout from "../components/shop-layout.js";

import { Helmet } from 'react-helmet';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
          <div class="banner_height d-block w-full shop-background_image py-6"> </div>

            {/* TREATMENTS Start */}

            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center lg:text-left py-4">
              <h3 class="font-medium text-center text-4xl py-4 shop-heading"> WELCOME TO " DR.LAJIBA - WORLD OF WELL BEING".</h3>

              <p class="text-lg text-center pb-6"> Dr.lajiba - It's Me A "Genie" Welcome You All To The World Of Well Being, Where The Health Is Maintained Well With Pure Herbal Medicated Products Without Side Effects In The Forth Coming Future World . Here I Promise You All That , The Health Care Is Being Taken Care Of With My Herbal Medicine Ranges Like,</p>
             
              <p class="text-lg text-center pb-2"> Cold And head Ache Pain Balm. (10gm,25gm)</p>
              <p class="text-lg text-center pb-2"> Joint And Muscle Pain Reliever. (50 ml Liniment)</p>
              <p class="text-lg text-center pb-2"> Anti Dandruff Shampoo. (Coco Fresh Shampoo)</p>
              <p class="text-lg text-center pb-2">Anti Hair Fall Hair Oil.(Hair Fresh Hair Oil)</p>
              <p class="text-lg text-center pb-2">Anti Fungal/ Anti Scabies & eodorant Soap. (Skin Fresh Soap).</p>
             </div>
          </main>
        </Layout >
      </>
    )
  }
}

export default IndexPage
