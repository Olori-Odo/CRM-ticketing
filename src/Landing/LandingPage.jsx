import React from 'react'
import { Link } from 'react-router-dom'
import { FaStickyNote } from "react-icons/fa";
import { HiSpeakerphone } from 'react-icons/hi';
import { FaChartBar } from 'react-icons/fa6';
import crm from "../assets/images/7098132(1).jpg";
import Image from "../assets/images/Screenshot 2024-05-05 072301.png";
import "./Landing.css"
function LandingPage() {
  return (
    <>
       <div className='landing-container'>
                <div className='header'>
                    <h2>Diamond <span style={{ color: "#7f56d8" }}>CRM</span></h2>
                </div>

                <div className='navigation'>
                    <Link to="/products">Products</Link>
                    <Link to="/solutions">Solutions</Link>
                    <Link to="/companies">Companies</Link>
                    <Link to="/resources">Resources</Link>
                </div>

                <div className='buttons'>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/signup">
                        <button>Sign Up</button>
                    </Link>
                </div>
            </div>


            <aside>
                <div className='nin'>
                    <div className='assid'>
                        <h1>ALL <span style={{ color: "#7f56d8" }}>CRM</span> needs <br />solutions, simple <br />and modern</h1>
                        <p>An awesome & powerful software for your business,increase <br /> business revenue with enterprise grade links built to acquire <br /> and engage customers</p>
                    </div>
                    <div className='image'>
                        <img src={Image} alt="" id='imm' />
                    </div>

                </div>
            </aside>


            <section>

                <div className='con'>
                    <h1>Our <span style={{ color: "#7f56d8" }}>Platform</span> features</h1>
                    <p>Improving customer relationships, increasing efficiency, improving data <br />management, communication, and improving sales performance </p>
                </div>
                <div className='cont'>

                    <div className='card'>
                        <div className='card1'>
                            <FaStickyNote size={40} />

                            <hr />

                            <h2>Revenue forecasting</h2>
                            <p>Analyse your sales pipeline and individual sales forecast provided by your sales team. Evaluate the conversion rates at each stage of the sales process and assess the likelihood of closing deals.</p>
                        </div>
                    </div>



                    <div className='card'>
                        <div className='card1'>
                            <FaChartBar size={40} />

                            <hr />

                            <h2>Track Progress</h2>
                            <p>Analyze thecollected data to gain insights into your business performance. Look for trends, patterns and anomalies that may require attention. </p>
                        </div>
                    </div>



                    <div className='card'>
                        <div className='card1'>
                            <HiSpeakerphone size={40} />

                            <hr />

                            <h2>Daily Reporting</h2>
                            <p>Determine the key metrics that are essential for monitoring your business performance on a daily basis. These metrics can vary depending on your industry and business objectives.</p>
                        </div>
                    </div>



                </div>
            </section>



            <div className='content'>
                <div className='content1'>
                    <h2>Sync your <span style={{ color: "#7f56d8" }}>CRM</span> system <br /> for comfortable work</h2>
                    <p>The Platform can sync with any other platform or program and take <br /> data about customer, correspondence and contact which will <br /> help the user set up communication and customers easily</p>

                    <div className='buttonss'>
                        <Link to="/signup">
                            <button>Try for free</button>
                        </Link>
                    </div>
                </div>


                <nav className='imagecrm'>
                    <img src={crm} alt="" className='crmimage' />
                </nav>

            </div>


            <div className='ftn1'>
                <div className='ftn'>
                    <div className='ftn2'>
                        <h1>Make sales success <br />inevitable with <br />Diamond CRM system</h1>

                        <div className='btnn'>
                            <Link to={"/signup"}>
                                <button className='btt'>Try for free</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>



            <div className='rer'>
                <hr />


                <div className='grr'>
                    <div className='rere'>
                        <h2>Diamond <span style={{ color: "#7f56d8" }}>Crm</span></h2>
                        <p>The fastest and simple way to generate growing business solutions.</p>
                    </div>

                    <div className='prod'>
                        <ul>
                            <h2>Products</h2>
                            <Link>CRM</Link>
                            <Link>Pricing</Link>
                            <Link>Benefit</Link>
                            <Link>Features</Link>
                        </ul>

                        <ul>
                            <h2>Companies</h2>
                            <Link>About</Link>
                            <Link>Privacy Policy</Link>
                            <Link>Terms & Condition</Link>
                            <Link>Partners</Link>
                        </ul>

                        <ul>
                            <h2>Resources</h2>
                            <Link>Guide</Link>
                            <Link>Blog</Link>
                            <Link>Tools</Link>
                            <Link>Support</Link>
                        </ul>
                    </div>

                </div>

            </div>
        </>
  
  )
}

export default LandingPage
