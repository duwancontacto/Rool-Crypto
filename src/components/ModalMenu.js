import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Modal from './Modal';
import NftWhitelist from './NftWhitelist';
import Repartidores from './Repartidores';
export default function ModalMenu({ botonActive, setBotonActive }) {


    const [modal, setModal] = useState(false)


    return (
        <div className={`modal ${botonActive ? "botonActive" : "botonDesactive"} w-[300px] h-[100vh] bg-[#21222d]`}>

            <Modal modal={modal} setModal={setModal} >

                {modal === "Repartidores" && <Repartidores />}
                {modal === "Whitelist" && <NftWhitelist />}

            </Modal>

            <div className='z-[100] absolute right-4 top-4 cursor-pointer' onClick={() => { setBotonActive(false) }} ><AiOutlineCloseCircle color='white' size={"1.6rem"} /></div>
            <h3 className=' ml-2 mt-10 my-2 text-lg text-[#f9c74f] font-semibold'>Token GRC</h3>
            <p className='text-[rgba(211,211,211,0.81)] hover:text-white flex justify-start items-center pl-5 mb-2 cursor-pointer  shadow-inner '>Buy Apeswap</p>
            <p className='text-[rgba(211,211,211,0.81)] hover:text-white pl-5  flex justify-start items-center cursor-pointer shadow-inner '>Buy PancakesSwap</p>
            <h3 className=' ml-2 mt-5 my-2 text-lg text-[#f9c74f] font-semibold'>Personajes NFT</h3>
            <p className='text-[rgba(211,211,211,0.81)] hover:text-white pl-5 flex justify-start items-center cursor-pointer shadow-inner '>Encargados</p>
            <p onClick={() => { setModal("Repartidores") }} className='text-[rgba(211,211,211,0.81)]  hover:text-white text-[#d3d3d3] pl-5 flex justify-start items-center my-2 cursor-pointer shadow-inner '>Repartidores</p>
            <p className='text-[rgba(211,211,211,0.81)] pl-5  hover:text-white flex justify-start items-center cursor-pointer shadow-inner '>Tiendas</p>
            <h3 onClick={() => { setModal("Whitelist") }} className=' cursor-pointer ml-3 mt-5 my-2 text-[#f9c74f] font-semibold'>NFT Whitelist</h3>


        </div>


    )
}
