import React,{useState} from "react";
// import pit from "./img/image.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Gridcard from './gridcard';
import {cricket,basketball,lawnTennis,chess,tableTennis,football,swimming,squash,vollyball,badminton,prizepool,back} from './img/images/Image'
import Modal from '@mui/material/Modal'
import  Box from "@mui/material/Box";
import { Typography } from "@mui/material";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    borderRadius: 5,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const Grid = () => {
    const [open,setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [modal,setModal] = useState({
        rules:[],
        fees:0,
        prize:0,
        contact:[],
        link:""
    })
    const Images = [
        {
            eventname: "Cricket",
            eventimg: cricket,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            rules: ['Each team will have minimum of 11+5 players','The format of the game will be round robin','All matches are played in T20 format'],
            fees: "4000 per team",
            prize: 40000,
            contact: [6306631246, 7697211353],
        },
        {
            eventname: "Basketball",
            eventimg: basketball,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            rules: ['Each team will have maximum of 12 players','The format of the game will be group cum knockout'],
            fees: "3000 (mens's) and 2500 (women's) per team",
            prize: 45000,
            contact: [9509921402, 9905663859],
        },
        {
            eventname: "Lawn Tennis",
            eventimg: lawnTennis,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            rules: ["There are going to be 3 categories:Men's single, Men's double, Women's single",'The format of the game will be knockout', 'This will be open tournment'],
            fees: "300 (men's single), 600 (men's double) and 250 (women's single)",
            prize: 25000,
            contact: [8980808242, 7984776847],
        },
        {
            eventname: "Chess",
            eventimg: chess,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            rules: ["Individual format(both men's and women's","League stage with two format:5+2(Blitz) and 2+1(Bullet)" ,'The tournament will be Swiss Tournment'],
            fees: "100 (per participant per format)",
            prize: 10000,
            contact: [9727321898 ,8651168757],
        },
        {
            eventname: "Table Tennis",
            eventimg: tableTennis,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            rules: ["There are going to be 3 categories:Men's single, Men's double, Women's single",'The format of the game will be knockout', 'This will be open tournment'],
            fees: "300 (men's single), 600 (men's double) and 250 (women's single)",
            prize: 40000,
            contact: [8857874084, 8651168757],
        },
        {
            eventname: "Football",
            eventimg: football,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            rules: ['Each team will have minimum of 11+5 players',['The format of the game will be round robin']],
            fees: 4000,
            prize: 40000,
            contact: [9999122054, 7697211353],
        },
        {
            eventname: "Swimming",
            eventimg: swimming,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            rules: ['Event:50m freestyle, 100m freestyle, 50m breaststroke','It will be open tournment'],
            fees: "300 (mens's) and 250 (women's)",
            prize: 20000,
            contact: [7802048455, 9652541589],
        },
        {
            eventname: "Squash",
            eventimg: squash,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            rules: ["There are going to be only Men's singles",'The format of the game will be knockout', 'This will be open tournment'],
            fees: "300 (per participant)",
            prize: 15000,
            contact: [8707296776, 9508147356],
        },
        {
            eventname: "Vollyball",
            eventimg: vollyball,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            rules: ['Each team will have maximum of 12 players','The format of the game will be group cum knockout'],
            fees: "3000 (mens's) and 2500(women's) per team",
            prize: 45000,
            contact: [7396395625, 7386900605],
        },
        {
            eventname: "Badminton",
            eventimg: badminton,
            eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            rules: ["There are going to be 3 categories:Men's single, Men's double, Women's single",'The format of the game will be knockout', 'This will be open tournment'],
            fees: "300 (men's single), 600 (men's double) and 250 (women's single)",
            prize: 25000,
            contact: [6394202265, 9137489283],
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
        <div className="w-[90%] lg:w-[80%] bg-[#f7f7f7] mx-auto my-5 p-5 rounded-md ">
            {/* {status && (
                <Modal onClick={()=>{setStatus(false)}} sport={modal.sport} rules={modal.rules} prize={modal.prize} contact={modal.contact} fee={modal.fees} link={modal.link} />
            )} */}
            
            <div className=" text-3xl font-bold p-7 sm:text-2xl md:text-3xl lg:text-4xl text-center">
                 Unleash the power of Sports
            </div>
            
            <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5    mx-auto  ">
                {Images.map((data) => (
            // <div className="mx-auto "><a href={data.eventurl} target="_blank"><Gridcard value={data}/></a></div>
            <div className="mx-auto border " onClick={()=>{
                console.log(data.rules,data.fees,data.prize,data.contact,data.eventurl)
                setOpen(true)
                let dict = {
                sport:data.eventname,
                rules:data.rules,
                fees:data.fees,
                prize:data.prize,
                contact:data.contact,
                link:data.eventurl
        }
        setModal(dict)
            }} ><Gridcard value={data}/></div>
                ))}
                <Modal 
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {/* <Typography id="modal-modal-title" variant="h6"  component="h2">
                           {modal.sport}
                        </Typography> */}
                        <div className="font-bold text-2xl">
                            {modal.sport}
                        </div>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='flex flex-row my-2'>
                            <div className='text-xl font-bold mr-4'>Rules:</div>
                            <div className='flex flex-col'>{modal.rules.map((data)=>(<div>{data}</div>))}</div>
                        </div>
                        <div className='flex flex-row my-2'>
                            <div className='text-xl font-bold mr-4'>Registration Fees : </div>
                            <div className='my-auto'>{modal.fees}</div>
                        </div>
                        <div className='flex flex-row my-2'>
                            <div className='text-xl font-bold mr-4'>Prize Worth : </div>
                            <div className='my-auto'>{modal.prize}</div>
                        </div>
                        <div className='flex flex-row my-2'>
                            <div className='text-xl font-bold mr-4'>Contact info : </div>
                            <div className='my-auto flex flex-col'>{modal.contact.map((data)=>(<div>{data}</div>))}</div>
                        </div>
                        <div className='flex flex-row my-2'>
                            <div className='text-xl font-bold mr-4'>Link: </div>
                            <a href={modal.link} target={"_blank"} className='my-auto hover:cursor-pointer text-blue-600'>{modal.link}</a>
                        </div>
                        </Typography>
                    </Box>
                </Modal>
            </div>
            
            

        </div>
        
    )
}

export default Grid;