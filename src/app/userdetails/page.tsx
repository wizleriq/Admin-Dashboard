import Image from "next/image";
import UserTable from "../../components/UserTable"
import {Bell, CircleHelp, ChevronDown, ArrowUpRight, Filter, CirclePlus, Search, User,} from 'lucide-react'
// import PostTable from "@/components/posts/PostTable";
import UserDetailsTable from"@/components/userdetails/UserDetailsTable";
import { Pagination } from "@/components/ui/pagination";
import profilepic from "@/components/Img/profilepic.jpeg";
import vector from "@/components/Img/Vector.png"
import Circ from "@/components/Img/Circ.png"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Page() {
  return (
    <div className="lg:w-[1200px] lg:h-[1024px] w-screen h-[2545px] top-[-87px] left-[1454px] gap-[0px] lg:bg-[#FAFAFA] bg-[#FAFAFA]">
      
    {/*nav bar */}
   <section className="lg:w-[1200px] lg:h-[67px] lg:left-[298px] lg:pt-[13.5px] lg:pr-[10px] lg:pb-[13.5px] lg:pl-[10px] lg:gap-[0px] lg:border-t-[0px] lg:border-r-[0px]  lg:border-b-[0.5px]  lg:border-l-[0px]  lg:border-[#DCDCDC] lg:block hidden  ">
    {/* <div className="lg:flex lg:justify-between"> */}
    <div className="lg:flex lg:justify-between">
     
    <div className="lg:w-[266px] lg:h-[40px] lg:rounded-md lg:border lg:border-gray-300 lg:relative">
  <Search className="lg:absolute lg:w-[16px] lg:[p-2.13px] lg:h-[16px] lg:left-3 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:text-gray-500" />

  <input 
    type="text" 
    placeholder="Search option..." 
    className="lg:w-full lg:h-full lg:pl-10 lg:pr-[12px] lg:py-[0px] lg:border-none rounded-sm lg:outline-none lg:text-[14px] lg:font-normal lg:leading-[20px] lg:text-left lg:text-[#525252]"
  />
</div>


    <div className="lg:flex lg:justify-between lg:w-[152px] lg:h-[40px] lg:gap-[20px] lg:items-center">
     <div className="lg:w-[24px] lg:h-[24px] lg:gap-[0px]">
     <Bell className="lg:w-[20] lg:h-[20px] lg:gap-[0px] lg:t-[2px] lg:left-[3px] lg:border-t-[0px] lg:border-r-[0px]  lg:border-b-[0px]  lg:border-l-[0px] " />
      </div>
      <div className="lg:w-[24px] lg:h-[24px] lg:gap-[0px]">
        <CircleHelp className="lg:w-[20px] lg:h-[20px] lg:gap-[0px] lg:t-[2px] lg:left-[2px] lg:border-t-[0px] lg:border-r-[0px]  lg:border-b-[0px]  lg:border-l-[0px] " />
      </div>
   
      <div className="lg:w-[64px] lg:h-[40px] lg:gap-[4px] lg:flex lg:justify-between">
        <div className="lg:w-[40px] lg:h-[40px] lg:gap-[0px]">
     <Image src={profilepic} alt="Profile Picture" className="lg:w-[40px] lg:h-[40px] lg:gap-[0px] lg:rounded-full"  />
       
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
   <div className=" lg:mx-8 mx-5 lg:w-[0px] lg:h-[0px] lg:top-[0px] lg:left-[0px] lg:gap-[0px] w-[376px] h-[3206.78px] top-[-14px] left-[6229px] gap-[0px] " >

    {/*Profile */}
    <section className="lg:w-[544px] lg:h-[166px]  lg:bg-transparent lg:top-[101px] lg:mt-7 lg:left-[328px] lg:gap-[20px]">
        <div className="lg:w-[337px] lg:h-[80px]  lg:bg-transparent  lg:gap-[24px] lg:flex">
        {/*Inner profile */}
        <div className="lg:w-[80px] lg:h-80px] lg:bg-transparent lg:gap-[0px]">
        <Image src={profilepic} alt="Profile Picture" className="lg:w-[80px] lg:h-[80px] lg:gap-[0px] lg:rounded-full"  />
        </div>
        <div className="lg:w-[233px] lg:h-[67px]  lg:bg-transparent  lg:gap-[0px]">
        <div className="lg:w-[233px] lg:h-[44px]  lg:bg-transparent  lg:gap-[0px]">
            <h1 className="lg:font-medium lg:text-[35px] lg:leading-[43.57px] lg:text-left">
            Gustavo Silas
            </h1>
            

            <p className="lg:w-[190px] lg:h-[24px] lg:bg-transparent lg:gap-[0px] lg:text-[16px] lg:font-normal
            lg:leading-[24px] lg:text-left lg:text-[#6a6a6a]">
           gustavosilas@gmail.com
            </p>

        </div>

        </div>

        </div>

        <div className="lg:w-[544px] lg:h-[22px]  lg:bg-transparent lg:gap-[0px] lg:mt-5">
       <h2 className="lg:text-[18px] lg:font-normal lg:leading-[21.78px] lg:text-left ">A Farmer that loves making fresh food produce from his farm</h2>
        </div>

        <div className="lg:w-[531px] lg:h-[24px]  lg:bg-transparent  lg:gap-[40px] lg:mt-[20px] lg:flex">
        <div className="lg:w-[180px] lg:h-[24px]   lg:bg-transparent lg:gap-[4px] lg:flex">
    <h3 className="lg:w-[40px] lg:h-[19px] lg:gap-[0px] lg:text-center
    lg:text-[16px]  lg:font-normal">
    3.3/5
    </h3>
    <Image src={vector} alt="Profile Picture" className="lg:w-[24px] lg:h-[24px] lg:pt-[2px] lg:pl-[2px] lg:pb-[2.98px]
    lg:pr-[2px] lg:gap-[0px]" />
   <Image src={vector} alt="Profile Picture" className="lg:w-[24px] lg:h-[24px] lg:pt-[2px] lg:pl-[2px] lg:pb-[2.98px]
    lg:pr-[2px] lg:gap-[0px]" />
  <Image src={vector} alt="Profile Picture" className="lg:w-[24px] lg:h-[24px] lg:pt-[2px] lg:pl-[2px] lg:pb-[2.98px]
    lg:pr-[2px] lg:gap-[0px]" />
     <Image src={vector} alt="Profile Picture" className="lg:w-[24px] lg:h-[24px] lg:pt-[2px] lg:pl-[2px] lg:pb-[2.98px]
    lg:pr-[2px] lg:gap-[0px]" />
     <Image src={vector} alt="Profile Picture" className="lg:w-[24px] lg:h-[24px] lg:pt-[2px] lg:pl-[2px] lg:pb-[2.98px]
    lg:pr-[2px] lg:gap-[0px]" />
   

     </div>
     <div className="lg:w-[108px] lg:h-[19px]  lg:bg-transparent  lg:gap-[0px]">
        <h3 className="lg:text-[16px] lg:font-normal lg:text-left">
        (50  Products)
        </h3>
        
     </div>
   
    

<div className="lg:w-[140px] lg:h-[15px]  lg:bg-transparent  lg:gap-[5px]  lg:items-center lg:text-center 
lg:my-auto lg:flex lg:justify-between">
<div className="lg:w-[68px] lg:h-[15px]  lg:bg-transparent  lg:gap-[0px]">
<h3 className="lg:text-[12px]  lg:font-normal lg:text-left"> Date Added</h3>
        
    </div>
   <div className="lg:w-[54px] lg:h-[15px]">
<h3 className="lg:text-[12px]  lg:font-normal lg:text-left"> 
        08-01-23
        </h3>
        
    </div>
        
     </div>

        </div>

    </section>

     {/*Profile ends */}
     <section className="lg:w-[1044px] lg:h-[134px] lg:top-[97px] lg:gap-[16px] lg:items-center  lg:flex  lg:justify-between  lg:bg-green lg:mt-8 mt-5 w-[376px] h-[450px] top-[-14px] left-[6229px] gap-[0px] lg:bg-transparent ">
   
 <div className="lg:w-[337.33px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px]  w-[376px]  h-[134px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[16px] rounded-lg border-t-[1px] border-r-[0px] border-b-[0px] border-l-[0px] lg:bg-white bg-white flex-col justify-center items-center lg:mt-0 lg:shadow-2xl ">


  <div className="lg:flex lg:w-[289.33px] lg:h-[24px] lg:gap-[0px] lg:justify-between flex w-[336px]
  h-[24px] gap-[0px] justify-between lg:bg-none lg:items-center items-center">
  <h4 className="lg:w-[105px] lg:h-[17px] lg:gap-[0px] lg:font-medium lg:text-[14px] lg:leading-[16.94px] lg:text-left lg:text-[#0A0A0A] w-[105px] h-[20px] g-[0px] text-[14px] font-medium leading-[16.94px] text-left  lg:items-center items-center text-[#0A0A0A]">
  Total Products
  </h4>
  <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px]"><User className="lg:top-[5px] lg:left-[6px] lg:gap-[0px] lg:border-none " /></p>
  </div>
 
  <div className="lg:w-[289.33px] lg:h-[44px] lg:gap-[0px] w-[336px] h-[44px] gap-[0px] items-center justify-center"> 
 <div className="lg:w-[289.33px] lg:h-[29px] lg:gap-[0px] w-[336px] h-[29px] gap-[0px]">
 <h1 className="lg:font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#0A0A0A] text-[22px] font-semibold leading-[29.05px] text-left text-[#0A0A0A] lg:items-center items-center justify-center">
4,000
 </h1>
 </div>
 <div className="lg:w-[289.33px] lg:h-[15px] lg:gap-[0px] w-[336px] h-[15px] gap-[0px] lg:mt-1 mt-1">
 <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#525252] font-normal text-[12px]
  leading-[12.52px] text-left lg:items-center items-center text-[#525252]"> 
+10% from last month
 </p>
 </div>
  </div>
 </div>

 <div className="lg:w-[337.33px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px]  w-[376px]  h-[134px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[16px] rounded-lg border-t-[1px] border-r-[0px] border-b-[0px] border-l-[0px] lg:bg-white bg-white flex-col justify-center items-center lg:mt-0  lg:shadow-2xl mt-3">

  <div className="lg:flex lg:w-[289.33px] lg:h-[24px] lg:gap-[0px] lg:justify-between flex w-[336px]
  h-[24px] gap-[0px] justify-between lg:bg-none lg:items-center items-center">
  <h4 className="lg:w-[105px] lg:h-[17px] lg:gap-[0px] lg:font-medium lg:text-[14px] lg:leading-[16.94px] lg:text-left lg:text-[#0A0A0A] w-[105px] h-[20px] g-[0px] text-[14px] font-medium leading-[16.94px] text-left  lg:items-center items-center text-[#0A0A0A]">
  Total Orders
  </h4>
  {/* <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px] "><DollarSign className="lg:top-[5px] lg:left-[6px] 
  lg:gap-[0px] lg:border-none " /></p> */}
   <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px] "> <Image src={Circ} alt="Profile Picture" className=""/></p>
  </div>
 
  <div className="lg:w-[289.33px] lg:h-[44px] lg:gap-[0px] w-[336px] h-[44px] gap-[0px] items-center justify-center"> 
 <div className="lg:w-[289.33px] lg:h-[29px] lg:gap-[0px] w-[336px] h-[29px] gap-[0px]">
 <h1 className="lg:font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#0A0A0A] text-[22px] font-semibold leading-[29.05px] text-left text-[#0A0A0A] lg:items-center items-center justify-center">
1,000

 </h1>
 </div>
 <div className="lg:w-[289.33px] lg:h-[15px] lg:gap-[0px] w-[336px] h-[15px] gap-[0px] lg:mt-1 mt-1">
 <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#525252] font-normal text-[12px]
  leading-[12.52px] text-left lg:items-center items-center text-[#525252]"> 
+20% from last month
 </p>
 </div>
  </div>
 </div>

 <div className="lg:w-[337.33px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px]  w-[376px]  h-[134px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[16px] rounded-lg  border-t-[1px] border-r-[0px] border-b-[0px] border-l-[0px] lg:bg-white bg-white flex-col justify-center items-center lg:mt-0  lg:shadow-2xl mt-3">


  <div className="lg:flex lg:w-[289.33px] lg:h-[24px] lg:gap-[0px] lg:justify-between flex w-[336px]
  h-[24px] gap-[0px] justify-between lg:bg-none lg:items-center items-center">
  <h4 className="lg:w-[105px] lg:h-[17px] lg:gap-[0px] lg:font-medium lg:text-[14px] lg:leading-[16.94px] lg:text-left lg:text-[#0A0A0A] w-[105px] h-[20px] g-[0px] text-[14px] font-medium leading-[16.94px] text-left  lg:items-center items-center text-[#0A0A0A]">
  Total Sales
  </h4>
  <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px] "><ArrowUpRight className="lg:top-[5px] lg:left-[6px] lg:gap-[0px] lg:border-none " /></p>
  </div>
 
  <div className="lg:w-[289.33px] lg:h-[44px] lg:gap-[0px] w-[336px] h-[44px] gap-[0px] items-center justify-center"> 
 <div className="lg:w-[289.33px] lg:h-[29px] lg:gap-[0px] w-[336px] h-[29px] gap-[0px]">
 <h1 className="lg:font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#0A0A0A] text-[22px] font-semibold leading-[29.05px] text-left text-[#0A0A0A] lg:items-center items-center justify-center">
 $450,000.00
 </h1>
 </div>
 <div className="lg:w-[289.33px] lg:h-[15px] lg:gap-[0px] w-[336px] h-[15px] gap-[0px] lg:mt-1 mt-1">
 <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#525252] font-normal text-[12px]
  leading-[12.52px] text-left lg:items-center items-center text-[#525252]"> 
+150% from last month
 </p>
 </div>
  </div>
 </div>


    </section>
    
    <section className="lg:w-[1044px] lg:h-[59px] lg:top-[259px] lg:left-[328px] lg:gap-[0px] lg:justify-between lg:mt-5  w-[376px] h-[59px] top-[259px] left-[328px] gap-[0px] justify-between mt-3 lg:flex flex lg:items-center items-center">
  <div className="lg:w-[328px] lg:h-[59px] lg:gap-[10px] w-[170px] h-[59px]  lg:block block lg:justify-between  justify-between " >

    <div className="lg:w-[328px] lg:h-[34px] lg:gap-[0px] w-[180px] h-[38px] gap-[0px] " >
      <div className="lg:w-[328px] lg:h-[50px] lg:g-[0px] ">
      <h2 className="lg:font-semibold lg:text-[28px] lg:leading-[33.89px] lg:text-left lg:text-[#000000] text-[28px font-semibold leading-[33.89px] text-left text-[#000000] lg:items-center items-center justify-center" >
Products
</h2>
<div className="lg:w-[328px] lg:h-[15px] lg:gap-[0px]  h-[24px] lg:mt-2 gap-[0px] " > 
    <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#000000] font-normal text-[12px] leading-[14.52px] text-left text-[#000000] lg:block hidden  lg:items-center items-center justify-center">
    Manage & Track users products
  
    </p>
    <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#000000] lg:hidden block lg:items-center items-center justify-center font-normal text-[12px] leading-[14.52px] text-left text-[#000000]">Manage your products </p>
    </div>
      </div>
    </div>
  </div>

  <div className=" lg:w-[200px] lg:h-[40px] lg:gap-[10px]  w-[193px] h-[40px] gap-[10px] lg:flex flex lg:justify-between  justify-between lg:items-center items-center lg:bg-transparent  sm:bg-red-600 "> 
    <div className="lg:w-[88px] lg:h-[40px]  lg:pt-[10px] lg:pr-[5px] lg:pb-[10px] lg:pl-[5px] lg:gap-[0px] lg:rounded-md   lg:border-[0.5px]  lg:border-[#CBD5E1] lg:flex flex lg:justify-between lg:items-center  w-[50px] h-[40px]  pt-[10px] pr-[5px] pb-[10px] pl-[5px] gap-[0px]  rounded-md  border-[0.5px]  border-[#CBD5E1]">

      <div className="lg:w-[20px] lg:h-[20px] lg:pt-[2.5px] lg:pr-[1.67px] lg:pb-[2.5px] lg:pl-[1.67px] lg:gap-[0px] w-[20px] h-[20px] pt-[1.5px] pr-[0px] pb-[1.5px] pl-[0px] gap-[0px] lg:bg-transparent ">
      <Filter className="lg:w-[16.67px] lg:h-[15px] lg:top-[2.5px] lg:left-[1.67px] lg:gap-[0px] w-[16.67px] h-[15px] top-[2.5px] left-[1.67px] gap-[0px]" />
      </div>

    <p className=" hidden lg:block lg:w-[38px] lg:h-[19px] lg:gap-[0px] lg:font-normal lg:text-[16px] lg:leading-[19.36px] lg:text-left lg:text-[#000000] ">Filter</p>
    </div>
 <div className="lg:flex flex lg:justify-between justify-between lg:w-[115px] lg:h-[40px]  lg:pt-[8px] lg:pr-[16px] lg:pb-[8px] lg:pl-[16px] lg:gap-[8px] border rounded-md lg:bg-[#F97316] bg-[#F97316]">

 <div className="lg:w-[16px] lg:h-[16px] lg:gap-[0px]">
     <CirclePlus className=" lg:w-[17px] lg:h-[20.33px] lg:top-[1.33px] lg:left-[1.33px] lg:gap-[0px] lg:text-[#fff]  lg:justify-between lg:items-center" />
     {/* width: 13.33px;
height: 13.33px;
top: 1.33px;
left: 1.33px;
gap: 0px;
border: 2px 0px 0px 0px;
opacity: 0px; */}

     {/* <CirclePlus className="lg:w-[13.33px] lg:h-[13.33px] lg:top-[1.33px] lg:left-[1.33px] lg:gap-[0px] border  */}
     </div>
     <div className="lg:w-[284px] lg:h-[24px] lg:gap-[0px]">
    <h3 className="lg:font-medium lg:text-[12px] lg:leading-[24px] lg:text-left lg:text-[#fff]">
    Add User
    </h3>
     </div>
 </div>
    </div>
    </section> 
    <UserDetailsTable name="princess" />  
    <Pagination />

     {/* <section className="lg:flex lg:justify-center lg:mt-16 lg:flex-col lg:w-[398px] lg:h-[40px] lg:top-[857px] lg:left-[629px] lg:gap-[80px] lg:bg-yellow-500  lg:items-center ">
    width: Hug (398px)px;
height: Hug (40px)px;
top: 857px;
left: 629px;
gap: var(--space-x-1);
opacity: 0px;

      next page
    </section>  */}
    </div>
   </div>

  )}