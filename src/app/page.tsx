


'use client';
import Image from "next/image";
import { Bell, CircleHelp, ChevronDown, DollarSign, Filter, CirclePlus, Search, User, ArrowUpRight } from 'lucide-react'
import PostTable from "@/components/posts/PostTable";
import { Pagination } from "@/components/ui/pagination";
import profilepic from "@/components/Img/profilepic.jpeg";
import Circ from "@/components/Img/Circ.png";
import Chart from "@/app/barchart/Chart";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Page from "./products/page";
// import Navbar from "@/components/Navbar";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
import {BriefcaseBusiness, House, Users, Mail, ListCollapse, NotepadText, Settings, SquareGanttChart} from 'lucide-react';
import Navbar from "@/components/Navbar";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:w-[1200px] lg:h-[1024px] ] w-[430px] h-[1650px] top-[-87px] left-[1454px] gap-[0px] lg:bg-[#FAFAFA] bg-[#FAFAFA]">

      {/*nav bar */}
      {/* <section className="lg:w-[1200px] lg:h-[67px] lg:left-[298px] lg:pt-[13.5px] lg:pr-[10px] lg:pb-[13.5px] lg:pl-[10px] lg:gap-[0px] lg:border-t-[0px] 
      lg:border-r-[0px]  lg:border-b-[0.5px]  lg:border-l-[0px]  lg:border-[#DCDCDC] lg:block hidden  "> */}
       <section className="lg:w-[1187px] lg:h-[67px] lg:left-[253px] lg:pt-[13.5px] lg:pr-[10px] lg:pb-[13.5px] lg:pl-[10px]
        lg:gap-[0px] lg:border-t-[0px] lg:border-r-[0px]  lg:border-b-[0.5px]  lg:border-l-[0px] lg:justify-between lg:border-[#DCDCDC] lg:block
        w-[430px] h-[71px] pt-[16px] gap-[0px] border-t-[0px] border-r-[0px]  border-b-[0.48px]  border-l-[0px] justify-between
        border-[#DCDCDC] lg:bg-transparent bg-[plum] mt-[10px] lg:mt-0 hidden ">
        
        
        {/* <div className="lg:flex lg:justify-between"> */}
        <div className="lg:flex lg:justify-between flex justify-between lg:mt-0 mt-[0px]">
          
          <div className="lg:w-[266px] lg:h-[40px] lg:rounded-md lg:border lg:bg-transparent lg:border-gray-300 lg:gap-[0px] lg:relative
          w-[227px] h-[39px] rounded-md border border-gray-300 relative gap-10 bg-gray-400 flex justify-around
          ml-0 ">
      
            <Search className="lg:absolute lg:w-[16px] lg:[p-2.13px] lg:h-[16px] lg:left-3 lg:top-[5px]
             lg:transform lg:translate-y-1/2 text-gray-500 absolute " />
              
            <input
              type="text"
              placeholder="Search option..."
              className="lg:w-full lg:h-full lg:pl-10 lg:pr-[12px] lg:py-[0px] lg:border-none lg:rounded-sm lg:outline-none
               lg:text-[14px] lg:font-normal lg:leading-[20px] lg:text-left lg:text-[#525252] 
              "
            />
          </div>

          <div className="lg:flex lg:justify-between lg:w-[152px] lg:h-[40px] lg:gap-[20px] lg:items-center
          flex justify-between w-[146.77px] h-[38.62px] gap-[19.31px] items-center lg:bg-transparent bg-[#67dada]">

            <div className="lg:w-[24px] lg:h-[24px] lg:gap-[0px]">
              <Bell className="lg:w-[20] lg:h-[20px] lg:gap-[0px] lg:t-[2px] lg:left-[3px] lg:border-t-[0px] lg:border-r-[0px]  lg:border-b-[0px]  lg:border-l-[0px] " />
            </div>
            <div className="lg:w-[24px] lg:h-[24px] lg:gap-[0px]">
              <CircleHelp className="lg:w-[20px] lg:h-[20px] lg:gap-[0px] lg:t-[2px] lg:left-[2px] lg:border-t-[0px] lg:border-r-[0px]  lg:border-b-[0px]  lg:border-l-[0px] " />
            </div>

            <div className="lg:w-[64px] lg:h-[40px] lg:gap-[4px] lg:flex lg:justify-between">
              <div className="lg:w-[40px] lg:h-[40px] lg:gap-[0px]">
                <Image src={profilepic} alt="Profile Picture" className="lg:w-[40px] lg:h-[40px] lg:gap-[0px] 
                lg:rounded-full rounded-full" />

              </div>

              <div className="lg:w-[20px] lg:h-[20px] lg:gap-[0px]  lg:pt-[5px] lg:pr-[0px] lg:pb-[5px] lg:pl-[0px]">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ChevronDown className="lg:w-[20px] lg:h-[20px]  lg:top-[7.5px] lg:left-[15px] lg:gap-[0px] lg:pt-[2px] lg:pr-[0px] lg:pb-[0px] lg:pl-[0px] lg:text-[#525252]" />
                  </DropdownMenuTrigger>
                  {/* <DropdownMenuContent> */}
                  <DropdownMenuContent className=" lg:mt-5">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

            </div>

          </div>
        </div>

      </section>
      <Navbar />
      <div  className="lg:w-[254px] lg:h-[48px] lg:bg-transparent lg:top-[83px] lg:left-[291px]
   bg-transparent lg:gap-0 gap-[8px] lg:pr-0 lg:ml-8 lg:mt-3 mt-[10px] top-[12px] w-[430px] h-[50px] lg:pl-0 pl-6">
<div  className="lg:w-[254px] lg:h-[29px] bg-transparent w-[382px] h-[25px]">

<h2 className="lg:font-medium  lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#525252]
font-medium text-[20px] leading-[24.81px] text-left text-[#525252]">

Overview
</h2>

</div>
<div  className="lg:w-[254px] lg:h-[19px] w-[382px] h-[19px] bg-transparent">
<p className="lg:font-normal  lg:text-[16px] lg:leading-[19.36px] lg:text-[#525252] lg:text-left
font-normal text-[13.37px] leading-[16.54px] text-left text-[#525252]">Showing records from the last .....</p>
</div>
</div>
      
      <div className=" lg:mx-8 lg:pl-[0px] lg:pr-[0px] pl-[22px] pr-[22px] lg:w-[0px] lg:h-[0px] lg:bg-transparent lg:top-[0px] lg:left-[0px] 
      lg:gap-[0px] w-[430px] h-[1461.99px] top-[95px] gap-[32px] bg-transparent " >
        
   {/* <div  className="lg:w-[254px] lg:h-[48px] lg:bg-green-400 lg:top-[83px] lg:left-[291px]
   bg-green-400 lg:gap-0 gap-[8px] lg:pr-0 lg:pl-0 lg:mt-3 mt-[10px] top-[12px] w-[430px] h-[50px]">
<div  className="lg:w-[254px] lg:h-[29px] bg-red-400">
width: 254px;

</div>
</div> */}
        <section className="lg:w-[1099px] lg:h-[134px] lg:bg-transparent lg:top-[97px] lg:gap-[16px] lg:items-center  lg:flex  lg:justify-between  lg:bg-green lg:mt-5 
        mt-5 bg-transparent lg:py-[24px] gap-[16px]
         ">
       

          <div className="lg:w-[262.75px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px] lg:mt-0 lg:shadow-2xl
            w-[382px]  h-[134px] pt-[23px] pr-[24px] pb-[28px] pl-[24px] gap-[3px] rounded-lg border-t-[0.5px] border-r-[0px] border-b-[0px] border-l-[0px] lg:bg-transparent bg-white flex-col justify-center items-center mt-0 shadow-2xl lg:mb-0 mb-4 ">


            <div className="lg:flex lg:w-[214.75px] lg:h-[24px] lg:gap-[0px] lg:justify-between flex w-[336px]
  h-[24px] gap-[0px] justify-between lg:bg-none lg:items-center items-center">
              <h4 className="lg:w-[105px] lg:h-[17px] lg:gap-[0px] lg:font-medium lg:text-[14px] lg:leading-[16.94px] lg:text-left lg:text-[#0A0A0A] w-[105px] h-[20px] g-[0px] text-[14px] font-medium leading-[16.94px] text-left  lg:items-center items-center text-[#0A0A0A]">
                Total Revenue
              </h4>
              <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px]"><DollarSign className="lg:top-[5px] lg:left-[6px] lg:gap-[0px] lg:border-none " /></p>
            </div>

            <div className="lg:w-[214.75px]  lg:h-[50px] lg:gap-[0px] w-[336px] h-[44px] gap-[0px] items-center justify-center">
              <div className="lg:w-[214.75px]  lg:h-[29px] lg:gap-[0px] w-[336px] h-[29px] gap-[0px]">
                <h1 className="lg:font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#0A0A0A] text-[22px] font-semibold leading-[29.05px] text-left text-[#0A0A0A] lg:items-center items-center justify-center">
                  $45,000
                </h1>
              </div>
              <div className="lg:w-[214.75px]  lg:h-[15px] lg:gap-[0px] w-[336px] h-[15px] gap-[0px] lg:mt-1 mt-1">
                <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#525252] font-normal text-[12px]
  leading-[12.52px] text-left lg:items-center items-center text-[#525252]">
                  +20% from last month
                </p>
              </div>
            </div>
          </div>
          


          <div className="lg:w-[262.75px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px]  ] lg:bg-transparent bg-white flex-col justify-center items-center lg:mt-0 lg:shadow-2xl  w-[382px]  h-[134px] pt-[23px] pr-[24px] pb-[28px] pl-[24px] gap-[3px] rounded-lg border-t-[0.5px] border-r-[0px] border-b-[0px] border-l-[0px]  mt-0 shadow-2xl lg:mb-0 mb-4 ">


            <div className="lg:flex lg:w-[214.75px] lg:h-[24px] lg:gap-[0px] lg:justify-between flex w-[336px]
h-[24px] gap-[0px] justify-between lg:bg-none lg:items-center items-center">
              <h4 className="lg:w-[105px] lg:h-[17px] lg:gap-[0px] lg:font-medium lg:text-[14px] lg:leading-[16.94px] lg:text-left lg:text-[#0A0A0A] w-[105px] h-[20px] g-[0px] text-[14px] font-medium leading-[16.94px] text-left  lg:items-center items-center text-[#0A0A0A]">
                Total Users
              </h4>
              <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px]"><User className="lg:top-[5px] lg:left-[6px] lg:gap-[0px] lg:border-none " /></p>
            </div>

            <div className="lg:w-[214.75px]  lg:h-[50px] lg:gap-[0px] w-[336px] h-[44px] gap-[0px] items-center justify-center">
              <div className="lg:w-[214.75px]  lg:h-[29px] lg:gap-[0px] w-[336px] h-[29px] gap-[0px]">
                <h1 className="lg:font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#0A0A0A] text-[22px] font-semibold leading-[29.05px] text-left text-[#0A0A0A] lg:items-center items-center justify-center">
                  4,000
                </h1>
              </div>
              <div className="lg:w-[214.75px]  lg:h-[15px] lg:gap-[0px] w-[336px] h-[15px] gap-[0px] lg:mt-1 mt-1">
                <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#525252] font-normal text-[12px]
leading-[12.52px] text-left lg:items-center items-center text-[#525252]">
                  +10% from last month
                </p>
              </div>
            </div>
          </div>


          <div className="lg:w-[262.75px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px]  rounded-lg border-t-[1px] border-r-[0px] border-b-[0px] border-l-[0px] lg:bg-transparent bg-white flex-col justify-center items-center  w-[382px]  h-[134px] pt-[23px] pr-[24px] pb-[28px] pl-[24px] gap-[3px]  mt-0 shadow-2xl lg:mb-0 mb-4  lg:mt-0 lg:shadow-2xl ">


            <div className="lg:flex lg:w-[214.75px] lg:h-[24px] lg:gap-[0px] lg:justify-between flex w-[336px]
h-[24px] gap-[0px] justify-between lg:bg-none lg:items-center items-center">
              <h4 className="lg:w-[105px] lg:h-[17px] lg:gap-[0px] lg:font-medium lg:text-[14px] lg:leading-[16.94px] lg:text-left lg:text-[#0A0A0A] w-[105px] h-[20px] g-[0px] text-[14px] font-medium leading-[16.94px] text-left  lg:items-center items-center text-[#0A0A0A]">
                Lifetime Sales
              </h4>
              <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px] "> <Image src={Circ} alt="Profile Picture" className="" /></p>
            </div>

            <div className="lg:w-[214.75px]  lg:h-[50px] lg:gap-[0px] w-[336px] h-[44px] gap-[0px] items-center justify-center">
              <div className="lg:w-[214.75px]  lg:h-[29px] lg:gap-[0px] w-[336px] h-[29px] gap-[0px]">
                <h1 className="lg:font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#0A0A0A] text-[22px] font-semibold leading-[29.05px] text-left text-[#0A0A0A] lg:items-center items-center justify-center">
                  1,000
                </h1>
              </div>
              <div className="lg:w-[214.75px]  lg:h-[15px] lg:gap-[0px] w-[336px] h-[15px] gap-[0px] lg:mt-1 mt-1">
                <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#525252] font-normal text-[12px]
leading-[12.52px] text-left lg:items-center items-center text-[#525252]">
                  +20% from last month
                </p>
              </div>
            </div>
          </div>


          {/* <div className="lg:w-[262.75px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px]  w-[376px]  h-[134px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[16px] rounded-lg border-t-[1px] border-r-[0px] border-b-[0px] border-l-[0px] lg:bg-transparent bg-white flex-col justify-center items-center lg:mt-0 lg:shadow-2xl "> */}
          <div className="lg:w-[262.75px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px]  ] lg:bg-transparent bg-white flex-col justify-center items-center lg:mt-0 lg:shadow-2xl  w-[382px]  h-[134px] pt-[23px] pr-[24px] pb-[28px] pl-[24px] gap-[3px] rounded-lg border-t-[0.5px] border-r-[0px] border-b-[0px] border-l-[0px]  mt-0 shadow-2xl lg:mb-0 mb-4 ">


            <div className="lg:flex lg:w-[214.75px] lg:h-[24px] lg:gap-[0px] lg:justify-between flex w-[336px]
h-[24px] gap-[0px] justify-between lg:bg-none lg:items-center items-center">
              <h4 className="lg:w-[105px] lg:h-[17px] lg:gap-[0px] lg:font-medium lg:text-[14px] lg:leading-[16.94px] lg:text-left lg:text-[#0A0A0A] w-[105px] h-[20px] g-[0px] text-[14px] font-medium leading-[16.94px] text-left  lg:items-center items-center text-[#0A0A0A]">
                Total Products
              </h4>
              <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px]"><ArrowUpRight className="lg:top-[5px] lg:left-[6px] lg:gap-[0px] lg:border-none " /></p>
            </div>

            <div className="lg:w-[214.75px]  lg:h-[50px] lg:gap-[0px] w-[336px] h-[44px] gap-[0px] items-center justify-center">
              <div className="lg:w-[214.75px]  lg:h-[29px] lg:gap-[0px] w-[336px] h-[29px] gap-[0px]">
                <h1 className="lg:font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#0A0A0A] text-[22px] font-semibold leading-[29.05px] text-left text-[#0A0A0A] lg:items-center items-center justify-center">
                  $45,000
                </h1>
              </div>
              <div className="lg:w-[214.75px]  lg:h-[15px] lg:gap-[0px] w-[336px] h-[15px] gap-[0px] lg:mt-1 mt-1">
                <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#525252] font-normal text-[12px]
leading-[12.52px] text-left lg:items-center items-center text-[#525252]">
                  +150% from last month
                </p>
              </div>
            </div>
          </div>


        </section>

        {/* bar chart */}

        {/* <PostTable name="princess" />   */}
        <section className="lg:w-[1099px] lg:h-[495px] lg:bg-transparent lg:flex lg:justify-between lg:mt-7 mt-7">
          <div className="lg:w-[672px] lg:h-[495px] lg:shadow-lg  lg:border-[#CBD5E1] lg:border lg:pt-[24px] lg:gap-[24px] lg:rounded-md lg:bg-transparent
          w-[382px] h-[417.99px] shadow-lg border-[#CBD5E1] border pt-[0px] gap-[24px] rounded-md bg-transparent">

            <div className="lg:w-[642px] lg:h-[19px] lg:bg-transparent lg:flex lg:items-center lg:justify-start ml-7 lg:mt-0 mt-3">
              <p className=" lg:justify-center lg:items-center lg:text-[16px] lg:font-semibold lg:text-center ">
                Overview</p>
            </div>
            <Chart />
          </div>
          
          <div className="lg:w-[411px] lg:h-[495px] lg:border-[#CBD5E1] lg:mt-0 lg:border lg:flex lg:flex-col lg:items-center lg:gap-[24px] lg:rounded-md lg:bg-transparent
          w-[382px] h-[432px] border-[#CBD5E1] border flex flex-col mt-5 items-center gap-[19.83px] rounded-md bg-transparent">
            
            <div className="lg:w-[363px] lg:h-[52px] lg:justify-center lg:mt-4 lg:items-center lg:flex lg:bg-transparent
            w-[342.34px] h-[42.61px] justify-between mt-2 items-center flex bg-transparent">
              <div className="lg:w-[257px] lg:h-[52px] lg:flex lg:flex-col lg:justify-between lg:bg-transparent
              w-[212.36px] h-[42.61px] flex flex-col justify-between bg-transparent">
                

                <div className="lg:w-[257px] lg:h-[29px] lg:bg-transparent w-[212.36px] h-[24px] bg-transparent">
                  <h2 className="lg:text-[24px] lg:font-semibold lg:text-left lg:leading-[29.05px]
                  text-[19.83px] font-semibold text-left leading-[24px]  " >
Top Products</h2>
                </div>
                <div className="lg:w-[257px] lg:h-[15px] lg:bg-transparent w-[212.36px] h-[12px] bg-transparent ">
                  <p className="lg:mb-[4px] lg:text-[12px] lg:font-normal lg:leading-[14.52px] lg:text-left lg:text-[#525252]
                  mb-[1px] text-[9.92px] font-normal leading-[12px] text-left text-[#525252]">
                    Your top selling products appear here.
                  </p>
                 
                </div>

              </div>
              
              <div className="lg:w-[110px] lg:h-[40px] lg:px-[8px] lg:py-[16px] lg:items-center lg:rounded-sm 
    lg:justify-center lg:flex  lg:bg-[#F97316] w-[91.27px] h-[33.23px] pt-[6.61px] lg:pr-[13.22px] pb-[6.61px] pl-[13.22px]
     gap-[16px] items-center justify-center flex bg-[#F97316] rounded-sm">
      

                <div className="lg:w-[54px] lg:h-[24px] lg:bg-transparent w-[45px] h-[20px] bg-transparent">
                 
                  <p className=" lg:text-[14px] lg:font-medium lg:leading-[24px] lg:text-left lg:text-[#FFFFFF]
                   text-[11.57px] font-medium leading-[19.83px] text-left text-[#FFFFFF]" style={{ fontFamily: '' }}>
                    View All</p>
                    
                </div>
                <div className="lg:w-[16px] lg:h-[16px] lg:bg-transparent lg:ml-1 lg:items-center lg:justify-center lg:flex
                w-[13.22px] h-[13.22px] bg-transparent ml-1 items-center justify-center flex">
                

                  <p className="lg:w-[16px] lg:h-[16px] lg:top-[4.67px] lg:left-[4.67px] lg:gap-[0px]
                  ">
                    <ArrowUpRight className="lg:w-[16px] lg:h-[16px] lg:mb-[4px] lg:ml-0 lg:left-[0px] lg:text-[#FAFAFA] lg:items-center lg:justify-center
                     lg:flex lg:gap-[0px] lg:border-none [13.22px] h-[13.22px] mr-6  mb-[0px] left-[3.86px] text-[#FAFAFA] items-center justify-center
                     flex gap-[0px] border-none" /></p>
                </div>
              </div>

            </div>
             {/* List Section */}
  <section className="lg:w-[363px] lg:h-[360px] lg:gap-0 lg:justify-center lg:items-center lg:flex-col lg:flex  lg:bg-transparent 
  w-[342px] h-[297.47px] gap-[19.83px] justify-center items-center flex-col flex bg-transparent">
    {/* Replace this placeholder content */}
    <div className="lg:w-[363px] lg:h-[40px] lg:flex lg:mb-4 lg:mt-[-23px]  lg:items-center lg:justify-between lg:bg-transparent
     w-[342.34px] h-[33.05px] flex mb-0 mt-[16px]  items-center justify-between bg-transparent">

    <div className="lg:w-[233px] lg:h-[40px] lg:flex lg:items-center lg:justify-start lg:gap-[16px] lg:bg-transparent
    w-[192.27px] [33.05px] flex items-center justify-start gap-[13.22px]">
    <div className="lg:w-[40px] lg:h-[40px] lg:rounded-md lg:bg-gradient-to-r lg:from-[#F6C790] lg:to-[#E77F1E]
    w-[33.05px] h-[33.05px] rounded-md bg-gradient-to-r from-[#F6C790] to-[#E77F1E] ">
</div>
<div className="lg:w-[170px] lg:h-[24px] w-[158px] h-[20px]">
<h2 className="lg:w-[170px] lg:h-[24px] lg:items-center lg:leading-[24px] lg:text-[16px] lg:font-medium
 lg:text-center h-[20px] items-center leading-[19.83px] text-[13.22px] font-medium
 text-left " >The Lemonade blender</h2>

</div>
    </div>
     <div className="lg:w-[68px] lg:h-[19px] lg:bg-transparent w-[63px] h-[16px]">
     {/* width: 63px;
height: 16px;
gap: 0px;
opacity: 0px; */}

   <p  className="lg:items-center lg:leading-[19.36px] lg:text-[16px] lg:font-semibold lg:text-left 
   items-center text-[13.22px] font-semibold text-left flex justify-center " >500 sales</p>
    </div>
    </div>

    <div className="lg:w-[363px] lg:h-[40px] lg:flex lg:mb-4  lg:items-center lg:justify-between lg:bg-transparent
     w-[342.34px] h-[33.05px] flex mb-0 mt-[0px]  items-center justify-between bg-transparent">
    <div className="lg:w-[233px] lg:h-[40px] lg:flex lg:items-center lg:justify-start  lg:gap-[16px] lg:bg-transparent
     w-[192.27px] [33.05px] flex items-center justify-start gap-[13.22px]">
    <div className="lg:w-[40px] lg:h-[40px] lg:rounded-md lg:bg-gradient-to-r lg:from-[#D6F690] lg:to-[#D7E71E]
      w-[33.05px] h-[33.05px] rounded-md bg-gradient-to-r from-[#D6F690] to-[#D7E71E] ">

</div>
<div className="lg:w-[144px] lg:h-[24px] lg:bg-transparent lg:justify-center lg:items-center lg:flex
w-[119px] h-[20px] bg-transparent justify-center items-center flex">
<h2 className="lg:w-[144px] lg:h-[24px] lg:items-center lg:leading-[24px] lg:text-[16px] lg:font-medium
 lg:text-center w-[119px] h-[20px] items-center leading-[19.83px] text-[13.2px] font-medium
 text-center " >Bean Cake Powder</h2>
</div>

    </div>
     <div className="lg:w-[68px] lg:h-[19px] lg:bg-transparent w-[63px] h-[16px]">
   <p  className="lg:items-center lg:leading-[19.36px] lg:text-[16px] lg:font-semibold lg:text-left
   items-center text-[13.22px] font-semibold text-left flex justify-center" >250 sales</p>
    </div>

    </div>

    <div className="lg:w-[363px] lg:h-[40px] lg:flex lg:mb-4 lg:items-center lg:justify-between lg:bg-transparent
    w-[342.34px] h-[33.05px] flex mb-0 mt-[0px]  items-center justify-between bg-transparent">
    <div className="lg:w-[233px] lg:h-[40px] lg:flex lg:items-center lg:justify-start  lg:gap-[16px] lg:bg-transparent
    w-[117.27px] h-[33.05px] flex items-center justify-start  gap-[13.2px]">
    <div className="lg:w-[40px] lg:h-[40px] lg:rounded-md lg:bg-gradient-to-r lg:from-[#9290F6] lg:to-[#461EE7]
    w-[33.05px] h-[33.05px] rounded-md bg-gradient-to-r from-[#9290F6] to-[#461EE7]">
</div>
<div className="lg:w-[86px] lg:h-[24px] lg:bg-transparent w-[71px] h-[20px] bg-transparent">

<h2 className="lg:w-[86px] lg:h-[24px] lg:items-center lg:leading-[24px] lg:text-[16px] lg:font-medium 
lg:text-center w-[71px] h-[20px] items-center leading-[19.83px] text-[13.22px] font-medium 
text-right " >Flour Mixer</h2>

</div>

    </div>
     <div className="lg:w-[68px] lg:h-[19px] lg:bg-transparent w-[63px] h-[16px]">
   <p  className="lg:items-center lg:leading-[19.36px] lg:text-[16px] lg:font-semibold lg:text-left
   items-center text-[13.22px] font-semibold text-left flex justify-center" >230 sales</p>
    </div>

    </div>

    <div className="lg:w-[363px] lg:h-[40px] lg:flex lg:mb-4 lg:items-center lg:justify-between lg:bg-transparent
    w-[342.34px] h-[33.05px] flex mb-0 mt-[0px]  items-center justify-between bg-transparent">
    <div className="lg:w-[233px] lg:h-[40px] lg:flex lg:items-center lg:justify-start  lg:gap-[16px] lg:bg-transparent
    w-[103px] h-[33.05px] flex items-center justify-start gap-[13px]">
    <div className="lg:w-[40px] lg:h-[40px] lg:rounded-md lg:bg-gradient-to-r lg:from-[#F690A8] lg:to-[#E71E4E]
    w-[33.05px] h-[33.05px] rounded-md bg-gradient-to-r from-[#F690A8] to-[#E71E4E]">
</div>
<div className="lg:w-[59px] lg:h-[24px] lg:bg-transparent w-[49px] h-[20px] bg-transparent">
<h2 className="lg:w-[59px] lg:h-[24px] lg:items-center lg:leading-[24px] lg:text-[16px] lg:font-medium
 lg:text-center w-[49px] h-[20px] items-center leading-[19.83px] text-[13.22px] font-medium
 text-right " >Blender</h2>
</div>

    </div>
     <div className="lg:w-[68px] lg:h-[19px] lg:bg-transparent w-[63px] h-[16px]">
   <p  className="lg:items-center lg:leading-[19.36px] lg:text-[16px] lg:font-semibold lg:text-left
    items-center text-[13.22px] font-semibold text-left flex justify-center" >500 sales</p>
    </div>

    </div>

    <div className="lg:w-[363px] lg:h-[40px] lg:flex lg:mb-4 lg:items-center lg:justify-between lg:bg-transparent
    w-[342.34px] h-[33.05px] flex mb-0 mt-[0px]  items-center justify-between bg-transparent">
    <div className="lg:w-[233px] lg:h-[40px] lg:flex lg:items-center lg:justify-start  lg:gap-[16px] lg:bg-transparent
    w-[144.27px] h-[33.05px] flex items-center justify-start gap-[13.22px]">
    <div className="lg:w-[40px] lg:h-[40px] lg:rounded-md lg:bg-gradient-to-r lg:lg:from-[#B4F690] lg:to-[#64E71E]
    w-[33.05px] h-[33.05px] rounded-md bg-gradient-to-r from-[#B4F690] to-[#64E71E] ">

</div>
<div className="lg:w-[118px] lg:h-[24px] lg:bg-transparent w-[98px] h-[20px]">
<h2 className="lg:w-[118px] lg:h-[24px] lg:items-center lg:leading-[24px] lg:text-[16px] lg:font-medium 
lg:text-center w-[98px] h-[20px] items-center leading-[19.83px] text-[13.22px] font-medium 
text-left " >A Food Product</h2>

</div>

    </div>
     <div className="lg:w-[68px] lg:h-[19px] lg:bg-transparent w-[63px] h-[16px]">
   <p  className="lg:items-center lg:leading-[19.36px] lg:text-[16px] lg:font-semibold lg:text-left 
    items-center text-[13.22px] font-semibold text-left flex justify-center" >150 sales</p>
    </div>

    </div>

    <div className="lg:w-[363px] lg:h-[40px] lg:flex lg:mb-4 lg:items-center lg:justify-between lg:bg-transparent
    w-[342.34px] h-[33.05px] flex mb-4 mt-[0px]  items-center justify-between bg-transparent">
    <div className="lg:w-[233px] lg:h-[40px] lg:flex lg:items-center lg:justify-start lg:gap-[16px] lg:bg-transparent
    w-[144.27px] h-[33.05px] flex items-center justify-start gap-[13.22px] ">
    <div className="lg:w-[40px] lg:h-[40px] lg:rounded-md lg:bg-gradient-to-r lg:from-[#E990F6] lg:to-[#CB1EE7]
     w-[33.05px] h-[33.05px] rounded-md bg-gradient-to-r from-[#E990F6] to-[#CB1EE7] ">
</div>
<div className="lg:w-[102px] lg:h-[24px] lg:bg-transparent w-[98px] h-[20px] bg-transparent">
{/* font-family: Inter;
font-size: 13.22px;
font-weight: 500;
line-height: 19.83px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none; */}

<h2 className="lg:w-[102px] lg:h-[24px] lg:items-center lg:leading-[24px] lg:text-[16px] lg:font-medium lg:text-center
w-[98px] h-[20px] items-center leading-[19.83px] text-[13.22px] font-medium text-left" >Cake Powder</h2>
</div>

    </div>
     <div className="lg:w-[68px] lg:h-[19px] lg:bg-transparent w-[63px] h-[16px]">
   <p  className="lg:items-center lg:leading-[19.36px] lg:text-[16px] lg:font-semibold lg:text-left
   items-center text-[13.22px] font-semibold text-left flex justify-center" >100 sales</p>
    </div>

    </div>



  
   
   
   
  </section>

          </div>


        </section>
        {/* <Chart /> */}
        <Pagination />
      </div>




    </div>

  );
}































