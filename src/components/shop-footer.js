import React, { Component } from "react";
import { Link } from 'gatsby';
import Logo from '../images/lo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
    render() {
        return (

            <div class="footer_bg">
            <div class="max-w-7xl mx-auto px-2  sm:px-6 lg:px-8 text-center lg:text-left">
            <footer>
            <div class="grid grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-4 sm:grid-cols-1">
                <div>
                    <h2 class="mb-6 text-2xl font-semibold uppercase text_white">Aboutus</h2>
                        <p class="text-xl footer_text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                
                <div>
                    <h2 class="mb-6 text-2xl font-semibold uppercase text_white">TIMINGS</h2>
                        <p class="text-xl footer_text pb-1">Mon-Sat 9.30AM - 8PM</p>
                        <p class=" text-xl footer_text">Sun - 10AM - 1PM</p>
                </div>
                <div>
                    <h2 class="mb-6 text-2xl font-semibold uppercase text_white">ADDRESS</h2>
                    <div class="flex flex-row">
                        <div class="pr-4"><FontAwesomeIcon icon={faMap} className="text-white"/></div>
                        <div><p class="text-xl footer_text">DR Lajiba Aayush Polyclinic, 80/2 Cutcherry Street,Sathy Main Road, Gobichettipalayam, Erode.</p></div>
                        </div>
                </div>
                <div>
                <h2 class="mb-6 text-2xl font-semibold uppercase text_white">CONTACT US</h2>
                    <div class="flex flex-row pb-4">
                        <div class="pr-4"><FontAwesomeIcon icon={faPhone} className="text-white"/></div>
                        <div> <p class=" text-xl footer_text">+91 9842515552</p></div>
                        </div>
                        <p class=" text-xl footer_text pl-8 pb-4">+91 9842515552</p>
                        <div class="flex flex-row">
                        <div class="pr-4"><FontAwesomeIcon icon={faMailBulk} className="text-white"/></div>
                        <div> <p class=" text-xl footer_text">1drlajibacure@gmail.com</p></div>
                        </div>
                </div>
                
            </div>
            <div class="px-4 py-6 md:flex md:items-center md:justify-between">
                <span class="text-lg footer_text sm:text-center">&copy; Copyright {(new Date().getFullYear())}  Developed by Karthick.
                </span>
                <span class="text-lg footer_text sm:text-center">
                    <Link to="/">
                    <img
                      className="h-20 w-auto"
                      src={Logo}
                      alt="Dr Laji Ba"
                    />
                  </Link>
                </span>
            </div>
        </footer>
        </div>
        </div>
        )
    }
}

export default Footer;
