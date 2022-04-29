import React from 'react'
import './styles.css'

// Startups Image Assets
import unawa from './assets/unawa.png'
import splore from './assets/splore.png'
import mayani from './assets/mayani.png'
import eskwelabs from './assets/eskwelabs.png'
import datacamp from './assets/datacamp.png'
import gs from './assets/gs.png'

// Startups Icons
import fb from './assets/FB.svg'
import ig from './assets/Instagram.svg'
import linkedin from './assets/LinkedIn.svg'
import website from './assets/Website.svg'

export default function Startups(){
    return (
        <div className="startups__container" id="startups">
            <div className='startups_details'>
                <h1 className='startups__title startups'>STARTUPS</h1>
                <p className="startups__subtitle">Check out the startups that joined us in this year's Startup Summit!</p>
            </div>
            <div className="startups__wrapper">
                <div className="startups__image-wrapper">
                    <img src={splore} alt="Splore Logo" />
                </div>
                <div className="startups__content-wrapper">
                    <div className="startups__content-heading">
                        <h1 className="startupname black-text">SPLORE</h1>
                        <div className="startups__header-right">
                            <p className="expertise black-text">Field of Expertise</p>
                            <div id="blue"> Health Tech</div>
                        </div>
                    </div>
                    <h2 className="aboutus black-text">About Us</h2>
                    <p className="regular black-text">Splore is a wellness marketplace that envisions a world where fitness and health are both accessible and attainable, especially in our developing country that perceives such a lifestyle as a luxury.</p>
                    <div className="startups__icons">
                        <div className="socials">
                            <img src={linkedin} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                             /splorefitness
                            </p>
                        </div>
                        <div className="socials">
                            <img src={fb} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            /splore.fitness
                            </p>
                        </div>
                        <div className="socials">
                            <img src={ig} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            @splorefitness
                            </p>
                        </div>
                        <div className="socials">
                            <img src={website} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            www.splorefitness.com
                            </p>
                        </div>
                    </div>
                    <h2 className="startups__title startups black-text">JOB OFFERINGS:</h2>
                    <div className="intern__wrapper">
                        <div className="intern__content">
                            <h3 className="intern-title black-text">EMAIL MARKETING INTERN</h3>
                            <div className="intern-details">
                                <p className="commitment black-text">Commitment Level</p>
                                <div id="orange">Internship Opportunity</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Field of Expertise:</p>
                                <div id="blue">Email Marketing</div>
                            </div>

                            <div className="intern-details">
                                <p className="commitment black-text">Quantity of Opportunities Offered:</p>
                                <div id="intern-text">1</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Responsibilities:</p>
                                <div id="intern-text">Email Marketing</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Requirements:</p>
                                <div id="intern-text">Experience in email marketing</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Additional Details (ex. salary/incentive):</p>
                                <div id="intern-text">To be discussed in the interview</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Application Process:</p>
                                <div id="intern-text">Email me at alby@splorefitness.com detailing interest about the opportunity with attached CV</div>
                            </div>                             

                        </div>
                        <div className="intern__content">
                            <h3 className="intern-title black-text">EMAIL MARKETING INTERN</h3>
                            <div className="intern-details">
                                <p className="commitment black-text">Commitment Level</p>
                                <div id="orange">Internship Opportunity</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Field of Expertise:</p>
                                <div id="blue">Email Marketing</div>
                            </div>

                            <div className="intern-details">
                                <p className="commitment black-text">Quantity of Opportunities Offered:</p>
                                <div id="intern-text">1</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Responsibilities:</p>
                                <div id="intern-text">Email Marketing</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Requirements:</p>
                                <div id="intern-text">Experience in email marketing</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Additional Details (ex. salary/incentive):</p>
                                <div id="intern-text">To be discussed in the interview</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Application Process:</p>
                                <div id="intern-text">Email me at alby@splorefitness.com detailing interest about the opportunity with attached CV</div>
                            </div>                             

                        </div>
                    </div>
                </div>
                
            </div>

            <div className="startups__wrapper below">
                <div className="startups__image-wrapper">
                    <img src={unawa} alt="Unawa Logo" />
                </div>
                <div className="startups__content-wrapper">
                    <div className="startups__content-heading">
                        <h1 className="startupname black-text">UNAWA</h1>
                        <div className="startups__header-right">
                            <p className="expertise black-text">Field of Expertise</p>
                            <div id="blue">Law Tech</div>
                        </div>
                    </div>
                    <h2 className="aboutus black-text">About Us</h2>
                    <p className="regular black-text">UNAWA offers the simplest and most convenient way to digitize key transactions through the Digital Transaction Hub. Through this suite of comprehensive solutions, companies and organizations will have what they need to transact digitally and seamlessly so they can close deals and realize revenue faster and more efficiently. The Digital Transaction Hub is composed of UNAWA SignSecure, UNAWA SafeForm and UNAWA RNotary.</p>
                    <div className="startups__icons">
                        <div className="socials">
                            <img src={linkedin} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            /unawa
                            </p>
                        </div>
                        <div className="socials">
                            <img src={fb} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            /unawa.asia
                            </p>
                        </div>
                        <div className="socials">
                            <img src={website} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            unawa.asia
                            </p>
                        </div>
                    </div>
                    <h2 className="startups__title startups black-text">JOB OFFERINGS:</h2>
                    <div className="intern__wrapper">
                        <div className="intern__content">
                            <h3 className="intern-title black-text">SOFTWARE DEVELOPMENT INTERN</h3>
                            <div className="intern-details">
                                <p className="commitment black-text">Commitment Level</p>
                                <div id="orange">Internship Opportunity</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Field of Expertise:</p>
                                <div id="blue">Software Development</div>
                            </div>

                            <div className="intern-details">
                                <p className="commitment black-text">Quantity of Opportunities Offered:</p>
                                <div id="intern-text">1</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Responsibilities:</p>
                                <div id="intern-text">Quality tests and code documentation</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Requirements:</p>
                                <div id="intern-text">Software development background</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Additional Details (ex. salary/incentive):</p>
                                <div id="intern-text">TBA</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Application Process:</p>
                                <div id="intern-text">Email hr@unawa.asia</div>
                            </div>                             
                        </div>
                        <div className="intern__content">
                            <h3 className="intern-title black-text">UI/UX GRAPHIC DESIGN INTERN</h3>
                            <div className="intern-details">
                                <p className="commitment black-text">Commitment Level</p>
                                <div id="orange">Internship Opportunity</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Field of Expertise:</p>
                                <div id="blue">UI/UX Intern</div>
                                <div id="blue">Graphic Design Intern</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Quantity of Opportunities Offered:</p>
                                <div id="intern-text">1</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Responsibilities:</p>
                                <div id="intern-text">Assist Product Designer</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Requirements:</p>
                                <div id="intern-text">Design background</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Additional Details (ex. salary/incentive):</p>
                                <div id="intern-text">TBD</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Application Process:</p>
                                <div id="intern-text">Email hr@unawa.asia</div>
                            </div>                             

                        </div>
                    </div>
                </div>
                
            </div>

            <div className="startups__wrapper below">
                <div className="startups__image-wrapper">
                    <img src={datacamp} alt="Datacamp Logo" />
                </div>
                <div className="startups__content-wrapper">
                    <div className="startups__content-heading">
                        <h1 className="startupname black-text">DATACAMP</h1>
                        <div className="startups__header-right">
                            <p className="expertise black-text">Field of Expertise</p>
                            <div className="marg"id="blue">Edu Tech</div>
                            <div id="blue">Data Science</div>
                        </div>
                    </div>
                    <h2 className="aboutus black-text">About Us</h2>
                    <p className="regular black-text">DataCamp provides flexible online data training for every role, from non-coding essentials for business to data science and machine learning, all taught by leading experts in the field. Best of all, there’s no installation or download required—all learning and interactive exercises run in your browser. That means you can grow your skills through hands-on exercises, anytime, anywhere. </p>
                    <div className="startups__icons">
                        <div className="socials">
                            <img src={linkedin} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            /datacampinc
                            </p>
                        </div>
                        <div className="socials">
                            <img src={fb} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            /datacampinc
                            </p>
                        </div>
                        <div className="socials">
                            <img src={ig} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            @datacamp
                            </p>
                        </div>
                        <div className="socials">
                            <img src={website} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            /www.datacamp.com
                            </p>
                        </div>
                    </div>
                    <h2 className="startups__title startups black-text">JOB OFFERINGS:</h2>
                    <div className="intern__wrapper">
                        <div className="intern__content">
                            <h3 className="intern-title black-text">MARKETING AND OPERATIONS INTERN</h3>
                            <div className="intern-details">
                                <p className="commitment black-text">Commitment Level</p>
                                <div id="orange">Internship Opportunity</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Field of Expertise:</p>
                                <div id="blue">Software Development</div>
                            </div>

                            <div className="intern-details">
                                <p className="commitment black-text">Quantity of Opportunities Offered:</p>
                                <div id="intern-text">1</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Responsibilities:</p>
                                <div id="intern-text">TBA</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Requirements:</p>
                                <div id="intern-text">TBA</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Additional Details (ex. salary/incentive):</p>
                                <div id="intern-text">TBA</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Application Process:</p>
                                <div id="intern-text">TBA</div>
                            </div>                             
                        </div>
                        <div className="intern__content">
                            <h3 className="intern-title black-text">MEDIA AND COMMUNICATIONS INTERN</h3>
                            <div className="intern-details">
                                <p className="commitment black-text">Commitment Level</p>
                                <div id="orange">Internship Opportunity</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Field of Expertise:</p>
                                <div id="blue">TBA</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Quantity of Opportunities Offered:</p>
                                <div id="intern-text">TBA</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Responsibilities:</p>
                                <div id="intern-text">TBA</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Requirements:</p>
                                <div id="intern-text">TBA</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Additional Details (ex. salary/incentive):</p>
                                <div id="intern-text">TBA</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Application Process:</p>
                                <div id="intern-text">TBA</div>
                            </div>                             

                        </div>
                    </div>
                </div>
                
            </div>

            <div className="startups__wrapper below">
                <div className="startups__image-wrapper">
                    <img src={mayani} alt="Mayani Logo" />
                </div>
                <div className="startups__content-wrapper">
                    <div className="startups__content-heading">
                        <h1 className="startupname black-text">MAYANI</h1>
                        <div className="startups__header-right">
                            <p className="expertise black-text">Field of Expertise</p>
                            <div id="blue">Farm to Table</div>
                        </div>
                    </div>
                    <h2 className="aboutus black-text">About Us</h2>
                    <p className="regular black-text">The Philippines' fastest-growing farm-to-table platform with over 70,000+ farmers, 11,000+ B2C customers, and a solid B2B portfolio including the likes of Shell, Robinsons,WalterMart, Kopiko, Healthy Options, UCC Group, Caritas Manila, Amici, and Cara Mia, among others. We are an agritech startup empowering local farmers and fisherfolk through tech to uplift the lives of over 10 million smallholder farmers in the Philippines</p>
                    <div className="startups__icons">
                        <div className="socials">
                            <img src={linkedin} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            /mayani
                            </p>
                        </div>
                        <div className="socials">
                            <img src={fb} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            /mayaniph
                            </p>
                        </div>
                        <div className="socials">
                            <img src={ig} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            @mayaniph
                            </p>
                        </div>
                        <div className="socials">
                            <img src={website} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            www.mayani.ph
                            </p>
                        </div>
                    </div>
                    <h2 className="startups__title startups black-text">JOB OFFERINGS:</h2>
                    <div className="intern__wrapper">
                        <div className="intern__content">
                            <h3 className="intern-title black-text">MARKETING INTERN</h3>
                            <div className="intern-details">
                                <p className="commitment black-text">Commitment Level</p>
                                <div id="orange">Internship Opportunity</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Field of Expertise:</p>
                                <div id="blue">Marketing</div>
                            </div>

                            <div className="intern-details">
                                <p className="commitment black-text">Quantity of Opportunities Offered:</p>
                                <div id="intern-text">5</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Responsibilities:</p>
                                <div id="intern-text">Support our campaigns and commercial team</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Requirements:</p>
                                <div id="intern-text">Passion for impact and e-commerce</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Additional Details (ex. salary/incentive):</p>
                                <div id="intern-text">Stipend/allowance</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Application Process:</p>
                                <div id="intern-text">Send CV then interview</div>
                            </div>                             
                        </div>
                        <div className="intern__content">
                            <h3 className="intern-title black-text">BUSINESS DEVELOPMENT INTERN</h3>
                            <div className="intern-details">
                                <p className="commitment black-text">Commitment Level</p>
                                <div id="orange">Internship Opportunity</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Field of Expertise:</p>
                                <div id="blue">External Relations</div>
                                <div id="blue">Communication</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Quantity of Opportunities Offered:</p>
                                <div id="intern-text">5</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Responsibilities:</p>
                                <div id="intern-text">Assist BD Head in pursuing commercial opportunities</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Requirements:</p>
                                <div id="intern-text">Passion for impact and partnerships</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Additional Details (ex. salary/incentive):</p>
                                <div id="intern-text">Stipend/allowance</div>
                            </div>
                            <div className="intern-details">
                                <p className="commitment black-text">Application Process:</p>
                                <div id="intern-text">Send CV then interview</div>
                            </div>                             
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="startups__wrapper below">
                <div className="startups__image-wrapper">
                    <img src={eskwelabs} alt="Eskwelabs Logo" />
                </div>
                <div className="startups__content-wrapper">
                    <div className="startups__content-heading">
                        <h1 className="startupname black-text">ESKWELABS</h1>
                        <div className="startups__header-right">
                            <p className="expertise black-text">Field of Expertise</p>
                            <div className="marg" id="blue">Edu Tech</div>                       
                            <div id="blue">Data Science</div>
                        </div>
                    </div>
                    <h2 className="aboutus black-text">About Us</h2>
                    <p className="regular black-text">Eskwelabs is an online data upskilling school in the Philippines with the mission of driving social mobility in the future of work through data skills education. Founded in 2019, Eskwelabs focuses on active, online, and cohort-based learning in data science, analytics, and data literacy. Eskwelabs' pedagogy is recognized internationally and awarded by the Asian Development Bank as a winning solution for the “Digital Skills for Today's Workforce” challenge. The co-founders of Eskwelabs are also recognized by Forbes as 30 Under 30 Social Entrepreneurs in Asia.</p>
                    <div className="startups__icons">
                        <div className="socials">
                            <img src={linkedin} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            /eskwelabs
                            </p>
                        </div>
                        <div className="socials">
                            <img src={fb} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            /eskwelabs
                            </p>
                        </div>
                        <div className="socials">
                            <img src={ig} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            @eskwelabs_ph
                            </p>
                        </div>
                        <div className="socials">
                            <img src={website} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            www.eskwelabs.com
                            </p>
                        </div>
                    </div>
                    <h2 className="startups__title startups black-text">LEARN MORE ABOUT THEIR OPPORTUNITIES HERE:</h2>
                    <div className="intern__wrapper">
                        <div className="intern__content">
                            <div className="intern-details">
                                <a href="http://careers.eskwelabs.com/" id="intern-cta"target="_blank" rel="noreferrer">HTTP://CAREERS.ESKWELABS.COM</a>
                            </div>                             
                        </div>
                    </div>
                </div>
            </div>

            <div className="startups__wrapper below">
                <div className="startups__image-wrapper">
                    <img src={gs} alt="growsari Logo" />
                </div>
                <div className="startups__content-wrapper">
                    <div className="startups__content-heading">
                        <h1 className="startupname black-text">GROWSARI</h1>
                        <div className="startups__header-right">
                            <p className="expertise black-text">Field of Expertise</p>
                            <div className="marg" id="blue">FMCG</div>                       
                            <div id="blue">Business to Business</div>
                        </div>
                    </div>
                    <h2 className="aboutus black-text">About Us</h2>
                    <p className="regular black-text">GrowSari is a tech-enabled B2B platform that helps the Philippines’ over one million sari-sari stores and other retail outlets like canteens, market stalls, etc. get better service level, assortment, and access to new services, outfitting them with both the infrastructure and tools they need to transform themselves from simple neighbourhood outlets to comprehensive service hubs with a wide assortment of affordable products, e-services and credit facilities.</p>
                    <div className="startups__icons">
                        <div className="socials">
                            <img src={linkedin} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            /growsari
                            </p>
                        </div>
                        <div className="socials">
                            <img src={fb} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            /growsari
                            </p>
                        </div>
                        <div className="socials">
                            <img src={website} alt="social-media-icon" />
                            <p className="social-media-text black-text">
                            www.growsari.com
                            </p>
                        </div>
                    </div>
                    <h2 className="startups__title startups black-text">LEARN MORE ABOUT THEIR OPPORTUNITIES HERE:</h2>
                    <div className="intern__wrapper">
                        <div className="intern__content">
                            <div className="intern-details">
                                <a href="https://tinyurl.com/Growsari2022Opportunities" id="intern-cta"target="_blank" rel="noreferrer">https://tinyurl.com/Growsari2022Opportunities</a>
                            </div>                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}