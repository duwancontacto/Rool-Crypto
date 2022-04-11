import React, { useState } from 'react'
import repartidor1 from "../assets/img/repartidor1.jpeg"
import repartidor2 from "../assets/img/repartidor2.jpeg"
import repartidor3 from "../assets/img/repartidor3.jpeg"
import repartidor4 from "../assets/img/repartidor4.jpeg"
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"

export default function Repartidores() {


    const [step, setStep] = useState(0)
    const [classStep, setClassStep] = useState("")


    const onClickStepRest = () => {

        if (step === 0) return setStep(3)
        setStep(step - 1)



    }

    const onClickStep = () => {

        if (step === 3) return setStep(0)
        setStep(step + 1)



    }


    return (
        <>
            <h3 className='text-[58px] font-bold mb-4 text-[#f6bd60] mt-6 font-titulo'>REPARTIDORES</h3>
            <div className="flex items-center">

                <MdOutlineKeyboardArrowLeft onClick={onClickStepRest} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />
                <div className="w-[20rem] overflow-hidden  m-8 z-[99]" >
                    <div className={`flex relative left-[-${step * 20}rem] `}>


                        <img src={repartidor1} className="w-[20rem] rounded-full" />
                        <img src={repartidor2} className="w-[20rem] rounded-full" />
                        <img src={repartidor3} className="w-[20rem] rounded-full" />
                        <img src={repartidor4} className="w-[20rem] rounded-full" />



                    </div>

                    <div className="absolute bottom-[-15px] text-white text-center text-7xl left-0 right-0 mx-auto font-bold font-titulo ">
                        LVL {step + 1}
                    </div>

                </div>
                <MdOutlineKeyboardArrowRight onClick={onClickStep} className="cursor-pointer z-[100] relative" color={"#f1f1f1"} size={50} />



            </div>
        </>
    )
}
