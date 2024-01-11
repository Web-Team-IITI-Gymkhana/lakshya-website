import React,{useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar =()=>{
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
    return (
        <div className='top-0 fixed bg-[#16171c] text-white w-[100%] z-10'>
            <div className='justify-between lg:items-center font-bold flex'>
                <div className='hidden justify-between items-center font-bold lg:flex'>
                    <ul className='flex'>
                        <li className='p-2 m-2 hover:cursor-pointer ml-5 hover:border-b-2'>Home</li>
                        <li className='p-2 m-2 hover:cursor-pointer hover:border-b-2'>About Us</li>
                        <li className='p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2'>Sports</li>
                        <li className='p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2'>Schedule</li>
                        <li className='p-2 m-2 hover:cursor-pointer hover:border-b-2 active:border-b-2'>Standings</li>
                        <li className='p-2 m-2 hover:cursor-pointer  hover:border-b-2 active:border-b-2'>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <div onClick={handleNav} className='sm:flex lg:hidden'>
                        {nav ? <AiOutlineClose className='mt-2 ml-2' size={25}/> : <AiOutlineMenu className='mt-2 ml-2' size={25}/>}
                    </div>
                    <div className={nav ? 'flex justify-between font-bold lg:hidden flex-col' : 'hidden'}>
                        <ul className='flex-col'>
                            <li className='p-2 m-2 hover:cursor-pointer'>Home</li>
                            <li className='p-2 m-2 hover:cursor-pointer'>About Us</li>
                            <li className='p-2 m-2 hover:cursor-pointer'>Sports</li>
                            <li className='p-2 m-2 hover:cursor-pointer'>Schedule</li>
                            <li className='p-2 m-2 hover:cursor-pointer'>Standings</li>
                            <li className='p-2 m-2 hover:cursor-pointer'>Contact Us</li>
                        </ul>
                    </div>
                </div>
                
                {/* <a href="https://unstop.com/college-fests/lakshya-20-indian-institute-of-technology-iit-indore-147447" target="_blank">
                <button className='text-white  mr-6 px-3 m-3 rounded-2xl bg-blue-500 hover:bg-blue-700 font-bold '>Register</button>
                </a> */}
            </div>
        </div>
    )
}

export default Navbar;