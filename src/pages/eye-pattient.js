import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/eye-layout.js";
import Galucoma from '../images/galu.png';

class PatientPage extends Component {

    render() {

        return (
            <>
                <Helmet title="About_us - Dr. Laji Ba" />
                <Layout>
                <div class="banner_height d-block w-full eye-background_image py-6">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
                    <h1 class="text-white text-4xl">Patient Info</h1>
                    </div>
                </div>

                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center lg:text-left py-4">
              <h3 class="font-medium text-center text-4xl py-4 text-blue">EYE DISEASES AND CONDITIONS</h3>
              <marquee class="text-2xl text-blue pb-4">WHAT IS GLAUCOMA ?</marquee>
              <div class="pb-4">
              <h1 class="text-2xl font-bold">Allergies</h1>
              <p><span class="pl-6 text-lg"></span> Eye Allergies Are A Condition When The Eyes React To An Irritant Or Allergen, Making Them Red, Itchy, Tearful And Swollen.</p>
              </div>
              <div class="pb-4">
              <h1 class="text-2xl font-bold">Cataracts</h1>
              <p><span class="pl-6 text-lg"></span> Cataract Is A Clouding Of The Eye’s Normally Clear Lens, Causing Vision Problems.</p>
              </div>
              <div class="pb-4">
              <h1 class="text-2xl font-bold">Color Blindness</h1>
              <p><span class="pl-6 text-lg"></span> Color Blindness Occurs When You Are Unable To See Colors In A Normal Way. Most Commonly, Color Blindness Happens When Someone Cannot Distinguish Between Certain Colors, Usually Between Greens And Reds, And Occasionally Blues.</p>
              </div>
              <div class="pb-4">
              <h1 class="text-2xl font-bold">Dry Eye</h1>
              <p><span class="pl-6 text-lg"></span>Dry Eye Is A Condition Where The Eyes Don’t Produce Enough Tears Or The Right Quality Of Tears To Be Healthy Or Comfortable.</p>
              </div>
              <div class="pb-4">
              <h1 class="text-2xl font-bold">Glaucoma</h1>
              <p><span class="pl-6 text-lg"></span>Glaucoma Is A Disease That Damages The Eye’s Optic Nerve. Read More…</p>
              </div>
              <div class="pb-4">
              <h1 class="text-2xl font-bold">Keratitis</h1>
              <p><span class="pl-6 text-lg"></span>Keratitis Is A Condition Where The Cornea Becomes Swollen Or Inflamed, Making The Eye Red And Painful And Affecting Vision.</p>
              </div>
              <div class="pb-4">
              <h1 class="text-2xl font-bold">Low Vision</h1>
              <p><span class="pl-6 text-lg"></span>Low Vision Is A Loss Of Eyesight That Makes Everyday Tasks Difficult Or Impossible, Affecting Central And/Or Peripheral (Side) Vision. Low Vision Cannot Be Improved With Regular Eyeglasses, Medicine Or Surgery.</p>
              </div>
              <div class="pb-4">
              <h1 class="text-2xl font-bold">Vitamin A Deficiency</h1>
              <p><span class="pl-6 text-lg"></span> A Lack Of Access To A Balanced Diet With Enough Vitamin A Can Lead To Vitamin A Deficiency. Vitamin A Deficiency Is The Leading Cause Of Preventable Blindness In Children Worldwide.</p>
              </div>
              </div>

                   
                </Layout>
            </>
        )
    }
}

export default PatientPage
