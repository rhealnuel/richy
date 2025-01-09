import React from 'react'
import logo from '../assets/images/logo1.png'
import { Link } from 'react-router-dom'


const Confirm = () => {
  return (
    <div class="flex  flex-col items-center justify-center h-[100vh] bg-gray-300">
        <div class="lg:m-0 md:m-0 m-2 h-fit w-fit p-6 shadow-md  bg-gray-100 flex flex-col items-center gap-8">
            <div class="flex flex-col items-center">
               <a href="./"> <img src={logo} alt="" class="h-[80px]"/></a>
                <p class="font-semibold text-[25px]">PAYMENT CONFIRMATION</p>
            </div>
            <p class="pt-4 pb-6 text-gray-500 font-semibold text-center">
                please be patient with us while we confirm your payment<br/>
                This might take 24 hours we will send you <br/>
                an Email once payment is confirmed
            </p>
            <p class="text-[18px] text-center">
                please click on the <b>Button</b> below to fill your <br/><b>Personal / Contact details</b> 
            </p>
           <Link to="/details" class="font-semibold h-fit w-full pt-2 pb-2 text-white bg-[#0077ff] mt-6 text-center"><button>Fill My Details</button></Link>
        </div>
    </div>
  )
}

export default Confirm