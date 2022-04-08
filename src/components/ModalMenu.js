import React, { useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function ModalMenu({ botonActive, setBotonActive }) {

    useEffect(() => { console.log("hi", botonActive) }, [botonActive])
    return (
        <div className={`modal ${botonActive ? "botonActive" : "botonDesactive"} w-[300px] h-[100vh] bg-[#21222d]`}>



            <div className='z-[200] absolute right-4 top-4 cursor-pointer' onClick={() => { setBotonActive(false) }} ><AiOutlineCloseCircle color='white' size={"1.6rem"} /></div>
            <h3 className=' ml-2 mt-10 my-2 text-lg text-[#f9c74f] font-semibold'>Token GRC</h3>
            <p className='text-[rgba(211,211,211,0.81)] border-[1px] border-[rgba(236,228,219,0.33)] flex justify-start items-center pl-5 mb-2 cursor-pointer  shadow-inner shadow-[rgba(211,211,211,0.58)]'>Buy Apeswap</p>
            <p className='text-[rgba(211,211,211,0.81)] pl-5 border-[1px] border-[rgba(236,228,219,0.33)]  flex justify-start items-center cursor-pointer shadow-inner shadow-[rgba(211,211,211,0.58)]'>Buy PancakesSwap</p>
            <h3 className=' ml-2 mt-5 my-2 text-lg text-[#f9c74f] font-semibold'>Personajes NFT</h3>
            <p className='text-[rgba(211,211,211,0.81)] pl-5 border-[1px] border-[rgba(236,228,219,0.33)] flex justify-start items-center cursor-pointer shadow-inner shadow-[rgba(211,211,211,0.58)]'>Encargados</p>
            <p className='text-[rgba(211,211,211,0.81)] text-[#d3d3d3] pl-5 border-[1px] border-[rgba(236,228,219,0.33)] flex justify-start items-center my-2 cursor-pointer shadow-inner shadow-[rgba(211,211,211,0.58)]'>Repartidores</p>
            <p className='text-[rgba(211,211,211,0.81)] pl-5 border-[1px] border-[rgba(236,228,219,0.33)]  flex justify-start items-center cursor-pointer shadow-inner shadow-[rgba(211,211,211,0.58)]'>Tiendas</p>
            <h3 className='ml-3 mt-5 my-2 text-[#f9c74f] font-semibold'>NFT Whitelist</h3>


        </div>


    )
}
