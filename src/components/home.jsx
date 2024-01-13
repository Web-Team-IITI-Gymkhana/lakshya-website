import React from 'react';
import bg from "./Video/bgvideo.mp4"

const Home = () => {
    return (
        <div className='' >
            <video src={bg} autoPlay loop muted className='w-[100%] h-[100%] fit' />
            <div className=' absolute top-0 w-[100%] flex flex-col place-content-center items-center h-[270px] sm:h-[400px] md:h-[470px] lg:h-[800px]'>
                <div className='font-bold text-[80px] sm:text-[130px] md:text-[180px] lg:text-[250px] xl:text-[300px] text-white'>Lakshya</div>
                <div className='font-medium text-[15px] sm:text-[17px] sm:mt-[-40px] md:text-[24px] md:mt-[-60px] lg:text-[28px] lg:mt-[-90px] xl:text-[30px] xl:mt-[-100px]  mt-[-30px] text-white'>Never give up</div>
                <div className='font-medium text-[15px] mt-[-9px] sm:mt-[-5px] md:text-[24px] lg:text-[28px] xl:text-[30px] text-white'>Momentum is life</div>
            </div>

        </div>
    )
}

export default Home;



// {/* <div className='mx-auto border-2'
// >
// style={
//                 {
//                     width: "700px",
//                     height:"700px",
                
//                          backgroundImage: `url(${bar})`,
//                          backgroundRepeat: "no-repeat",
//                      backgroundSize: "100% 100%",
//                     }}
            
//             >
    
    


// </div> */}