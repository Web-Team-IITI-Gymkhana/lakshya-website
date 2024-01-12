import React from "react";
import pit from "./img/image.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Gridcard from './gridcard';
import criimg from './img/cricket.jpeg';
import {cricket,basketball,lawnTennis,chess,tableTennis,football,swimming,squash,vollyball,badminton,prizepool,back} from './img/images/Image'
const Grid = () => {
    const Images = [
        {
            eventname: "Cricket",
            eventimg: cricket,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Basketball",
            eventimg: basketball,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Lawn Tennis",
            eventimg: lawnTennis,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Chess",
            eventimg: chess,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Table Tennis",
            eventimg: tableTennis,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Football",
            eventimg: football,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Swimming",
            eventimg: swimming,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Squash",
            eventimg: squash,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Vollyball",
            eventimg: vollyball,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        {
            eventname: "Badminton",
            eventimg: badminton,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        },
        // {
        //     eventname: "Prizepool",
        //     eventimg: prizepool,
        //     eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        // },
        // {
        //     eventname: "Cricket",
        //     eventimg: back,
        //     eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
        // },
        
    ];
    return (
        <div className="w-[90%] lg:w-[80%] bg-[#f7f7f7] mx-auto p-5 rounded-md ">
            <div className=" text-3xl font-bold p-7   text-center">
                 Unleash the Power of Sports
            </div>
            
            <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5    mx-auto  ">
                {Images.map((data) => (
            // <div className="mx-auto "><a href={data.eventurl} target="_blank"><Gridcard value={data}/></a></div>
            <div className="mx-auto "><Gridcard value={data}/></div>
                ))}
                
                
            </div>
            

        </div>
        
    )
}

export default Grid;