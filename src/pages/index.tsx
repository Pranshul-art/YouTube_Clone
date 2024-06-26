import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/Appbar";
import { SideBar } from "@/components/SideBar";



export default function Home() {
  return (
   <div className="bg-gray-900 ">
    <div className="">
      <Appbar/>
    </div>
    
   
    <div  className="grid grid-cols-8 ">
      <div className="col-span-1 overscroll-contain">
        <SideBar/>
      </div>
      <div  className="col-span-7  md:ml-28 sm:ml-36 lg:ml-8">
        <VideoGrid/> 
      </div>
      
    </div>
    
   </div>
  );
}
