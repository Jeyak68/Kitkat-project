import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/shop-layout.js";
import Gal1 from '../images/gal1.jpg';
import Gal2 from '../images/gal2.jpg';
import Gal3 from '../images/gal3.jpg';
import Gal4 from '../images/gal4.jpg';
import { Link } from 'gatsby';

import ReactPlayer from 'react-player'

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
                    <Link to="/shop-opcer-gallery/"><div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={Gal1}
                                alt="First slide"
                            />
                            <p class="text-xl text-center py-2">OPENING CERMONY</p>
                            </div>
                            </Link>
                            <Link to="/shop-expo-gallery/">
                                <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={Gal2}
                                alt="Second slide"
                            />
                            <p class="text-xl text-center py-2">MALAYSIA EXPO</p>
                            </div>
                            </Link>
                            <Link to="/shop-imp-gallery/">
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={Gal3}
                                alt="Third slide"
                            />
                            <p class="text-xl text-center py-2">IMPORTANT PHOTOS</p>
                            </div>
                            </Link>
                            <Link to="/shop-vip-gallery/">
                            <div class="py-2">
                            <img
                                className="object-cover w-full border h-full"
                                src={Gal4}
                                alt="Fourth slide"
                            />
                            <p class="text-xl text-center py-2">VIP PHOTO GALLERY</p>
                            </div>
                            </Link>
                            <div class="py-2">
                            <ReactPlayer           
                                 width='100%'
                                 height='100%'
                                url='https://www.youtube.com/watch?v=uew-zS4MYU0' />
                                <p class="text-xl text-center py-2">OUR VIDEO GALLERY 1</p>
                            </div>
                            <div class="py-2">
                            <ReactPlayer           
                                 width='100%'
                                 height='100%'
                                url='https://youtu.be/VdlQfQnMJTI' />
                                <p class="text-xl text-center py-2">OUR VIDEO GALLERY 2</p>
                            </div>
                            <div class="py-4">
                            <ReactPlayer           
                                 width='100%'
                                 height='100%'
                                url='https://youtu.be/uLjrzJcryu4' />
                                <p class="text-xl text-center py-2">OUR VIDEO GALLERY 3</p>
                            </div>
                            <div class="py-4">
                            <ReactPlayer           
                                 width='100%'
                                 height='100%'
                                url='https://youtu.be/rk_jd3X3j2E' />
                                <p class="text-xl text-center py-2">OUR VIDEO GALLERY 4</p>
                            </div>

                            </div>

                    </div>
                </Layout>
            </>
        )
    }
}

export default GalleryPage
