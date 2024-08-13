import { ArrowRight } from "lucide-react";
import React from "react";
import ImageCard from "./herosection";
const MiddleSection = () => {
    return (
        <main className="h-screen w-full justify-center items-center ">
            <div className="flex h-[100%] w-full flex-col gap-1 px-10  bg-[#1C1C1C] text-white   justify-center items-center">
                <h2 className="font-bold font-serif text-5xl tracking-normal ">Visual Designer </h2>
                <h2 className="font-bold font-serif text-5xl tracking-normal px-1 ">Based in Indonesia</h2>
                <span className="text-sm">I am a UI/UX Designer passionate about creating Designs that not only meet the</span>
                <span className="text-sm">functional requirements but also delight users and evoke emotional connections.</span>
                <div className="flex  py-5 gap-1 items-center justify-center "><button className="flex bg-gradient-to-tr from-green-300  to-yellow-500 border-[2px] bg-[#ff7f2a] rounded-[17px] px-3 py-1 items-center gap-1 font-[600] text-md">Contact Me<ArrowRight className="h-5 w-5 text-black border rounded-[50%] bg-white"/></button></div>
                <div className="flex w-full h-max justify-between  ">
                    <ImageCard  imgUrl={"/imgUrl.jpg"}/>
                <ImageCard imgUrl={"/imgUrl.jpg"}/>
                </div>
            </div>
            
            

        </main>
    );

}
export default MiddleSection