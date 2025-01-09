import React, { useState } from 'react'
import bitcoinLogo from '../assets/images/bitcoin1.png'
import cashAppLogo from '../assets/images/Cashapp.png'
import { useSearchParams, Link } from 'react-router-dom'

const Pay = () => {

    const [searchParams] = useSearchParams()

    const price = searchParams.get("price")
    const [cashApp, setCashApp] = useState(false)
    const cashTag = "$774884hhb";
    const bitcoin ="bc1qetqfh8mejm0phqwuz6pnm0te5v0zdx22tz02cx"

    
  return (
    <div>
         <div  class="flex flex-col items-center justify-center h-[100vh] bg-gray-300">
        <div id="bitcoin" class=" m-1 lg:m-0 md:m-0 h-fit w-fit lg:p-6 md:p-6 shadow-md  bg-gray-100 flex flex-col items-center">
            <div class="flex gap-2 items-center pt-2 pb-2">
                 <img src={cashApp? cashAppLogo : bitcoinLogo} alt="" class={` ${cashApp ? "w-[60px]" : "w-[30px]"}`}/>
                 <p class="font-semibold text-[25px]">{cashApp? "CASH APP PAYMENT" : "BITCOIN PAYMENT"}</p>
            </div>
            <div class="pt-4 pb-6 text-gray-400 pr-[1px] pl-[1px] lg:font-semibold text-center">
                <p>To complete your payment, please send {!cashApp && "bitcoin worth"}<br/> 
                    <span id="out1">{price}</span> to the {cashApp ? "$CashTag" :"address"} below.
                </p>
            </div>
            <div class="flex flex-col items-center h-fit w-fit bg-white justify-center text-center ">
                <div class="pt-4 pb-4 pl-32 pr-32">
                    <p class="text-[12px] font-semibold text-gray-400">AMOUNT</p>
                    <p class="text-[40px] font-semibold" id="out1p">{price}</p>
                </div>
                <hr class="bg-gray-300 h-[2px] w-full"/>
                <div class="p-4 gap-4 flex flex-col">
                    <p class="text-[12px] font-semibold text-gray-400">{cashApp? "$CASHTAG" : "ADDRESS"}</p>
                    <div class="flex w-[300px] bg-gray-100 gap-2 border justify-center items-center">
                        <img id="copybutton" src="./images/copy.png" alt="" class="h-[20px]"/>
                        <p id="targetP" class="bg-gray-100 pt-2 pb-2">{cashApp? cashTag : bitcoin}</p>
                    </div>
                </div>
            </div>
            {/* <div>
                <p class="p-4 font-semibold text-center">OR</p>
                <div>
                    <button onClick={()=> setCashApp(!cashApp)} class=" h-fit w-fit p-2 bg-green-400 text-white font-semibold rounded-md">{cashApp ? "Pay with Bitcoin" : "Pay with Cash App"}</button>
                </div>
                
            </div> */}
            <Link to={"/confirm"} class="font-semibold h-fit w-full pt-2 pb-2 text-white bg-[#0077ff] mt-6 text-center"><button >I Have Paid</button></Link>
        </div>
        </div>

    </div>
  )
}

export default Pay