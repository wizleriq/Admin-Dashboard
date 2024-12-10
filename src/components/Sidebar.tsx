// import React from 'react'
// import {
//   Command,
//   CommandDialog,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandShortcut,
// } from "@/components/ui/command"
// import Link from 'next/link'
// import {BriefcaseBusiness, House, Users, Mail, ListCollapse, NotepadText, Settings, SquareGanttChart} from 'lucide-react';

// const Sidebar = () => {
//   return (
// //     width: Fixed (298px)px;
// // height: Fixed (1,024px)px;
// // gap: 24px;
// // border: 0px 0.5px 0px 0px;
// // opacity: 0px;

//     <div className="lg:w-[298px] lg:h-[1024px] lg:gap-[24px] lg:border-t-[0px] lg-border-r-[0.5px] border lg:border-[#DCDCDC] lg:border-b-[0px] lg:border-l-[0px]  hidden md:block lg:block  lg:bg-[#FAFAFA]">
//       {/*Shadcn section*/}
//       <section className='lg:w-[298px] lg:h-[67px] lg:pt-[10px] lg:pr-[27px] lg-pb-[10px] lg:pl-[27px] lg:items-center lg:justify-center lg:border-none lg-border-r-[0px]'>
//         <div className='md:flex lg:flex items-center  '>
//         <div className='lg:w-[24px} lg:h-[24px] lg:gap-[0px]'>
      
//         <p className='lg:w-[28px] lg-h[6px] lg:top-[3px] lg:left-[3px] lg:gap-[0px]'><BriefcaseBusiness/></p>
//         </div>
//         <div className='lg:w-[58px] lg-h[24px]'>
//         <h3 className='lg:font-medium lg:text-[16px] lg:leading-[24px] lg:text-left lg:text-[#0A0A0A]'>Shadcn</h3>
//         </div>
//         </div>
//       </section>

// <div className='lg:w-[298px] lg:h-[410px] lg:pt-[0px] lg:pr-[16px] lg:pb-[0px] lg:pl-[16px] lg:gap-[10px] lg:flex-col lg:items-center lg:justify-center '>
//         {/* <div className='lg:w-[266px] lg:h-[50px] lg:pt-[15px] lg:pr-[10px] lg:pb-[15px] lg:pl-[10px] lg:gap-[11px] lg:rounded-md bg-red-500 lg:flex lg:mb-2 lg:items-center lg:justify-start'>

//           <div className='lg:w-[20px] lg:h-[20px] lg:gap-[0px] lg:items-center lg:justify-center'>
// <House className=' lg:w-[15px] lg:h-[16.67px]' />
//           </div>
       
       
//         <div className='lg:w-[215px] lg:h-[19px] lg:gap-[0px]'>
//         <h3 className='lg:font-normal lg:text-[16px] lg:leading-[ 19.36px] lg:text-left lg:text-[#525252]'>Dashboard</h3>
//         </div>
//         </div>  */}

// <div className='lg:w-[266px] lg:h-[50px] lg:pt-[15px] lg:pr-[10px] lg:pb-[15px] lg:pl-[10px] lg:gap-[11px] lg:rounded-lg   lg:flex lg:mb-2 lg:items-center lg:justify-start hover:lg:bg-[#F97316]  hover:lg:text-white '>
//   <div className='lg:w-[20px] lg:h-[20px] lg:flex lg:items-center lg:justify-center '>
//     <House className='lg:w-[15px] lg:h-[16.67px] lg:text-[#525252] ' />
//   </div>
//   <div className='lg:w-[215px] lg:h-[19px] lg:flex lg:items-center '>
//     <h3 className='lg:font-normal lg:text-[16px] lg:leading-[19.36px] lg:text-left lg:text-[#525252] '>Dashboard</h3>
//   </div>
// </div>

// <Link href="/">
// <div className='lg:w-[266px] lg:h-[50px] lg:pt-[15px] lg:pr-[10px] lg:pb-[15px] lg:pl-[10px] lg:gap-[11px] lg:rounded-lg  lg:flex lg:mb-2 lg:items-center lg:justify-start lg:bg-[#F97316]'>
//   <div className='lg:w-[20px] lg:h-[20px] lg:flex lg:items-center lg:justify-center'>
//     <SquareGanttChart className='lg:w-[15px] lg:h-[16.67px] lg:text-[#525252]' />
//   </div>
//   <div className='lg:w-[215px] lg:h-[19px] lg:flex lg:items-center'>
//     <h3 className='lg:font-normal lg:text-[16px] lg:leading-[19.36px] lg:text-left lg:text-[#525252]'>Products</h3>
//   </div>
// </div>
// </Link>

// <div className='lg:w-[266px] lg:h-[50px] lg:pt-[15px] lg:pr-[10px] lg:pb-[15px] lg:pl-[10px] lg:gap-[11px] lg:rounded-lg  lg:flex lg:mb-2 lg:items-center lg:justify-start hover:lg:bg-[#F97316]'>
//   <div className='lg:w-[20px] lg:h-[20px] lg:flex lg:items-center lg:justify-center'>
//     <Users  className='lg:w-[15px] lg:h-[16.67px] lg:text-[#525252]' />
//   </div>
//   <Link href="/user">
//   <div className='lg:w-[215px] lg:h-[19px] lg:flex lg:items-center'>
//     <h3 className='lg:font-normal lg:text-[16px] lg:leading-[19.36px] lg:text-left lg:text-[#525252]'>Users</h3>
//   </div>
//   </Link>

// </div>


// <div className='lg:w-[266px] lg:h-[50px] lg:pt-[15px] lg:pr-[10px] lg:pb-[15px] lg:pl-[10px] lg:gap-[11px] lg:rounded-lg  lg:flex lg:mb-2 lg:items-center lg:justify-start hover:lg:bg-[#F97316]'>
//   <div className='lg:w-[20px] lg:h-[20px] lg:flex lg:items-center lg:justify-center'>
//     <Mail className='lg:w-[15px] lg:h-[16.67px] lg:text-[#525252]' />
//   </div>
//   <div className='lg:w-[215px] lg:h-[19px] lg:flex lg:items-center'>
//     <h3 className='lg:font-normal lg:text-[16px] lg:leading-[19.36px] lg:text-left lg:text-[#525252]'>Email Templates</h3>
//   </div>
// </div>


// <div className='lg:w-[266px] lg:h-[50px] lg:pt-[15px] lg:pr-[10px] lg:pb-[15px] lg:pl-[10px] lg:gap-[11px] lg:rounded-lg  lg:flex lg:mb-2 lg:items-center lg:justify-start hover:lg:bg-[#F97316]'>
//   <div className='lg:w-[20px] lg:h-[20px] lg:flex lg:items-center lg:justify-center'>
//     <ListCollapse className='lg:w-[15px] lg:h-[16.67px] lg:text-[#525252]' />
//   </div>
//   <div className='lg:w-[215px] lg:h-[19px] lg:flex lg:items-center'>
//     <h3 className='lg:font-normal lg:text-[16px] lg:leading-[19.36px] lg:text-left lg:text-[#525252]'>Squeeze Pages</h3>
//   </div>
// </div>

// <div className='lg:w-[266px] lg:h-[50px] lg:pt-[15px] lg:pr-[10px] lg:pb-[15px] lg:pl-[10px] lg:gap-[11px] lg:rounded-lg  lg:flex lg:mb-2 lg:items-center lg:justify-start hover:lg:bg-[#F97316]'>
//   <div className='lg:w-[20px] lg:h-[20px] lg:flex lg:items-center lg:justify-center'>
//     <NotepadText className='lg:w-[15px] lg:h-[16.67px] lg:text-[#525252]' />
//   </div>
//   <div className='lg:w-[215px] lg:h-[19px] lg:flex lg:items-center'>
//     <h3 className='lg:font-normal lg:text-[16px] lg:leading-[19.36px] lg:text-left lg:text-[#525252]'>Waitlist Page</h3>
//   </div>
// </div>

// <div className='lg:w-[266px] lg:h-[50px] lg:pt-[15px] lg:pr-[10px] lg:pb-[15px] lg:pl-[10px] lg:gap-[11px] lg:rounded-lg  lg:flex lg:mb-2 lg:items-center lg:justify-start hover:lg:bg-[#F97316]'>
//   <div className='lg:w-[20px] lg:h-[20px] lg:flex lg:items-center lg:justify-center'>
//     <Settings className='lg:w-[15px] lg:h-[16.67px] lg:text-[#525252]' />
//   </div>
//   <div className='lg:w-[215px] lg:h-[19px] lg:flex lg:items-center'>
//     <h3 className='lg:font-normal lg:text-[16px] lg:leading-[19.36px] lg:text-left lg:text-[#525252]'>Settings</h3>
//   </div>
// </div>
// </div>

//     </div>
   
  
//   )
// }

// export default Sidebar



// //  <Command className=''>
// // <CommandList >
// //    <CommandGroup heading="Suggestions"> 
// //   <CommandGroup>
// //   {/* width: Fill (266px)px;
// // height: Hug (50px)px;
// // padding: 15px 10px 15px 10px;
// // gap: 11px;
// // border-radius: 4px 0px 0px 0px;
// // opacity: 0px; */}
// //     <CommandItem>
// //     <House />
// //     <h3>dhbord</h3>
// //     </CommandItem>
// //     <CommandItem>Calculator</CommandItem>
// //   </CommandGroup>
// //   <CommandSeparator />
// //   <CommandGroup heading="Settings">
// //     <CommandItem>Profile</CommandItem>
// //     <CommandItem>Billing</CommandItem>
// //     <CommandItem>Settings</CommandItem>
// //   </CommandGroup>
// // </CommandList>
// // </Command>


"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  BriefcaseBusiness,
  House,
  Users,
  Mail,
  ListCollapse,
  NotepadText,
  Settings,
  SquareGanttChart,
  AlignJustify,
} from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const menuItems = [
    { icon: <House />, label: "Dashboard", href: "/" },
    { icon: <SquareGanttChart />, label: "Products", href: "/products" },
    { icon: <Users />, label: "Users", href: "/user" },
    { icon: <Mail />, label: "Email Templates", href: "/emails" },
    { icon: <ListCollapse />, label: "Squeeze Pages", href: "/pages" },
    { icon: <NotepadText />, label: "Waitlist Page", href: "/waitlist" },
    { icon: <Settings />, label: "Settings", href: "/settings" },
  ];

  return (
    <div
      className={`${
        isCollapsed ? "lg:w-[63px]" : "lg:w-[260px]"
      } lg:h-[1024px] lg:gap-[24px] lg:border-r-[0.5px] border lg:border-[#DCDCDC] lg:bg-[#FAFAFA] transition-all duration-300`}
    >

       {/* Shadcn Section */}
       
      
       <section className="lg:w-full lg:h-[67px] lg:pt-[10px] lg:pr-[27px] lg:pb-[10px] lg:pl-[27px]  lg:items-center lg:justify-center lg:border-b border-[#DCDCDC]">
        <div className="md:flex lg:flex items-center ml-[-10px] ">
          <div className="lg:w-[24px] lg:h-[24px] lg:gap-[0px] flex items-center justify-center">
            {/* Briefcase Icon */}
            <BriefcaseBusiness className="lg:w-[20px] lg:h-[20px] lg:text-[#525252]" />
          </div>
          {!isCollapsed && (
            <div className="lg:w-[58px] lg:h-[24px]">
              <h3 className="lg:font-medium lg:text-[16px] lg:leading-[24px] lg:text-left lg:text-[#0A0A0A]">
                Shadcn
              </h3>
            </div>
          )}
        </div>
        <button
        onClick={toggleSidebar}
        className="lg:w-[20px] lg:h-[20px] lg:text-[#525252] flex items-center justify-center border-b ml-[-10px] mt-3 lg:border-[#dcdcdc] 
        border rounded-sm text-white"
      >
        {isCollapsed ? ">" : "<"}
        {/* {isCollapsed ? <AlignJustify /> : <AlignJustify />} */}
      
        
      </button>
      </section>

      {/* Toggle Button */}
      
        


     
       
       

      {/* Toggle Button */}
      {/* <button
        onClick={toggleSidebar}
        className="lg:w-[40px] lg:h-[40px] flex items-center justify-center border-b mx-2 lg:border-[#dcdcdc] border rounded-sm lg:bg-[#F97316] text-white"
      >
        {isCollapsed ? ">" : "<"}
       
      </button> */}

      {/* Menu Items */}
      <div className="flex flex-col mt-4">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} className="flex items-center gap-4  w-[500px] px-4 my-[2px] py-[17px]  rounded-sm hover:bg-[#F97316] hover:text-white">
            {/* Icon */}
            <span className="text-[#525252]">{item.icon}</span>
            {/* Label */}
            {!isCollapsed && (
              <span className="text-[#525252] lg:font-normal lg:text-[16px] lg:leading-[19.36px]">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
