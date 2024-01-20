import React,{useState} from "react";
// import pit from "./img/image.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Gridcard from './gridcard';
import {cricket,basketball,lawnTennis,chess,tableTennis,football,swimming,squash,vollyball,badminton} from './img/images/Image'
import Modal from '@mui/material/Modal'
import  Box from "@mui/material/Box";
import {FaRupeeSign} from "react-icons/fa"
import Typography from '@mui/material/Typography';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




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
            // eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            eventurl:"https://forms.gle/jse25bUykvrQ2Fd26",
            rules: ['Each team will have minimum of 11+5 players','The format of the game will be round robin','All matches are played in T20 format'],
            fees: "₹4000 per team",
            prize: '₹40000',
            contact: [6306631246, 7697211353],
        },
        {
            eventname: "Basketball",
            eventimg: basketball,
            // eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            eventurl:"https://forms.gle/jse25bUykvrQ2Fd26",
            rules: ['Each team will have maximum of 12 players','The format of the game will be group cum knockout'],
            fees: `₹3000 (mens's) and ₹2500 (women's) per team`,
            prize: '₹45000',
            contact: [9509921402, 9905663859],
        },
        {
            eventname: "Lawn Tennis",
            eventimg: lawnTennis,
            // eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            eventurl:"https://forms.gle/jse25bUykvrQ2Fd26",
            rules: ["There are going to be 3 categories:Men's single, Men's double, Women's single",'The format of the game will be knockout', 'This will be open tournment'],
            fees: "₹300 (men's single), ₹600 (men's double) and ₹250 (women's single)",
            prize: '₹25000',
            contact: [8980808242, 7984776847],
        },
        {
            eventname: "Chess",
            eventimg: chess,
            // eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            eventurl:"https://forms.gle/jse25bUykvrQ2Fd26",
            rules: ["Individual format(both men's and women's","League stage with two format:5+2(Blitz) and 2+1(Bullet)" ,'The tournament will be Swiss Tournment'],
            fees: "₹100 (per participant per format)",
            prize: '₹10000',
            contact: [9727321898 ,8651168757],
        },
        {
            eventname: "Table Tennis",
            eventimg: tableTennis,
            // eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            eventurl:"https://forms.gle/jse25bUykvrQ2Fd26",
            rules: ["There are going to be 3 categories:Men's single, Men's double, Women's single",'The format of the game will be knockout', 'This will be open tournment'],
            fees: "₹300 (men's single), ₹600 (men's double) and ₹250 (women's single)",
            prize: '₹40000',
            contact: [8857874084, 8651168757],
        },
        {
            eventname: "Football",
            eventimg: football,
            // eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            eventurl:"https://forms.gle/jse25bUykvrQ2Fd26",
            rules: ['Each team will have minimum of 11+5 players',['The format of the game will be round robin']],
            fees: "₹4000",
            prize: '₹40000',
            contact: [9999122054, 7697211353],
        },
        {
            eventname: "Swimming",
            eventimg: swimming,
            // eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            eventurl:"https://forms.gle/jse25bUykvrQ2Fd26",
            rules: ['Event:50m freestyle, 100m freestyle, 50m breaststroke','It will be open tournment'],
            fees: "₹300 (mens's) and ₹250 (women's)",
            prize: '₹20000',
            contact: [7802048455, 9652541589],
        },
        {
            eventname: "Squash",
            eventimg: squash,
            // eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            eventurl:"https://forms.gle/jse25bUykvrQ2Fd26",
            rules: ["There are going to be only Men's singles",'The format of the game will be knockout', 'This will be open tournment'],
            fees: "₹300 (per participant)",
            prize: '₹15000',
            contact: [8707296776, 9508147356],
        },
        {
            eventname: "Vollyball",
            eventimg: vollyball,
            // eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            eventurl:"https://forms.gle/jse25bUykvrQ2Fd26",
            rules: ['Each team will have maximum of 12 players','The format of the game will be group cum knockout'],
            fees: "₹3000 (mens's) and ₹2500(women's) per team",
            prize: '₹45000',
            contact: [7396395625, 7386900605],
        },
        {
            eventname: "Badminton",
            eventimg: badminton,
            // eventurl: "https://unstop.com/events/mens-cricket-tournament-lakshya-20-iit-indore-794546",
            eventurl:"https://forms.gle/jse25bUykvrQ2Fd26",
            rules: ["There are going to be 3 categories:Men's single, Men's double, Women's single",'The format of the game will be knockout', 'This will be open tournment'],
            fees: "₹300 (men's single), ₹600 (men's double) and ₹250 (women's single)",
            prize: "₹25000",
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
            
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    mx-auto  ">
                {Images.map((data) => (
            // <div className="mx-auto "><a href={data.eventurl} target="_blank"><Gridcard value={data}/></a></div>
            <div className="mx-auto  " onClick={()=>{
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
                       
                        {/* <div className="font-bold text-2xl text-center">
                            {modal.sport}
                        </div>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='flex flex-row my-2'>
                            <div className='text-xl col-2 font-bold mr-4'>Rules:</div>
                            <div className='flex flex-col'>{modal.rules.map((data)=>(<li>{data}</li>))}</div>
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
                            <div className='my-auto flex flex-col'>{modal.contact.map((data)=>(<li>{data}</li>))}</div>
                        </div>
                        <div className='flex flex-row my-2'>
                            <div className='text-xl font-bold mr-4'>Link: </div>
                            <a href={modal.link} target={"_blank"} className='my-auto hover:cursor-pointer text-blue-600'>{modal.link}</a>
                        </div>
                        <div className="grid grid-cols-2 border p-4 gap-1">
                            <div className='col-2 text-xl font-bold flex justify-center items-center border'><div>Rules:</div></div>
                            <div className='col-12 flex flex-col border '>{modal.rules.map((data)=>(<li>{data}</li>))}</div>
                        </div>
                        <div>
                        </div> */}
                        {/* <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}

                        {/* </Typography> */}
                        <div className="font-bold italic text-lg text-center my-2">
                                {modal.sport}
                            </div>
                        <div className="flex sm:flex-row flex-col gap-4">
                            
                            <div className="col col-2 flex justify-start sm:p-4 ">
                                <div className="font-bold italic text-left">Rules:</div>
                            </div>
                            <div className="col">
                                <div className='flex flex-col'>{modal.rules.map((data)=>(<li>{data}</li>))}</div>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col">
                            <div className="col flex justify-start items-center py-1 sm:p-4">
                                <div className="font-bold italic text-left">Registration fees:</div>
                            </div>
                            <div className="col">
                                <div className='flex flex-row text-bold justify-start items-center p-1 sm:py-4'>{modal.fees}</div>
                            </div>
                        </div>
                        <div className="flex flex-row ">
                            <div className="col flex justify-start items-center py-1 sm:p-4">
                                <div className="font-bold italic">Prize Pool:</div>
                            </div>
                            <div className="col">
                                <div className='flex flex-row text-bold justify-start items-center p-1 sm:p-4'>{modal.prize}</div>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col">
                            <div className="col flex justify-start items-center sm:p-4">
                                <div className="font-bold italic">Contact:</div>
                            </div>
                            <div className="col-8">
                                <div className='flex flex-col text-bold justify-start p-1 sm:p-4'>{modal.contact.map((data)=>(<li>{data}</li>))}</div>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col justify-center items-center">
                            <div className="text-white font-bold border px-6 py-2 rounded-full hover:shadow-lg bg-blue-500"><a href={modal.link} target={"_blank"} className=''>Registration Link</a></div>
                        </div>

                        
                        
                        
                    </Box>
                </Modal>
            </div>
            
            

        </div>
        
    )
}

export default Grid;