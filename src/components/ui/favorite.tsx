"use client "
import React from "react"
import { useState } from "react"
const Favorite = () => {
    const [isFovorited,setisFavorited] = useState(false);
    const toggleFavorite = () =>{
        setisFavorited(!isFovorited);
    }
                    return(
                        <main className="h-screen w-full flex justify-center items-center">
                         <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                            <line x1="10" y1="10" x2="190" y2="10" stroke="black" stroke-width="2"/>
                            <rect x="10" y="20" width="180" height="70" stroke="blue" fill="none" stroke-width="4" stroke-dasharray="10,5"/>
                        </svg>
                        </main>
                    );
}
export default Favorite 