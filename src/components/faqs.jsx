import React,{useState} from 'react';
import { Collapse } from 'react-collapse';
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'


const Faq =()=>{
    const faqs=[
        {
            question:"What is Lakshya?",
            answer:"Lakshya is the annual sports fest organized by the Indian Institute of Technology, Indore. It is a multi-sport event that brings together athletes from various institutions across the country to compete in a wide range of sporting disciplines."
        },
        {
            question:"When and where will Lakshya be held?",
            answer:"The dates and venue for Lakshya may vary from year to year. For the most up-to-date information regarding the event schedule and location, please refer to the official Lakshya website or contact the organizers."
        },
        {
            question:"Who can participate in Lakshya?",
            answer:"Lakshya is open to participants from all colleges, universities, and institutions across India. It is not limited to IIT Indore students; athletes from different backgrounds and institutions are encouraged to join."
        },
        {
            question:"How can I register for Lakshya?",
            answer:"Registration details and procedures will be provided on the official Lakshya website closer to the event date. Keep an eye on the website and official social media channels for updates."
        }
    ]
    const [open,setOpen]=useState(null);
    const toggle=(index)=>{
        if(open===index){
            setOpen(null);
        }else{
            setOpen(index);
        }
    }
    const Accordian=(props)=>{
        return (
            <div className=''>
                <div onClick={props.toggle} className='mb-5 cursor-pointer flex item-center  justify-between font-bold text-lg'>
                    <div className='font-medium ml-4'>
                        {props.question}
                    </div>
                    <div className='text-[30px]'>
                        {props.open ? <AiOutlineMinus/> : <AiOutlinePlus/> }
                    </div>
                </div>
                <Collapse isOpened={props.open}>
                    <div className='mb-7 ml-4 mt-1 w-[80%]'>{props.answer}</div>
                </Collapse>
            </div>
        )
    }
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-3xl font-bold mb-7'>Frequently Asked Questions (FAQs)</h1>
            <div>
                {faqs.map((data,index)=>{
                    return <Accordian key={index} index={index} question={data.question} answer={data.answer} open={open===index} toggle={()=>toggle(index)} />
                })}
            </div>
        </div>
    )
}

export default Faq;