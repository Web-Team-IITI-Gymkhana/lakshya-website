import React,{useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar =()=>{
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
    return (
        <div>
            <div className='hidden justify-between items-center font-bold lg:flex'>
                <ul className='flex'>
                    <li className='p-2 m-2 hover:cursor-pointer ml-5'>Home</li>
                    <li className='p-2 m-2 hover:cursor-pointer'>About Us</li>
                    <li className='p-2 m-2 hover:cursor-pointer'>Sports</li>
                    <li className='p-2 m-2 hover:cursor-pointer'>Schedule</li>
                    <li className='p-2 m-2 hover:cursor-pointer'>Standings</li>
                    <li className='p-2 m-2 hover:cursor-pointer'>Contact Us</li>
                </ul>
                <button className='text-white my-3 mx-4 px-6 py-2 rounded-3xl bg-blue-500 hover:bg-blue-700 mr-10'>Register</button>
            </div>
            <div onClick={handleNav} className='flex lg:hidden'>
                {!nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40}/>}
            </div>
            <div className={!nav ? 'flex justify-between w-[50%] font-bold lg:hidden flex-col ease-in-out duration-500' : 'fixed left-[-100%] font-bold'}>
                <ul className='flex-col'>
                    <li className='p-2 m-2 hover:cursor-pointer'>Home</li>
                    <li className='p-2 m-2 hover:cursor-pointer'>About Us</li>
                    <li className='p-2 m-2 hover:cursor-pointer'>Sports</li>
                    <li className='p-2 m-2 hover:cursor-pointer'>Schedule</li>
                    <li className='p-2 m-2 hover:cursor-pointer'>Standings</li>
                    <li className='p-2 m-2 hover:cursor-pointer'>Contact Us</li>
                </ul>
                <button className='text-white my-3 mx-4 px-6 py-2 rounded-3xl bg-blue-500 hover:bg-blue-700 mr-10'>Register</button>
            </div>
        </div>
    )
}

export default Navbar;