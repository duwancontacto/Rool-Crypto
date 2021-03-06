import React from 'react'

import fotoNFT1 from "../../assets/img/FotoNFT3.png"
import fotoNFT2 from "../../assets/img/FotoNFT3.png"
import fotoNFT3 from "../../assets/img/FotoNFT3.png"




/* 
import Fondo from "../../assets/img/FondoRool.PNG"
 */
export default function Mint() {
    return (
        <div className=' h-[99vh] relative z-[100]  fondo'>

            {/*   <img src={Fondo} className='w-[100vw] h-[99vh] z-[50] absolute left-0 top-0' /> */}
            <div className='relative z-[200] top-[10rem] flex flex-wrap  justify-center md:justify-around'>

                <div className='rounded-md bg-[rgba(168,160,160,0.56)] m-2 w-[15rem]'>
                    <img src={fotoNFT1} alt="fotoNFT1" className='w-[11rem] h-[11rem] p-3 m-auto' />
                    <div className=' flex justify-center items-center '><button className=' bg-[#0b525b] px-3 mt-2 rounded-lg py-1 text-[#fff] shadow-xl mb-4'>Mint</button></div>

                </div>
                <div className='rounded-md bg-[rgba(145,159,192,0.56)] w-[15rem m-2' >
                    <img src={fotoNFT2} alt="fotoNFT2" className='w-[11rem] h-[11rem] p-3 m-auto' />
                    <div className=' flex justify-center items-center'><button className='bg-[#0b525b] px-3 mt-2 rounded-lg py-1 text-[#fff] shadow-xl mb-4'>Mint</button></div>
                </div>

                <div className='rounded-md bg-[rgba(112,171,222,0.56)] w-[15rem] m-2'>
                    <img src={fotoNFT3} alt="fotoNFT3" className='w-[11rem] h-[11rem] p-3 m-auto' />
                    <div className=' flex justify-center items-center'><button className='bg-[#0b525b] px-3 mt-2 rounded-lg py-1 text-[#fff] shadow-xl mb-4'>Mint</button></div>
                </div>


            </div>
        </div>
    )
} 
