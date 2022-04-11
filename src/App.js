import React, { useState } from 'react'
import cars from "../src/assets/img/video.mp4"
import { TiDocumentText } from 'react-icons/ti';
import { CgFileDocument } from 'react-icons/cg';
import { RiGamepadLine } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import { FiTwitter } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import { MdCopyright } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsTelegram } from 'react-icons/bs';


import ModalMenu from './components/ModalMenu';




function App() {

  const [botonActive, setBotonActive] = useState(false)
  console.log(botonActive)
  return (
    <div className="headerComponent">
      <div className="videoContainer">
        <video style={{ width: "100%" }} muted autoPlay loop >
          <source src={cars}></source>
        </video>

      </div>

      <ModalMenu botonActive={botonActive} setBotonActive={setBotonActive} />
      <div className="overlay">  </div>
      <div className="absolutee headerTitle">
        {botonActive === false && <button className='cursor-pointer absolute left-5 top-5 z-[99]' onClick={() => { setBotonActive(true) }} >< GiHamburgerMenu /></button>}


        <h3 className='text-[58px] font-bold mb-4 text-[#f6bd60] mt-6 font-titulo'>GOOD ROOL CRYPTO</h3>

        <div className='flex flex-col justify-end items-end w-full px-6'>
          <button className='bg-[#4361ee] px-2 py-1 rounded-2xl cursor-pointer'><GrInstagram /></button>
          <button className='bg-[#4361ee]  my-2 px-2 py-1 rounded-2xl cursor-pointer'><FiTwitter /></button>
          <button className='bg-[#4361ee]  px-2 py-1  rounded-2xl cursor-pointer'><SiDiscord /></button>
          <button className='bg-[#4361ee]  my-2 px-2 py-1  rounded-2xl cursor-pointer'><BsTelegram /></button>

        </div>

        <div className=' absolute bottom-[80px] flex'>
          <button className='flex items-center bg-[#4361ee] px-2 rounded-md py-1 cursor-pointer '><p className='mx-1'>Whitelist </p><TiDocumentText size={"1.6rem"} /></button>
          <button className='flex items-center bg-[#4361ee] px-2 rounded-md mx-2 py-1 cursor-pointer '><p className='mx-1'>Whiterpaper / Tokenomics</p> <CgFileDocument size={"1.4rem"} color={"#fff"} /></button>
          <button className='flex items-center bg-[#4361ee] px-2 rounded-md  py-1 cursor-pointer '><p p className='mx-1'>Play the Game </p><RiGamepadLine size={"1.4rem"} /></button>

        </div>
        <div className='w-[100%] h-[60px] absolute bg-[#000]  bottom-0  flex justify-between items-center'>
          <div className='flex mx-6 '>

            <div className='flex  items-center'><SiDiscord /><p> Binance smart chain</p></div>
            <div className='flex  items-center mx-9 text-[#fff]'><SiDiscord /><p> ChainLink</p></div>
            <div className='flex  items-center text-[#fff]'><SiDiscord /><p> Unity</p></div>
            <div className='flex  items-center mx-9 text-[#bc6c25]'><SiDiscord /><p> ApeSwaap</p></div>
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
