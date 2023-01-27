import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/shop-layout.js";
import S1 from '../images/s1.jpg';
import S2 from '../images/s2.jpg';
import S3 from '../images/s3.jpg';
import S4 from '../images/s4.jpg';
import S5 from '../images/s5.jpg';
import S6 from '../images/s6.jpg';
import S7 from '../images/s7.jpg';

import { Link } from 'gatsby';

class ProductsPage extends Component {

    render() {

        return (
            <>
                <Helmet title="About_us - Dr. Laji Ba" />
                <Layout>
                <div class="banner_height d-block w-full background_image py-6">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
                    <h1 class="text-white text-4xl">Products</h1>
                    </div>
                </div>

                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center lg:text-left py-4">
                      
                    <div className="py-4 grid grid-cols-1 gap-2 lg:grid-cols-4 sm:grid-cols-1">
                      <div class="py-2">
                        <div class="pb-2">
                            <img
                                className="object-cover w-full border h-full "
                                src={S1}
                                alt="First slide"
                            />
                            </div>
                            <p class="text-xl text-center pb-2">ALOEVERA SHAMPOO</p>
                            <p class="text-xl text-center pb-2">₹180.00</p>
                            <div class="pt-2 text-center pb-4">
                            <button class="contact-hover text-white text-center font-bold py-4 px-4 rounded shadow-md bg-blue-500">Buy Now</button>
                               </div>                            
                            </div>
                            <div class="py-2">
                            <div class="pb-2">
                            <div class="pb-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={S2}
                                alt="Second slide"
                            />
                            </div>
                            <p class="text-xl text-center pb-2">ALOEVERA SHAMPOO</p>
                            <p class="text-xl text-center pb-2">₹180.00</p>
                            <div class="pt-2 text-center pb-4">
                            <button class="contact-hover text-white text-center font-bold py-4 px-4 rounded shadow-md bg-blue-500">Buy Now</button>
                               </div> 
                            </div>
                            </div>
                            <div class="py-2">
                            <div class="pb-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={S3}
                                alt="Third slide"
                            />
                            </div>
                            <p class="text-xl text-center pb-2">ALOEVERA SHAMPOO</p>
                            <p class="text-xl text-center pb-2">₹180.00</p>
                            <div class="pt-2 text-center pb-4">
                            <button class="contact-hover text-white text-center font-bold py-4 px-4 rounded shadow-md bg-blue-500">Buy Now</button>
                               </div> 
                            </div>
                            <div class="py-2">
                            <div class="pb-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={S4}
                                alt="Fourth slide"
                            />
                            </div>
                            <p class="text-xl text-center pb-2">ALOEVERA SHAMPOO</p>
                            <p class="text-xl text-center pb-2">₹180.00</p>
                            <div class="pt-2 text-center pb-4">
                            <button class="contact-hover text-white text-center font-bold py-4 px-4 rounded shadow-md bg-blue-500">Buy Now</button>
                               </div> 
                            </div>
                            <div class="py-2">
                            <div class="pb-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={S5}
                                alt="Fifth slide"
                            />
                            </div>
                            <p class="text-xl text-center pb-2">ALOEVERA SHAMPOO</p>
                            <p class="text-xl text-center pb-2">₹180.00</p>
                            <div class="pt-2 text-center pb-4">
                            <button class="contact-hover text-white text-center font-bold py-4 px-4 rounded shadow-md bg-blue-500">Buy Now</button>
                               </div> 
                            </div>
                            <div class="py-2">
                            <div class="pb-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={S6}
                                alt="Six slide"
                            />
                            </div>
                            <p class="text-xl text-center pb-2">ALOEVERA SHAMPOO</p>
                            <p class="text-xl text-center pb-2">₹180.00</p>
                            <div class="pt-2 text-center pb-4">
                            <button class="contact-hover text-white text-center font-bold py-4 px-4 rounded shadow-md bg-blue-500">Buy Now</button>
                               </div> 
                            </div>
                            <div class="py-2">
                            <div class="pb-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={S7}
                                alt="Seventh slide"
                            />
                            </div>
                            <p class="text-xl text-center pb-2">ALOEVERA SHAMPOO</p>
                            <p class="text-xl text-center pb-2">₹180.00</p>
                            <div class="pt-2 text-center pb-4">
                            <button class="contact-hover text-white text-center font-bold py-4 px-4 rounded shadow-md bg-blue-500">Buy Now</button>
                               </div> 
                            </div>
                            
                    </div>
                    </div>

                </Layout>
            </>
        )
    }
}

export default ProductsPage
