import React, { useState } from 'react'
import cars from "../assets/img/video.mp4"

import { TiDocumentText } from 'react-icons/ti';
import { CgFileDocument } from 'react-icons/cg';
import { RiGamepadLine } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import { FiTwitter } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import { MdCopyright } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsTelegram } from 'react-icons/bs';

import apeswap from "../assets/img/apeswap.png"
import binance from "../assets/img/binance.png"
import Chainlink from "../assets/img/chainlink.png"
import unity from "../assets/img/unity.png"
import pancakeswap from "../assets/img/pancakeswap.png"


import ModalMenu from '../components/ModalMenu';




function App() {

    const [botonActive, setBotonActive] = useState(false)
    console.log(botonActive)
    return (
        <div className="headerComponent">
            <div className="videoContainer">
                <video className="w-full relative top-0 lg:top-[-100px]" muted autoPlay loop >
                    <source src={cars}></source>
                </video>

            </div>

            <ModalMenu botonActive={botonActive} setBotonActive={setBotonActive} />
            <div className="overlay">  </div>
            <div className="absolutee headerTitle">
                {botonActive === false && <button className='cursor-pointer absolute left-5 top-5 z-[99]' onClick={() => { setBotonActive(true) }} >< GiHamburgerMenu /></button>}


                <h3 className='text-[30px] md:text-[58px] font-bold mb-4 text-[#f6bd60] mt-2 md:mt-0 font-titulo'>GOOD ROOL CRYPTO</h3>


                <div className='flex flex-col justify-end items-end w-full px-6'>
                    <a target={"_blank"} href='https://www.instagram.com/goodrollcrypto/' rel="noreferrer" className=' px-3 py-1 rounded-2xl cursor-pointer  fondo-botones '><GrInstagram />  </a>
                    <a target={"_blank"} href='https://twitter.com/GoodRollCrypto?t=4C2qXBsf84nSYZPnHATkzA&s=08' rel="noreferrer" className=']  my-2 px-3 py-1 rounded-2xl cursor-pointer  fondo-botones '><FiTwitter /></a>
                    <a target={"_blank"} href='https://discord.com/invite/Da9n28mvs2' rel="noreferrer" className='  px-3 py-1  rounded-2xl cursor-pointer  fondo-botones '><SiDiscord /> </a>
                    <a target={"_blank"} href='https://t.me/+1tQ6xeQ5e0s4YzI8' rel="noreferrer" className='  my-2 px-3 py-1  rounded-2xl cursor-pointer  fondo-botones '><BsTelegram /> </a>

                </div>

                <div className=' absolute bottom-[50px] w-full flex justify-center flex-col lg:flex-row p-2 md:p-2'>
                    <button className='flex items-center bg-[#4361ee] mt-3 justify-center mx-2 lg:mt-0 px-2 rounded-md py-1 cursor-pointer fondo-botones '><p className='mx-1'>Whitelist </p><TiDocumentText size={"1.6rem"} /></button>
                    <button className='flex items-center bg-[#4361ee] mt-3 justify-center mx-2 lg:mt-0 px-2 rounded-md  py-1 cursor-pointer text-sm fondo-botones '><p className='mx-1'>Whitepaper</p> <CgFileDocument size={"1.4rem"} color={"#fff"} /></button>
                    <button className='flex items-center bg-[#4361ee] mt-3 justify-center  mx-2 lg:mt-0 px-0 md:px-1 rounded-md  py-1 cursor-pointer text-m-sm md:text-md fondo-botones  '><p p className='mx-1'>Play the Game </p><RiGamepadLine size={"1.4rem"} className="mr-2" /></button>

                </div>
                <div className='w-[100%] h-[60px] absolute   bottom-0  flex justify-between items-center'>
                    <div className=' mx-6 hidden md:flex '>

                        <div className='flex items-center w-[6rem] cursor-pointer '><img src={apeswap} alt="apeswap" /></div>
                        <div className='flex  items-center w-[5rem] mx-3  cursor-pointer'><img src={binance} alt="binance" /></div>
                        <div className='flex  items-center w-[5rem]  cursor-pointer'><img src={Chainlink} alt="chainlink" /></div>
                        <div className='flex  items-center w-[4rem] mx-3  cursor-pointer'><img src={unity} alt="uniy" /></div>
                        <div className='flex  items-center w-[6rem]  cursor-pointer '><img src={pancakeswap} alt="pancakeswap" /></div>
                    </div>


                    <div className='flex justify-center items-center mx-6'>
                        <MdCopyright />
                        <p className='text-md font-bold ml-2'>2022 , Good Roll Crypto.All Rights Reserved</p>
                    </div></div>


            </div>
        </div >
    );
}

export default App;
