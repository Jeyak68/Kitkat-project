import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/clinic-layout.js";
import Image from '../images/3.jpg';


class GalleryPage extends Component {

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
                           <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="First slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Second slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Third slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Fourth slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Fourth slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Fourth slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Fourth slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Fourth slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Fourth slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Fourth slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Fourth slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Fourth slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Fourth slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Fourth slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Image}
                                alt="Fourth slide"
                            />
                            </div>

                            </div>

                    </div>
                </Layout>
            </>
        )
    }
}

export default GalleryPage
