import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/clinic-layout.js";
import EC from '../images/ec.jpg';
import About from '../images/3.jpg';
import Terminal from "../components/clinic-terminal.js";

class AboutPage extends Component {

    render() {

        return (
            <>
                <Helmet title="About_us - Dr. Laji Ba" />
                <Layout>
                <div class="banner_height d-block w-full background_image py-6">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
                    <h1 class="text-white text-4xl">About US</h1>
                    </div>
                </div>

                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center lg:text-left py-4">
              <h3 class="font-medium text-center text-4xl py-4"> About US</h3>

              <div class="grid grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-2 sm:grid-cols-1">

                <img
                    className="w-full h-96"
                    src={EC}
                    alt="First slide"
                />
                 
                    <marquee class="text-2xl text-blue">Welcome to Dr LALJIBA AAYUSH POLY CLINIC</marquee>
              </div>
              </div>

              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center lg:text-left py-6">
              <h3 class="font-medium text-center text-4xl py-4"> Images</h3>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-1">
                <img
                    className="object-cover w-full border h-72"
                    src={About}
                    alt="First slide"
                />
                <img
                    className="object-cover w-full border h-72"
                    src={About}
                    alt="Third slide"
                />
                <img
                    className="object-cover w-full border h-72"
                    src={About}
                    alt="Fourth slide"
                />
            </div>
                   </div>
                   <Terminal />
                </Layout>
            </>
        )
    }
}

export default AboutPage
