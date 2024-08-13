"use client"

import Image from 'next/image'
import React from 'react'

export default function Trusetedbysection() {
    return(
        <>
        <section className="w-[100vw] bg-[#f5f5f5] ">
            <h1 className="text-center block px-3 text-3xl py-3  font-bold font-playfair display">We are Glad to be Trusted by</h1>
            <div className='grid place-items-center mt-2 px-2 text-center opacity-90 justify-items-center grid-cols-2 gap-y-4 sm:grid-cols-4 md:grid-cols-3 sm:gap-x-6'>
                <div className="flex items-center  gap-1"  >

                <img src='/esewa.png' style={{height:'20px',width:'20px',mixBlendMode:'multiply'}}></img><span className='text-xs sm:text-base '>eSewa</span>
                </div>
                <div className="flex items-center gap-1"  >

                        <img src='/themisfit.jpg' style={{height:'20px',width:'20px',mixBlendMode:'multiply'}}></img><span className='text-xs sm:text-base'>TheMisFitOfNightRaid</span>
                    </div>
                    <div className="flex items-center "  >

                         <img src='/Khalti1.png' className='' style={{     height:'36px',width:'100px', mixBlendMode:'multiply'}}></img>
                    </div>
                    <div className="flex items-center gap-1"  >

                                <img src='/Neptechpal.png' style={{height:'25px',width:'25px',mixBlendMode:'multiply'}}></img><span className='text-xs sm:text-base'>Nep Tech Pal</span>
                        </div>
                        <div className="flex items-center gap-1"  >

                            <img style={{height:'36px',width:'100px',mixBlendMode:'multiply'}} src="/Googlewb.png" alt="" />
                        </div>

                
            </div>
            
        </section>
        </>
    );
}
    