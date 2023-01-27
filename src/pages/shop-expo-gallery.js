import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/shop-layout.js";
import EXP1 from '../images/exp1.jpg';
import EXP2 from '../images/exp2.jpg';
import EXP3 from '../images/exp3.jpg';
import EXP4 from '../images/exp4.jpg';
import EXP5 from '../images/exp5.jpg';
import EXP6 from '../images/exp6.jpg';
import EXP7 from '../images/exp7.jpg';
import EXP8 from '../images/exp8.jpg';
import EXP9 from '../images/exp9.jpg';
import EXP10 from '../images/exp10.jpg';
import EXP11 from '../images/exp11.jpg';
import EXP12 from '../images/exp11.jpg';
import EXP13 from '../images/exp11.jpg';
import EXP14 from '../images/exp11.jpg';


class GallerExpoPage extends Component {

    render() {

        return (
            <>
                <Helmet title="Gallery - Dr. Laji Ba" />
                <Layout>

                <div class="banner_height d-block w-full background_image py-6">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
                    <h1 class="text-white text-4xl">Gallery</h1>
                    </div>
                    </div>
                    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center lg:text-left py-4">
                      
                    <div className="py-4 grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-1">
                   <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP1}
                                alt="First slide"
                            />
                            </div>
                            
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP2}
                                alt="Second slide"
                            />
                           
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP3}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP4}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP5}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP6}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP7}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP8}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP9}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP10}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP11}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP12}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP13}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={EXP14}
                                alt="Third slide"
                            />
                            </div>
                           

                            </div>

                    </div>
                </Layout>
            </>
        )
    }
}

export default GallerExpoPage
