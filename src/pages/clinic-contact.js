import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/clinic-layout.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobe, faHome } from "@fortawesome/free-solid-svg-icons";
import Contact from '../images/3.jpg';

class ContactPage extends Component {

    render() {

        return (
            <>
               <Helmet title="Gallery - Dr. Laji Ba" />
                <Layout>
                <div class="banner_height d-block w-full background_image py-6">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
                    <h1 class="text-white text-4xl">Contact US</h1>
                    </div>
                    </div>
                    <h3 class="font-medium text-center text-4xl py-4"> Location</h3>

                    <div class="w-auto py-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11461.035636680957!2d78.45440346957405!3d9.356882605415061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0112cb7e67c07b%3A0xba569ba28ff1c0b1!2sPeriyandavar%20Temple!5e0!3m2!1sen!2sin!4v1653556911602!5m2!1sen!2sin" width="100%" height="420" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
                    
                    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
                    <div class="pb-8">
                            <h3 class="font-medium text-center text-4xl" style={{ textShadow: `1px 1px 2px black` }}> Contact Form</h3>
                        </div>
                    <div class="grid md:grid-cols-1 lg:grid-cols-2 pb-4">
                    <form class="w-full max-w-lg">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Mobile Number
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="mobilenumber" type="text"/>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Message
                                </label>
                                <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                                </div>
                            </div>
                            <div class="md:flex md:items-center">
                                <div class="md:w-1/3">
                                <button class="shadow bg-blue-500 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Send  
                                </button>
                                </div>
                                <div class="md:w-2/3"></div>
                            </div>
                            </form>
                            <div>
                            <img
                                className="d-block w-full"
                                src={Contact}
                                alt="Second slide"
                            />
                            </div>
                            </div>
</div>
                    </div>
                </Layout>
            </>
        )
    }
}

export default ContactPage
