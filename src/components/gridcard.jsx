import React from "react";
import pit from "./img/image.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Gridcard = (value) => {
    console.log(value.value)
    console.log(value.value.eventname)
   
    return (
        <div className="w-[200px] h-[250px] border-2 m-2 bg-cover"
        style={{ 
            backgroundImage: `url(${value.value.eventimg})`,
            backgroundRepeat: 'no-repeat',

            
          }}>
            
            {/* <h1 className="font-bold text-3xl ml-[50px] mt-[190px] text-white">{value.value.eventname}</h1> */}
           
            

        </div>
        
    )
}

export default Gridcard;