import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/shop-layout.js";
import News1 from '../images/News1.jpg';
import News2 from '../images/News2.jpg';
import News3 from '../images/News3.jpg';
import News4 from '../images/News4.jpg';
import News5 from '../images/News5.jpg';
import News6 from '../images/News6.jpg';
import News7 from '../images/News7.jpg';
import News8 from '../images/News8.jpg';
import News9 from '../images/News9.jpg';
import News10 from '../images/News10.jpg';
import News11 from '../images/News11.jpg';
import News12 from '../images/News12.jpg';
import Dinakaran from '../images/dinakaran_icon.jpg';
import Thanthi from '../images/dailythanthi_icon.jpg';
import Kalaikathir from '../images/kalaikathir_icon.jpg';
import Malaimalar from '../images/malaimalar_icon.jpg';

import { Link } from 'gatsby';

class MediaPage extends Component {

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
                      
                    <div className="py-4 grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-1">
                            <div class="py-4">
                            <img
                                className=" pl-4 object-cover border "
                                src={Dinakaran}
                                alt="Dinakaran Image"
                            />
                                <h1 class="text-xl news-text">Date: 21-1-2014</h1>
                            <img
                                className="object-cover w-full border h-5/6	"
                                src={News1}
                                alt="First slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className=" pl-4 object-cover border "
                                src={Dinakaran}
                                alt="Dinakaran Image"
                            />
                                <h1 class="text-xl news-text">Date: 22-1-2014</h1>
                            <img
                                className="object-cover w-full border h-5/6	 "
                                src={News2}
                                alt="First slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className=" pl-4 object-cover border "
                                src={Dinakaran}
                                alt="Dinakaran Image"
                            />
                                <h1 class="text-xl news-text">Date: 23-1-2014</h1>
                            <img
                                className="object-cover w-full border h-5/6	"
                                src={News3}
                                alt="First slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className=" pl-4 object-cover border "
                                src={Dinakaran}
                                alt="Dinakaran Image"
                            />
                                <h1 class="text-xl news-text">Date: 24-1-2014</h1>
                            <img
                                className="object-cover w-full border h-5/6 "
                                src={News4}
                                alt="First slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className=" pl-4 object-cover border "
                                src={Dinakaran}
                                alt="Dinakaran Image"
                            />
                                <h1 class="text-xl news-text">Date: 14-9-2014</h1>
                            <img
                                className="object-cover w-full border h-5/6 "
                                src={News5}
                                alt="First slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className=" pl-4 object-cover border "
                                src={Dinakaran}
                                alt="Dinakaran Image"
                            />
                                <h1 class="text-xl news-text">Date: 15-2-2015</h1>
                            <img
                                className="object-cover w-full border h-5/6 "
                                src={News6}
                                alt="First slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className=" pl-4 object-cover border "
                                src={Thanthi}
                                alt="Dinakaran Image"
                            />
                                <h1 class="text-xl news-text">Date: 1-2-2014</h1>
                            <img
                                className="object-cover w-full border h-5/6 "
                                src={News7}
                                alt="First slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className=" pl-4 object-cover border "
                                src={Thanthi}
                                alt="Dinakaran Image"
                            />
                                <h1 class="text-xl news-text">Date: 8-2-2014</h1>
                            <img
                                className="object-cover w-full border h-5/6 "
                                src={News8}
                                alt="First slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className=" pl-4 object-cover border "
                                src={Thanthi}
                                alt="Dinakaran Image"
                            />
                                <h1 class="text-xl news-text">Date: 25-1-2014</h1>
                            <img
                                className="object-cover w-full border h-5/6 "
                                src={News9}
                                alt="First slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className=" pl-4 object-cover border "
                                src={Kalaikathir}
                                alt="Dinakaran Image"
                            />
                                <h1 class="text-xl news-text">Date: 22-1-2014</h1>
                            <img
                                className="object-cover w-full border h-5/6 "
                                src={News10}
                                alt="First slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className=" pl-4 object-cover border "
                                src={Malaimalar}
                                alt="Dinakaran Image"
                            />
                                <h1 class="text-xl news-text">Date: 22-1-2014</h1>
                            <img
                                className="object-cover w-full border h-5/6 "
                                src={News11}
                                alt="First slide"
                            />
                            </div>
                            <div class="py-2">
                            <img
                                className=" pl-4 object-cover border "
                                src={Dinakaran}
                                alt="Dinakaran Image"
                            />
                                <h1 class="text-xl news-text">Date: 18-10-2020</h1>
                            <img
                                className="object-cover w-full border h-5/6 "
                                src={News12}
                                alt="First slide"
                            />
                            </div>
                            
                        </div>
                    </div>

                </Layout>
            </>
        )
    }
}

export default MediaPage
