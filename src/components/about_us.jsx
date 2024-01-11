import React from 'react';
import image from "./img/sport-edit.png";

const AboutUs =()=>{
    return (
        <div className='w-[80%] mx-auto my-24'>
            <h1 className='text-3xl font-bold'>About Us</h1>
            <div>
                <div className='flex items-center justify-center my-3 flex-col lg:flex-row justify-between'>
                    <div className=' w-[100%] mb-8 lg:w-[60%]  lg:mr-4'>  
                        <div className='mb-6 text-lg'>
                            Welcome to Lakshya, the annual sports extravaganza of the prestigious Indian Institute of Technology, Indore. Established with a vision to promote sportsmanship, unity, and healthy competition, Lakshya has been a cornerstone of the IIT Indore community since its inception.
                        </div>                 
                        <div className='mb-6 text-lg'>
                            At Lakshya, we believe in fostering a spirit of sportsmanship, teamwork, and excellence. Our mission is to provide a platform for athletes from across the nation to showcase their talent and compete at the highest level. Through a diverse range of sporting events, we aim to inspire a passion for sports and fitness, creating a holistic environment that nurtures both physical and mental well-being.
                        </div>
                        
                        <div className='flex justify-center lg:justify-start'>
                    <button className='text-white my-3 mx-3 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-700 font-bold'>Register</button>
                    <button className='text-white my-3 mx-3 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-700 font-bold'>Contact Us</button>
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