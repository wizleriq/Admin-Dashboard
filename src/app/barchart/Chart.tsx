"use client"
import React from 'react' 
import {BarChart as BarGraph, ResponsiveContainer, XAxis, YAxis, Bar} from "recharts"; 

type Props = {};

const data = [
    {
        name: "Jan",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Feb",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Mar",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Apr",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "May",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jul",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Aug",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Sep",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Oct",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Nov",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Dec",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
     
]

export default function barchat({}: Props) {
  return (
  <ResponsiveContainer width={'100%'} height={350}> 
<BarGraph data={data} className='lg:mt-24 lg:w-[624px] lg:h-[432px] lg:gap-[8px] w-[353.33px] mt-[30px] h-[257.99px] gap-[4.78px]'>
{/* width: Fill (624px)px;
height: Hug (432px)px;
gap: 8px;
opacity: 0px; */}

<XAxis 
dataKey={"name"}
tickLine={false}
axisLine={false}
stroke="#0F172A"
fontSize={12}
/>

<YAxis
tickLine={false}
axisLine={false}
stroke="#0F172A"
fontSize={12} />
<Bar dataKey={"total"} radius={[4,4,0,0]} fill="#F97316" />
    </BarGraph>
  </ResponsiveContainer>
  );
}

// import React from 'react'

// const Chart = () => {
//   return (
//     <div>chart</div>
//   )
// }

// export default Chart