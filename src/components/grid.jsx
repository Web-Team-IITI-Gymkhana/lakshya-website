import React from "react";
import pit from "./img/image.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Grid = () => {
    const Images = [pit,pit,pit,pit,pit,pit,pit,pit,pit]
    return (
        <div className="w-[95%] lg:w-[80%] bg-gray-300 mx-auto my-5 rounded-md">
            <div className="my-5 p-10 text-4xl text-center">
                 Unleash the power of Sports
            </div>
            
            <div className="hidden md:grid md:grid-cols-3 md:gap-3 bg-gray-300 mx-auto my-5 -md ">
                
                {
                    Images.map((value,key) => 
                    <div className="w-[210px] h-[210px] mx-auto my-5 overflow-hidden" key={key} >
                        <img className=" object-cover" src={value}  />
                    </div>
                    )
                }
            </div>
            <Carousel className="bg-gray-300 mx-3 my-3 rounded-md md:hidden" autoPlay infiniteLoop centerMode>
            {
                    Images.map((value,key) => 
                    <div className="w-[230px] h-[230px] mx-auto my-5 overflow-hidden" key={key} >
                        <img className=" object-cover" src={value}  />
                    </div>
                    )
                }

            </Carousel>

        </div>
        
    )
}

export default Grid;