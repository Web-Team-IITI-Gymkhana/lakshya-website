import React from 'react';
import image from "./img/sport-edit.png";
import schedule from "./pdf/sample.pdf";
// import { Link } from "react-scroll";

const AboutUs =()=>{
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-3xl font-bold'>About Us</h1>
            {/* <div className=" text-3xl font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl ">
                About Us</div> */}
            <div>
                <div className='flex items-center my-3 flex-col lg:flex-row justify-between'>
                    <div className=' w-[100%] mb-8 lg:w-[60%]  lg:mr-4 text-lg sm:text-xl '>  
                        <div className='mb-6 '>
                            Welcome to Lakshya, the annual sports extravaganza of the prestigious Indian Institute of Technology, Indore. Established with a vision to promote sportsmanship, unity, and healthy competition, Lakshya has been a cornerstone of the IIT Indore community since its inception.
                        </div>                 
                        <div className='mb-6 '>
                            At Lakshya, we believe in fostering a spirit of sportsmanship, teamwork, and excellence. Our mission is to provide a platform for athletes from across the nation to showcase their talent and compete at the highest level. Through a diverse range of sporting events, we aim to inspire a passion for sports and fitness, creating a holistic environment that nurtures both physical and mental well-being.
                        </div>
                        
                        <div className='flex justify-center lg:justify-start'>
                    <a href="https://forms.gle/jse25bUykvrQ2Fd26" target='blank'>
                        <button className='text-white my-3 mx-3 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-700 font-bold'>Register</button>
                    </a>
                    <a href={schedule} download="schedule.pdf">
                        <button className='text-white my-3 mx-3 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-700 font-bold'>Schedule</button>
                    </a>
                    {/* <Link 
                        to="contact_us"
                        smooth={true}>
                        <button className='text-white my-3 mx-3 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-700 font-bold'>Contact Us</button>
                    </Link> */}
                </div>
                        
                    </div>
                    <div className=''>
                        <img src={image} alt='Sports'/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AboutUs;