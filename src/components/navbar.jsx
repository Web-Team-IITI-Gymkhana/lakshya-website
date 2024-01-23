import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Link } from "react-scroll";
import schedule from "./pdf/sample.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="top-0 fixed bg-[#16171c] text-white w-[100%] z-10">
      <div className="justify-between lg:items-center font-bold flex">
        <div className="hidden justify-between items-center font-bold lg:flex">
          <div className="flex">
            <Link
              to="home"
              smooth={true}
              className="p-2 m-2 hover:cursor-pointer ml-5 hover:border-b-2"
            >
              Home
            </Link>
            <Link
              to="about_us"
              smooth={true}
              className="p-2 m-2 hover:cursor-pointer hover:border-b-2"
            >
              About Us
            </Link>
            <Link
              to="sports"
              smooth={true}
              className="p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2"
            >
              Sports
            </Link>
            <Link
              to="our_vision"
              smooth={true}
              className="p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2"
            >
              Our Vision
            </Link>
            <Link
              to="faqs"
              smooth={true}
              className="p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2"
            >
              FAQs
            </Link>
            <Link
              to="contact_us"
              smooth={true}
              className="p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2"
            >
              Contact Us
            </Link>
            <a href={schedule} download="schedule.pdf" className="p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2">Schedule</a>
            <a className="p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2 text-gray-500">Result</a>
          </div>
        </div>
        <div>
          <div onClick={handleNav} className="sm:flex lg:hidden">
            {nav ? (
              <AiOutlineClose className="mt-2 ml-2 mb-2" size={25} />
            ) : (
              <AiOutlineMenu className="mt-2 ml-2 mb-2" size={25} />
            )}
          </div>
          <div
            className={
              nav
                ? "flex justify-between font-bold lg:hidden flex-col"
                : "hidden"
            }
          >
            
              <ul className="flex-col">
                <li>
                  <Link
                    to="home"
                    onClick={handleNav}
                    smooth={true}
                    className="m-7 hover:cursor-pointer hover:border-b-2"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about_us"
                    onClick={handleNav}
                    smooth={true}
                    className="m-7 hover:cursor-pointer hover:border-b-2"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="sports"
                    onClick={handleNav}
                    smooth={true}
                    className="m-7 hover:cursor-pointer hover:border-b-2"
                  >
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    to="our_vision"
                    onClick={handleNav}
                    smooth={true}
                    className="m-7 hover:cursor-pointer hover:border-b-2 "
                  >
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link
                    to="faqs"
                    onClick={handleNav}
                    smooth={true}
                    className="m-7 hover:cursor-pointer hover:border-b-2"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact_us"
                    onClick={handleNav}
                    smooth={true}
                    className="m-7 hover:cursor-pointer hover:border-b-2 "
                  >
                    Contact Us
                  </Link>
                  
                </li>
                <li>
                <a href={schedule} download="schedule.pdf" className="m-7 hover:cursor-pointer hover:border-b-2 ">Schedule</a>
                </li>
                <li>
                <a className="m-7  hover:cursor-pointer hover:border-b-2 text-gray-500">Result</a>
                </li>
              </ul>
        
          </div>
        </div>

        {/* <a href="https://unstop.com/college-fests/lakshya-20-indian-institute-of-technology-iit-indore-147447" target="_blank">
                <button className='text-white  mr-6 px-3 m-3 rounded-2xl bg-blue-500 hover:bg-blue-700 font-bold '>Register</button>
                </a> */}
      </div>
    </div>
  );
};

export default Navbar;
