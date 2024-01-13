import React from "react";
// import pit from "./img/image.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const Gridcard = (value) => {
    // console.log(value.value)
    // console.log(value.value.eventname)
   
    return (
        <div className="w-[200px] h-[250px] hover:cursor-pointer m-2 bg-cover"
        style={{ 
            backgroundImage: `url(${value.value.eventimg})`,
            backgroundRepeat: 'no-repeat',

            
          }}>
            
           
            

        </div>
        
    )
}

export default Gridcard;