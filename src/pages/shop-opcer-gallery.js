import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/shop-layout.js";
import OP1 from '../images/op1.jpg';
import OP2 from '../images/op2.jpg';
import OP3 from '../images/op3.jpg';
import OP4 from '../images/op4.jpg';
import OP5 from '../images/op5.jpg';
import OP6 from '../images/op6.jpg';
import OP7 from '../images/op7.jpg';
import OP8 from '../images/op8.jpg';
import OP9 from '../images/op9.jpg';
import OP10 from '../images/op10.jpg';
import OP11 from '../images/op11.jpg';


class GalleryCermanyPage extends Component {

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
                                src={OP1}
                                alt="First slide"
                            />
                            </div>
                            
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={OP2}
                                alt="Second slide"
                            />
                           
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={OP3}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={OP4}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={OP5}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={OP6}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={OP7}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={OP8}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={OP9}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={OP10}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={OP11}
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

export default GalleryCermanyPage
