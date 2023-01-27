import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/eye-layout.js";
import Galucoma from '../images/galu.png';

class ServicePage extends Component {

    render() {

        return (
            <>
                <Helmet title="About_us - Dr. Laji Ba" />
                <Layout>
                <div class="banner_height d-block w-full eye-background_image py-6">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
                    <h1 class="text-white text-4xl">Services</h1>
                    </div>
                </div>

                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center lg:text-left py-4">
              <h3 class="font-medium text-center text-4xl py-4">GLAUCOMA</h3>

              <div class="flex flex-row">
                        
                <div class="basis-3/4">
                        <marquee class="text-2xl text-blue pb-4">WHAT IS GLAUCOMA ?</marquee>
                        <p class="text-lg pb-4"><span class="pl-8"> </span>Eye Hospital Is A Multi-Specialty Eye Hospital In The City Committed To Delivering High Quality Eye Care, Where Dr Has Worked Untiringly To Bring Together State-Of-The-Art Technology And Trained Experienced Personnel. Over The Years, Eye Hospital Has Expanded Into An Ultra-Modern Facility With A Full Array Of Subspecialty Clinics, Well Integrated Diagnostic, Imaging And Laser Systems, State-Of-The-Art Operation Theatres, Daycare Recovery Suites, Sophisticated Training. With Clinical Expertise And Sophistication Of Diagnostic And Treatment Procedures, Eye Hospital Serves The Needs Of Its Patients Across A Wide Spectrum Of Eye Disorders Related To Cornea, Retina, Pediatric Ophthalmology, Neuro Ophthalmology And Diabetic Eye Care. We Carry Out Advanced Eye Procedures Like ND-Yag Laser And Cold Phacoemulisification.</p>
                        <p>We Proud of: </p>
                            <ul class="pl-5 mt-2 space-y-1 list-decimal list-inside pl-4">
                              <li>Infrastructure</li>
                              <li>Our Technologies and Equipments</li>
                              <li>Standard Operation Theater</li>
                              <li>Our Experienced and Skilled Doctors</li>
                            </ul>
                          </div>
                          <div class="basis-1/4"><img
                            className="w-full h-full"
                            src={Galucoma}
                            alt="First slide"
                                /></div>
                      </div>
              </div>

                   
                </Layout>
            </>
        )
    }
}

export default ServicePage
