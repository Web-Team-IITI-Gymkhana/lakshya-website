import React from 'react';
import bg from "./img/bg4.png"

const Banner =()=>{
    return (
        <div className='w-[80%] mx-auto'>
        <h1 className='text-3xl font-bold'>Our Vision</h1>
        <div>
            <div className='flex items-center justify-center my-3 flex-col lg:flex-row justify-between lg:mr-4 text-lg sm:text-xl '>
                <div className=' w-[100%] mb-8 lg:w-[40%]  lg:mr-4'>  
                    <div className='mb-6 '>
                    Encouraging participants to engage in physical activity and adopt a healthy lifestyle is often a primary goal. Sports fests provide a platform for individuals to showcase their athletic abilities and motivate others to participate in regular physical exercise.
                       </div>                 
                    <div className='mb-6 '>
                    Many sports fests involve team-based competitions, fostering a spirit of teamwork and collaboration. Participants learn the importance of working together towards a common goal, enhancing communication and interpersonal skills.
                    </div>
                    
                   
                    
                </div>
                <div className=' w-[100%] mb-8 lg:w-[40%]  lg:mr-4'>  
                    <div className='mb-6 '>
                    The sports fest is an opportunity to instill values such as fair play, respect for opponents, and adherence to the rules of the game. Emphasizing good sportsmanship contributes to a positive and enjoyable experience for all participants.</div>                 
                    <div className='mb-6 '>
                    Sports fests often bring together people from diverse backgrounds, promoting a sense of community. This can be within a school, workplace, or a larger community. Building a sense of camaraderie can contribute to a positive and supportive environment.
                    </div>
                    
                   
                    
                </div>
               
            </div>
            
        </div>
    </div>
    )
}

export default Banner;