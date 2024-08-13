"use client"
import Link from "next/link";
import React from "react";

const JobPortalDesign  = () => {
  return (
        <>
      <header className="flex w-full   h-fit">
        <nav className="flex justify-around sm:justify-between items-center w-full">
            <h2 className=" text-lg sm:text-2xl font-bold px-4 py-3 bg-gradient-to-r from-red-500 to-orange-500  text-transparent bg-clip-text">JobHunt</h2>
            <div className=" hidden sm:flex gap-14 items-center">

            <Link href={'#'}>Home </Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Features</Link>
          
            </div>
          <div className="flex gap-2 sm:gap-6 pr-4 sm:pr-8">
            <button  className=" border text-xs hover:opacity-70  px-4 py-1 rounded-[10px] bg-[aqua] text-black">
              Login
              </button>
              <button className="border text-xs sm:text-sm filter drop-shadow-lg  hover:opacity-70 px-5 py-1 rounded-[10px] bg-gradient-to-r from-[#efa41a] to-orange-500 ">
                  SignIn
              </button>
          </div>
          {/* <div><GiHamburgerMenu/></div> */}

        </nav>
      </header>
      <main className="flex  w-full">
      <section className="">



      </section>
      <section className="">
            <div className="h-[200px] w-[200px] border border-tr-[40px] bg-black"></div>
      </section>
      </main>
      </>
     
  );
};

export default JobPortalDesign ;
