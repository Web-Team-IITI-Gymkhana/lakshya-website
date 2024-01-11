import React,{useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll';

const Navbar =()=>{
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
    return (
        <div className='top-0 fixed bg-[#16171c] text-white w-[100%] z-10'>
            <div className='justify-between lg:items-center font-bold flex'>
                <div className='hidden justify-between items-center font-bold lg:flex'>
                    <div className='flex'>
                        <Link to="home" smooth={true} className='p-2 m-2 hover:cursor-pointer ml-5 hover:border-b-2'>Home</Link>
                        <Link to="about_us" smooth={true} className='p-2 m-2 hover:cursor-pointer hover:border-b-2'>About Us</Link>
                        <Link to="sports" smooth={true} className='p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2'>Sports</Link>
                        <Link to="our_vision" smooth={true} className='p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2'>Our Vision</Link>
                        <Link to="faqs" smooth={true} className='p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2'>FAQs</Link>
                        <Link to="contact_us" smooth={true} className='p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2'>Contact Us</Link>
                    </div>
                </div>
                <div>
                    <div onClick={handleNav} className='sm:flex lg:hidden'>
                        {nav ? <AiOutlineClose className='mt-2 ml-2' size={25}/> : <AiOutlineMenu className='mt-2 ml-2' size={25}/>}
                    </div>
                    <div className={nav ? 'flex justify-between font-bold lg:hidden flex-col' : 'hidden'}>
                        <div className='flex-col'>
                            <Link to="home" smooth={true} className='p-2 m-2 hover:cursor-pointer hover:border-b-2'>Home</Link>
                            <Link to="about_us" smooth={true} className='p-2 m-2 hover:cursor-pointer hover:border-b-2'>About Us</Link>
                            <Link to="sports" smooth={true} className='p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2'>Sports</Link>
                            <Link to="our_vision" smooth={true} className='p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2'>Our Vision</Link>
                            <Link to="faqs" smooth={true} className='p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2'>FAQs</Link>
                            <Link to="contact_us" smooth={true} className='p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2'>Contact Us</Link>
                        </div>
                    </div>
                </div>
                
                <a href="https://unstop.com/college-fests/lakshya-20-indian-institute-of-technology-iit-indore-147447" target="_blank">
                <button className='text-white  mr-6 px-3 m-3 rounded-2xl bg-blue-500 hover:bg-blue-700 font-bold '>Register</button>
                </a>
            </div>
        </div>
    )
}

export default Navbar;