import React from "react";
import {FaYoutube,FaLinkedin,FaInstagram,FaFacebook} from 'react-icons/fa'

const Footer = () => {
    return (
      <div className="px-4 pt-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8 bg-black text-white">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Lakshya"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-white"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                Lakshya
              </span>
            </a>
            <div className="mt-6 lg:max-w-md">
              <p className="text-sm text-white">
              Sports wagering demeans the competition and competitors alike by a message that is contrary to the purposes and meaning of “sport.”
              </p>
              <p className="mt-4 text-sm text-white">
              Sports competition should be appreciated for the inherent benefits related to participation of student-athletes, coaches and institutions in fair contests, not the amount of money wagered on the outcome of the competition.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-white">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-white hover:text-white"
              >
                850-123-5021
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-white">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-white hover:text-white"
              >
                lakshya@iiti.ac.in
              </a>
            </div>
            <div className="flex">
              
              <a
                href="https://www.google.com/maps/place/Indian+Institute+of+Technology+Indore/@22.5203792,75.9104448,15z/data=!3m1!4b1!4m6!3m5!1s0x3962efcccbce7145:0x784e8cb69818596b!8m2!3d22.5203597!4d75.9207231!16s%2Fm%2F04yf6vy?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-white hover:text-white"
              >
                Indian Institute of Technology Indore,Khandwa Rd, Simrol, Indore,Madhya Pradesh, India-453552
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-white">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">

              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-white"
              >
                <FaYoutube/>
              </a>
              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-white"
              >
                <FaLinkedin/>
              </a>
              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-white"
              >
                <FaInstagram/>
              </a>
              <a
                href="/"
                className="text-white transition-colors duration-300 hover:text-white"
              >
                <FaFacebook/>
              </a>
              
            </div>
            <p className="mt-4 text-sm text-white">
              Connect with us with the help of social media.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-white">
            © Copyright 2023 Lakshya IIT Indore. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-white transition-colors duration-300 hover:text-white"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-white transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-white transition-colors duration-300 hover:text-white"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

export default Footer;

