'use client';
import Image from "next/image";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Bell, CircleHelp, ChevronDown, DollarSign, Filter, CirclePlus, Search, User, ArrowUpRight } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {BriefcaseBusiness, House, Users, Mail, ListCollapse, NotepadText, Settings, SquareGanttChart} from 'lucide-react';
import profilepic from "@/components/Img/profilepic.jpeg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
     <div className='flex justify-between md:hidden lg:hidden relative mt-0 lg:bg-transparent 
     w-[430px] h-[71px] pt-[16px]  bg-transparent border border-b-[0.48px]'>
      {/* width: Fixed (430px)px;
height: Hug (71px)px;
padding: 16px 0px 0px 0px;
gap: 0px;
border: 0px 0px 0.48px 0px;
justify: space-between;
opacity: 0px; */}


      <div className='flex justify-between w-[227px] h-[39px] gap-[10px] bg-transparent ml-6 '>
        <div onClick={toggleMenu}>
          <Menu className="w-[24px] h-[24px] ml-0 flex justify-center items-center text-center mt-[6px]" />
        </div>
        <div>
<Search className="absolute w-[11.33px] h-[11.33px]
              left-[75px] top-[25px] transform translate-y-1/2 text-gray-500  " />

<input
              type="text"
              placeholder="Search option..."
              className="top-[80px] w-[193px] h-[39px] 
            text-gray-500  text-center border border-[#E4E4E7] rounded-md
              "
            />
            
    
        </div>
      </div>
      
      <div className="flex justify-between w-[146.77px] h-[38.62px] gap-[19.31px] items-center lg:bg-transparent bg-transparent">

            <div className="w-[23.17px] h-[23.17px] lg:gap-[0px]">
              <Bell className="w-[23.17px] h-[23.17px] lg:gap-[0px] lg:top-[7.72px] pt-[1.93px] pr-[2.9px] pb-[1.93px]
              pl-[2.9px]  " />
            </div>
          
            <div className="w-[23.17px] h-[23.17px] lg:gap-[0px]">
              <CircleHelp className="w-[19.31px] h-[19.31px] lg:gap-[0px] top-[2.93px] pt-[2.93px] left-[1.93px] 
               " />
            </div>

            <div className="w-[61.8px] h-[38.62px] gap-[3.86px] flex justify-between">
              <div className="w-[38.62px] h-[38.62px] gap-[0px]">
                <Image src={profilepic} alt="Profile Picture" className="w-[38.62px] h-[38.62px] gap-[0px] rounded-full" />
              </div>

              <div className="w-[19.31px] h-[19.31px] gap-[0px] pt-[4.83px] pr-[0px] pb-[4.83px] pl-[0px]
              flex justify-between">
          

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ChevronDown className="lg:w-[20px] lg:h-[20px]  lg:top-[7.5px] lg:left-[15px] lg:gap-[0px] lg:pt-[2px] 
                    lg:pr-[0px] lg:pb-[0px] lg:pl-[0px] lg:text-[#525252] lg:outline-none outline-none" />
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

      <div className={`absolute top-0 left-0 right-0 flex flex-col text-left bg-[#FAFAFA] transition-transform duration-300 w-[205px] h-[300px] ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} ${isOpen ? 'mt-[60px] float-left' : ''} ${isOpen ? 'float-left' : ''}`}>
        <ul className='block m-[17px] font-medium'>
        <div className='flex w-[170px] h-[30px] lg:pt-[10px] lg:pr-[8px] lg:pb-[10px] lg:pl-[8px] lg:gap-[9px] lg:rounded-lg  lg:flex mb-2 tems-center justify-start hover:bg-[#F97316]'>
          <div className='w-[18px] lg:h-[18px] flex items-center justify-center'>
          <House  className='w-[13px] h-[14.67px] text-[#525252]' />
  </div>
  <div className=' flex items-center ml-2'>
  <h3 className='font-normal text-[14px] leading-[17.36px] text-left text-[#3d3b3b]'>Dashboard</h3>
  </div>   
          </div>

          <div className='flex w-[170px] h-[30px] lg:pt-[10px] lg:pr-[8px] lg:pb-[10px] lg:pl-[8px] lg:gap-[9px] lg:rounded-lg  lg:flex mb-2 tems-center justify-start hover:bg-[#F97316]'>
          <div className='w-[18px] lg:h-[18px] flex items-center justify-center'>
          <SquareGanttChart className='w-[13px] h-[14.67px] text-[#525252]' />
  </div>
  <div className=' flex items-center ml-2'>
  <h3 className='font-normal text-[14px] leading-[17.36px] text-left text-[#3d3b3b]'>Products</h3>
  </div>   
          </div>
      
          <div className='flex w-[170px] h-[30px] lg:pt-[10px] lg:pr-[8px] lg:pb-[10px] lg:pl-[8px] lg:gap-[9px] lg:rounded-lg  lg:flex mb-2 tems-center justify-start hover:bg-[#F97316]'>
          <div className='w-[18px] lg:h-[18px] flex items-center justify-center'>
          <Users className='w-[13px] h-[14.67px] text-[#525252]' />
  </div>
  <div className=' flex items-center ml-2'>
  <h3 className='font-normal text-[14px] leading-[17.36px] text-left text-[#3d3b3b]'>Users</h3>
  </div>   
          </div>

          <div className='flex w-[170px] h-[30px] lg:pt-[10px] lg:pr-[8px] lg:pb-[10px] lg:pl-[8px] lg:gap-[9px] lg:rounded-lg  lg:flex mb-2 tems-center justify-start hover:bg-[#F97316]'>
          <div className='w-[18px] lg:h-[18px] flex items-center justify-center'>
          <Mail className='w-[13px] h-[14.67px] text-[#525252]' />
  </div>
  <div className=' flex items-center ml-2'>
  <h3 className='font-normal text-[14px] leading-[17.36px] text-left text-[#3d3b3b]'>Email Templates</h3>
  </div>   
          </div>

          <div className='flex w-[170px] h-[30px] lg:pt-[10px] lg:pr-[8px] lg:pb-[10px] lg:pl-[8px] lg:gap-[9px] lg:rounded-lg  lg:flex mb-2 tems-center justify-start hover:bg-[#F97316]'>
          <div className='w-[18px] lg:h-[18px] flex items-center justify-center'>
          <ListCollapse className='w-[13px] h-[14.67px] text-[#525252]' />
  </div>
  <div className=' flex items-center ml-3'>
  <h3 className='font-normal text-[14px] leading-[17.36px] text-left text-[#3d3b3b]'>Squeeze Pages</h3>
  </div>   
          </div>

          <div className='flex w-[170px] h-[30px] lg:pt-[10px] lg:pr-[8px] lg:pb-[10px] lg:pl-[8px] lg:gap-[9px] lg:rounded-lg  lg:flex mb-2 tems-center justify-start hover:bg-[#F97316]'>
          <div className='w-[18px] lg:h-[18px] flex items-center justify-center'>
          <NotepadText className='w-[13px] h-[14.67px] text-[#525252]' />
  </div>
  <div className=' flex items-center ml-2'>
  <h3 className='font-normal text-[14px] leading-[17.36px] text-left text-[#3d3b3b]'>Waitlist Page</h3>
  </div>   
          </div>

          <div className='flex w-[170px] h-[30px] lg:pt-[10px] lg:pr-[8px] lg:pb-[10px] lg:pl-[8px] lg:gap-[9px] lg:rounded-lg  lg:flex mb-2 tems-center justify-start hover:bg-[#F97316]'>
          <div className='w-[18px] lg:h-[18px] flex items-center justify-center'>
          <Settings className='w-[13px] h-[14.67px] text-[#525252]' />
  </div>
  <div className=' flex items-center ml-2'>
  <h3 className='font-normal text-[14px] leading-[17.36px] text-left text-[#3d3b3b]'>Settings</h3>
  </div>   
          </div>

        </ul>
      </div>
      
     
    

      <div>
      {/* <div className="w-[64px] h-[40px] gap-[4px] flex justify-between">
        <div className="w-[40px] h-[40px] gap-[0px]">
     
        <DropdownMenu>
          <DropdownMenuTrigger>
          <Image src={profilepic} alt="Profile Picture" className="w-[40px] h-[40px] gap-[0px] rounded-full outline-none border-none"  />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </div> */}
      </div>
    </div>
  );
};

export default Navbar;



{/* <div className="lg:w-[238px] lg:h-[40px] lg:gap-[10px] w-[200px] h-[40px] gap-[10px] lg:flex flex justify-between items-center">
            <div className="lg:w-[88px] lg:h-[40px] lg:pt-[10px] lg:pr-[5px] lg:pb-[10px] lg:pl-[5px] lg:gap-0 border lg:rounded-md rounded-none lg:border-[0.5px] lg:border-[#CBD5E1] lg:flex lg:justify-between items-center">
              <Filter className="lg:mr-2" />
              <p>Filter</p>
            </div>
            <CirclePlus />
          </div>

<section className="lg:w-[1044px] lg:h-[59px] lg:gap-0 lg:justify-between lg:mt-5 lg:flex flex justify-between mt-3">
<div className="lg:w-[328px] lg:h-[59px] lg:block block lg:justify-between justify-between">
  <div className="lg:w-[328px] lg:h-[34px] w-[180px] h-[38px]">
    <div className="lg:w-[328px] lg:h-[50px]">
      <h2 className="lg:font-semibold lg:text-[28px] lg:leading-[33.89px] lg:text-left lg:text-[#000000] text-[28px] font-semibold leading-[33.89px] text-left text-[#000000]">
        Products
      </h2>
      <div className="lg:w-[328px] lg:h-[15px] h-[24px] lg:mt-2">
        <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#000000] font-normal text-[12px] leading-[14.52px] text-left text-[#000000] lg:block hidden">
          Manage your products and view their sales performance.
        </p>
        <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#000000] lg:hidden block font-normal text-[12px] leading-[14.52px] text-left text-[#000000]">
          Manage your products
        </p>
      </div>
    </div>
  </div>
</div> */}