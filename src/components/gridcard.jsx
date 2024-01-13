import React from "react";
// import pit from "./img/image.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const Gridcard = (value) => {
    // console.log(value.value)
    // console.log(value.value.eventname)
   
    return (
        <a href={value.value.eventurl} target="blank">
            <div className="w-[20vh] h-[25vh] md:w-[25vh] md:h-[30vh] border-2 m-2 mb-6 bg-cover"
            style={{ 
                backgroundImage: `url(${value.value.eventimg})`,
                backgroundRepeat: 'no-repeat',
            }}>
                {/* {value.value.eventname} */}
            </div>
        </a>
        
    )
}

export default Gridcard;