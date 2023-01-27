import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/layout.js";
import Yoga from '../images/yoga.jpg';
import Varma from '../images/varma.jpg';
import Steam from '../images/steam.jpg';
import Sid from '../images/sid.jpg';
import Nasiyam from '../images/nasiyam.jpg';
import Thok from '../images/Thok.jpg';
import Pat from '../images/pat.jpg';
import Ir from '../images/IR.jpeg';
import Pura from '../images/pura.jpg';
import Ott from '../images/ott.jpg';


class ServicePage extends Component {

    render() {

        return (
            <>
                <Helmet title="Services - Dr. Laji Ba" />
                <Layout>

                <div class="banner_height d-block w-full background_image py-6">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
                    <h1 class="text-white text-4xl">Services</h1>
                    </div>
                    </div>
                    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center lg:text-left py-4">
                        <h3 class="font-medium text-center text-4xl py-4"> TREATMENTS</h3>
                      
                    <div className="py-4 grid grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2">
                           <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={Varma}
                                alt="First slide"
                            />
                            <h1 class="text-2xl text-blue text-center pt-2"> Varma Treatment</h1>
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={Steam}
                                alt="Second slide"
                            />
                            <h1 class="text-2xl text-blue text-center pt-2"> Steam Bath Treatment</h1>
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={Yoga}
                                alt="Third slide"
                            />
                             <h1 class="text-2xl text-blue text-center pt-2"> Yoga Treatment</h1>
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={Sid}
                                alt="Fourth slide"
                            />
                             <h1 class="text-2xl text-blue text-center pt-2"> Shirodhara Treatment</h1>
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={Nasiyam}
                                alt="Fourth slide"
                            />
                             <h1 class="text-2xl text-blue text-center pt-2"> Nasiyam Treatment</h1>
                            </div>

                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={Thok}
                                alt="Fourth slide"
                            />
                             <h1 class="text-2xl text-blue text-center pt-2"> Thokkanam Treatment</h1>
                            </div>

                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={Pat}
                                alt="Fourth slide"
                            />
                             <h1 class="text-2xl text-blue text-center pt-2"> Pattru Treatment</h1>
                            </div>
                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={Ir}
                                alt="Fourth slide"
                            />
                             <h1 class="text-2xl text-blue text-center pt-2"> IR Therapy Treatment</h1>
                            </div>

                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={Pura}
                                alt="Fourth slide"
                            />
                             <h1 class="text-2xl text-blue text-center pt-2"> Pura Valayam Treatment</h1>
                            </div>

                            <div class="py-4">
                            <img
                                className="object-cover w-full border h-full"
                                src={Ott}
                                alt="Fourth slide"
                            />
                             <h1 class="text-2xl text-blue text-center pt-2"> Ottradam Treatment</h1>
                            </div>


            </div>

                    </div>
                </Layout>
            </>
        )
    }
}

export default ServicePage
