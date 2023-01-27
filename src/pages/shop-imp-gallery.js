import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/shop-layout.js";
import IMP1 from '../images/imp1.jpg';
import IMP2 from '../images/imp2.jpg';
import IMP3 from '../images/imp3.jpg';
import IMP4 from '../images/imp4.jpg';
import IMP5 from '../images/imp5.jpg';
import IMP6 from '../images/imp6.jpg';
import IMP7 from '../images/imp7.jpg';



class GallerImpPage extends Component {

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
                                src={IMP1}
                                alt="First slide"
                            />
                            </div>
                            
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={IMP2}
                                alt="Second slide"
                            />
                           
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={IMP3}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={IMP4}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={IMP5}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={IMP6}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={IMP7}
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

export default GallerImpPage
