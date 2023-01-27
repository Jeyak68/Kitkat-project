import React, { Component } from "react";
import { Helmet } from 'react-helmet'
import Layout from "../components/shop-layout.js";
import Logo from '../images/lo.png';
import About from '../images/3.jpg';
import { Link } from 'gatsby';

class AboutPage extends Component {

    render() {

        return (
            <>
                <Helmet title="About_us - Dr. Laji Ba" />
                <Layout>
                <div class="banner_height d-block w-full background_image py-6">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
                    <h1 class="text-white text-4xl">About US</h1>
                    </div>
                </div>

                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center lg:text-left py-4">
                <Link to="/">
                    <div class="flex flex-col justify-center items-center pb-6">
                    <img
                      className="h-20 w-auto text-center"
                      src={Logo}
                      alt="Dr Laji Ba"
                    />
                    </div>
                  </Link>
                  
                    <p class="text-center text-lg pb-4">“I” Am The Genie, <span class="font-bold">Dr.LajiBa</span> Was Born On 23rd JAN 2014 (23.1.2014) From The Place Gobichettipalayam A Famous Mini Kodampakkam For The Kolly Wood Cinemas. My Birthday Was Grandly Celebrated Well With My Father And His Friends.</p>
                    <p class="text-center text-lg pb-4">My Founder Is A Basically An Allopathic & Ophthalmic Practitioner Named , Dr. S.Saravanakumar, Qualified As MBBS., MNAMS., DO., DNB., FCIP., Fellow Diabetes., He Is Very Much Fond Of Herbal Medicines Role In The Human Body Without Side Effects. He Will Talk About Me Now.</p>
              
                    <h3 class="font-medium text-center text-4xl py-4"> FOUNDER'S TALK</h3>
             
                    <p class="text-center text-lg pb-4">Dear Parents, Brothers And Sisters, Here I Would Like To Say Few Words About Genie @ <span class="font-bold">Dr.LajiBa</span>. I Am Proud To Introduce Genie <span class="font-bold">Dr.LajiBa</span>.</p>
                    <p class="text-center text-lg pb-4">Any Miracles To Happen In The World, There Is Only Two Possibilities. One Is Miracles Happen By The God, The Other Is, Miracles Happen By The Genie, A Novel Production By The God.</p>
                    <p class="text-center text-lg pb-4">Here Is The Genie @ <span class="font-bold">Dr.LajiBa</span> Produced By God And Given Birth To This World Of Well Being On 23rd JAN 2014. The Purpose Of <span class="font-bold">Dr.LajiBa</span> Birth Is To Make The World Of Well Being, By Making And Spreading Out The Wonderful 100% Herbal Medicated Products, So That, <span class="font-bold">Dr.LajiBa</span> Tries To Keep The World Of Well Being For The Existing & Upcoming Generation People. The Herbal Health Care Products Which Given By <span class="font-bold">Dr.LajiBa</span> Is Going To Make This World, Wonderful And Awesome.</p>
                    <p class="text-center text-lg pb-4">So, Please Use All The Herbal Health Care Products Of <span class="font-bold">Dr.LajiBa</span> And Observe The Wonderful Miracles Going To Happen Within You, And The Whole World Of Well Being.</p>
                
                    <p class="text-center text-lg pb-4"> The Miracles Are Going To Happen With In You And Your Family By <span class="font-bold">Dr.LajiBa</span>…..</p>
                    <p class="text-center text-lg pb-4"> Take Care And Enjoy The World Of Well Being By <span class="font-bold">Dr.LajiBa</span>… Thank You All Once Again.</p>
                    <p class="text-center text-lg pb-4"> GOD BLESS YOU ALL. Me And <span class="font-bold">Dr.LajiBa</span> Too BLESS YOU ALL For The Health Of Well Being. Many More Happy Returns Of The Day Ever</p>
                    <p class="text-center text-lg pb-4 font-bold"> LIVE LONG……… LIVE HAPPILY……….</p>
                </div>
                </Layout>
            </>
        )
    }
}

export default AboutPage
