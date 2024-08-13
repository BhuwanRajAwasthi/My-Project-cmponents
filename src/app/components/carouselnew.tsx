"use client"
import {useState, useEffect} from 'react'
import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
const Carouselnew = ()=>{
    
    return(
        <main className='h-screen w-full
         '>
            <nav className='flex w-[100%] h-[40px]' >
                <div className='flex gap-4 text-black font-[600]  '>
                    <Link href={'home.html'}> Home </Link>
                    <Link href={'Contact.html'}>Contact</Link>
                    <Link href={'info.html'}> info</Link>

                </div>

            </nav>
            <div className='h-[100%] w-[98%] flex  '>

                    <div className='h-[98%] w-[48%] bg-[#9dbf9e]'>
                        <h3>
                           Elephant
                        </h3>
                        <p>Lorem
                             ipsum dolor sit amet consectetur adipisicing elit. Odio voluptate esse tempora modi doloribus, ut nihil tenetur facere in exercitationem.</p>
                             <button>See more </button>
                    </div>
            <div className='h-[100vh] w-[100%] items-center '>

            <Carousel>
                <CarouselContent className='CarouselContent'>
                    <CarouselItem> <img  src="elephant.jpeg" alt="photo" /></CarouselItem>
                    <CarouselItem> <img src='Cheetah.jpg'></img></CarouselItem>
                    <CarouselItem > <img src="dinosaur.jpg" alt="pic" /> </CarouselItem>
                    <CarouselItem> <img  src="dophin.png" alt="pic" /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            </div>
         </div>
        </main>
    );
}
export default Carouselnew