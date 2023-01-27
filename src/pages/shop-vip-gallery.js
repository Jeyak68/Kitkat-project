import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/shop-layout.js";
import VIP1 from '../images/vip1.jpg';
import VIP2 from '../images/vip2.jpg';
import VIP3 from '../images/vip3.jpg';
import VIP4 from '../images/vip4.jpg';
import VIP5 from '../images/vip5.jpg';
import VIP6 from '../images/vip6.jpg';
import VIP7 from '../images/vip7.jpg';
import VIP8 from '../images/vip8.jpg';
import VIP9 from '../images/vip9.jpg';
import VIP10 from '../images/vip10.jpg';
import VIP11 from '../images/vip11.jpg';
import VIP12 from '../images/vip12.jpg';
import VIP13 from '../images/vip13.jpg';
import VIP14 from '../images/vip14.jpg';
import VIP15 from '../images/vip15.jpg';
import VIP16 from '../images/vip16.jpg';
import VIP17 from '../images/vip17.jpg';




class GallerVipPage extends Component {

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
                                src={VIP1}
                                alt="First slide"
                            />
                            </div>
                            
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP2}
                                alt="Second slide"
                            />
                           
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP3}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP4}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP5}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP6}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP7}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP8}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP9}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP10}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP11}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP12}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP13}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP14}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP15}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP16}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={VIP17}
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

export default GallerVipPage
