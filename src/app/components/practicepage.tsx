"use client "
import React from "react";
import {Input} from "@/components/ui/input"
import { useState, useEffect } from "react";
import Link from "next/link";
import { EyeOff, icons } from "lucide-react";
import { Eye } from "lucide-react";
import { MdMessage } from "react-icons/md";

import Newpagedesign from "./page design/Newpagedesign";

export default function PracticePage() {
    const [password,setpassword] = useState(true);
    const iconstyle = {transition: "opacity 0.3s ease-in-out"}
    const [count,setcount]= useState(0);
    const handleClick = ()=>{
        setcount(count+1);
        
    }
    useEffect(() => {
        console.log(count);
    }, [count]);
    return (
        <main className="h-screen flex flex-col items-center w-full">
            
            <button onClick={handleClick}> Click </button>
                        
                        


         </main>
        

    );
}