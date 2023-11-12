import React from "react";
import pit from "./img/image.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Gridcard from './gridcard';
import criimg from './img/cricket.jpeg';
const Grid = () => {
    const Images = [
        {
            eventname: "Cricket",
            eventimg: criimg,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Cricket",
            eventimg: criimg,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Cricket",
            eventimg: criimg,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Cricket",
            eventimg: criimg,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Cricket",
            eventimg: criimg,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Cricket",
            eventimg: criimg,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Cricket",
            eventimg: criimg,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Cricket",
            eventimg: criimg,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Cricket",
            eventimg: criimg,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Cricket",
            eventimg: criimg,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Cricket",
            eventimg: criimg,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Cricket",
            eventimg: criimg,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        
    ];
    return (
        <div className="w-[90%] lg:w-[80%] bg-[#f7f7f7] mx-auto my-5 p-5 rounded-md">
            <div className=" text-3xl font-bold p-7 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
                 Unleash the power of Sports
            </div>
            
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    mx-auto  ">
                {Images.map((data) => (
            <div className="mx-auto "><a href={data.eventurl} target="_blank"><Gridcard value={data}/></a></div>
                ))}
                
                
            </div>
            

        </div>
        
    )
}

export default Grid;