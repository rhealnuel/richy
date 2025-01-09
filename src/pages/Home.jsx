import React from 'react'
import logo from '../assets/images/logo1.png'
import hero from '../assets/images/main.jpg'
import member1 from '../assets/images/royal.jpeg'
import member2 from '../assets/images/vip.jpeg'
import member3 from '../assets/images/gold.jpeg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
         <div class="bg-gray-100 w-[100%]"> 
        <div class="flex  justify-between items-center p-5 ">
            <img src={logo} alt="" class="w-[5vw]"/>
            <ul class="hidden lg:flex gap-16 text-[#0077ff] font-bold text-[16px]">
               <a href="#"><li>Home</li></a> 
                <a href="#about"><li>About Us</li></a>
            </ul>
           <a href="#buy"><button class="h-fit w-fit bg-[#0077ff] text-white  font-bold p-2 rounded-2xl">Buy Membership Card </button></a>
        </div>
        <div class="flex flex-col gap-16 lg:flex-row md:flex-row justify-between items-center pl-16 pr-10">
            <div>
                <p class="font-bold text-[14px] lg:text-[18px]">Welcome to</p>
                <p class=" text-[35px] lg:text-[50px] font-extrabold">Official Celebrity <br/> <span class="text-[#0077ff]">Membership Site</span></p>
                <p class="text-[18px]">we are very delighted to have you as one of our member and <br/> we promise that we will always continue to be at our best</p>
            </div>
            <div>
                <img src={hero} alt="" class="w-[300px] lg:w-[400px] rounded-2xl"/>
            </div>
        </div>
        <div class="flex flex-col items-center text-center pt-32">
            <div id="about">
                <p class="text-[35px] font-extrabold text-[#0077ff]">About Us</p>
            </div>
            <p class="text-[25px] font-bold">Bloved Fans</p>
            <p class="text-[18px] p-10 w-[80%]" >This is the official E-commerce site for celebrities fans. This is the site where you are able to purchase the membership cards for your favorite celebrities and become a recognised fan. We have billions of fans all over the world and the only way you can recognise them is by 
                making our fan able to purchase the membership card. <b>Note that this is the only official site where we sell membership card.</b> Do not give your money to anybody. Our membership card is only sold here on this site and we ship it to you 24hrs after we confirm your payment. <br/> THANKS </p>
        </div>
        <div class="pb-20" id="buy">
            <div class="flex flex-col items-center text-center pt-32">
                <p class="text-[35px] font-extrabold text-[#0077ff]">Get Your Membership Card</p>
            </div>
            <p class="text-[25px] font-bold text-center pb-16">These are the prices for our membership Card</p>
            <div class="flex flex-col gap-12  lg:flex-row items-center justify-evenly">
                <div class="h-fit w-fit bg-white rounded-2xl shadow-md">
                    <div class="p-6">
                        <img src={member1} alt="" class="w-[260px] h-[230px] lg:w-[300px] lg:h-[280px] md:w-[300px] md:h-[280px] lg:pb-4"/>
                        
                        <div class="flex justify-between">
                            <p class="text-[18px] font-bold">Royal Card</p>
                            <Link to={"/pay?price=$500"}><button id="productButton1" class="text-[18px] font-semibold p-1 rounded-md bg-black text-white">Buy Now</button></Link>
                        </div>
                        <p> <span class="font-bold text-[#0077ff]">Price: </span> <span id="p1">$500</span></p>
                    </div>
                </div>
                <div class="h-fit w-fit bg-white rounded-2xl shadow-md">
                    <div class="p-6">
                        <img src={member2} alt="" class="w-[260px] h-[230px] lg:w-[300px] lg:h-[280px] md:w-[300px] md:h-[280px] lg:pb-4"/>
                        <div class="flex justify-between">
                            <p class="text-[18px] font-bold">VIP Card</p>
                           <Link to={"/pay?price=$1,000"}> <button id="productButton2" class="text-[18px] font-semibold p-1 rounded-md bg-black text-white">Buy
                                Now</button>
                                </Link>
                        </div>
                        <p> <span class="font-bold text-[#0077ff]">Price: </span><span id="p2">$1000</span></p>
                    
                    </div>
                </div>
                <div class="h-fit w-fit bg-white rounded-2xl shadow-md">
                    <div class="p-6">
                        <img src={member3} alt="" class="w-[260px] h-[230px] lg:w-[300px] lg:h-[280px] md:w-[300px] md:h-[280px] lg:pb-4" />
                        <div class="flex justify-between">
                            <p class="text-[18px] font-bold">Gold Card</p>
                            <Link to={"/pay?price=$2,000"}><button id="productButton3" class="text-[18px] font-semibold p-1 rounded-md bg-black text-white">Buy Now</button></Link>
                        </div>
                        <p> <span class="font-bold text-[#0077ff]">Price: </span><span id="p3">$2000</span></p>
                        
                    </div>
                </div>    
            </div>
        </div>

       

    </div>
    <footer class="bg-black w-full h-fit text-center">
        <p class="text-white font-semibold pt-5 pb-5">Celebrity all right reserved &copy; 2023</p>
    </footer>

    </div>
  )
}

export default Home