"use client ";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import search from "../../assets/search.png";
import { Search } from "lucide-react";
import { MapPin } from "lucide-react";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { FiX } from "react-icons/fi";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Newpagedesign: React.FC = () => {
  const [daysago, setdaysago] = useState(4);
  const [getdate, setgatedate] = useState(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getDate() - 12).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  });
  const [hamburger, sethamburger] = useState(false);
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (hamburger && !event.target.closest(".menu-container")) {
        sethamburger(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [hamburger]);
  return (
    <main className="h-screen w-full flex flex-col gap-2">
      <header>
        <nav className="flex w-full justify-between items-center rounded-[6px] px-1 m-1 bg-accent text-accent-foreground py-4">
          <div className="font-bold text-xl flex m-3 ">Jobtale</div>

          <div className=" md:flex items-center hidden   gap-16 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className=" bg-accent px-0">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-red-300 h-[100px] w-[100px] ">
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link className="text-sm" href={"/pricing"}>
              Pricing{" "}
            </Link>
            <Link className="text-sm" href={"#"}>
              About US{" "}
            </Link>
            <Link className="text-sm" href={"#"}>
              Blog
            </Link>
          </div>

          <div className="flex auth items-center gap-3 px-2 mx-3  ">
            <button className="auth.group hidden md:flex bg-accent hover:bg-blue-500 hover:text-white text-sm border-2 rounded-[10px] px-2 py-1 transition-colors duration-300">
              Login
            </button>
            <button className="hidden md:flex bg-blue-500 hover:bg-slate-50 hover:text-black text-white border-gray-500 text-sm sm:text-[16px] font-medium py-2 rounded-[10px] px-3 transition-colors duration-300">
              SignUp
            </button>
            <div className="flex px-2 sm:hidden items-center ">
              <Menu onClick={() => sethamburger(!hamburger)} />
              {hamburger &&(

                <div
                className="md:hidden z-30 absolute h-screen top-0 -right-7  flex flex-col bg-orange-200 py-7 px-4 w-full"
                 >
                <button onClick={() => sethamburger(!hamburger)}>
                  <FiX />
                </button>
                <div className="flex flex-col gap-4 pt-5 ">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="flex flex-start flex-col">
                        <NavigationMenuTrigger className=" p-3 w-[310px]">
                          Features
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-red-300 h-[100px] w-[310px] ">
                          <NavigationMenuLink className="p-2 w-56">
                            Link
                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>

                  <Link
                    className="text-sm hover:bg-slate-300 w-full"
                    href={"/"}
                    >
                    Pricing{" "}
                  </Link>
                  <Link className="text-sm hover:bg-accent w-full" href={"#"}>
                    About US{" "}
                  </Link>
                  <Link className="text-sm hover:bg-accent w-full" href={"#"}>
                    Blog
                  </Link>
                </div>
              </div>
               
            )}
            </div>
          </div>
        </nav>
      </header>
      <div className="flex flex-col gap-4 justify-center items-center ">
        <div className="text-sm flex items-center justify-center text-blue-500">
          #1 Job Portal
        </div>
        <div className="text-4xl flex flex-col gap-1 tracking-tight font-[500] items-center justify-center ">
          {" "}
          <p className="text-center flex">Build Your very own Job </p>{" "}
          <p className="flex text-center"> portal with Joblate</p>
        </div>
        <p className="text-md opacity-[50%] text-center ">
          Discover Your next Career move with confidence and ease
        </p>
        <div className="flex gap-2 items-center justify-center  ">
          <div className="z-10 -mr-10 cursor-pointer ">
            <Search />
          </div>
          <input
            type="text"
            placeholder="Search Jobs"
            className="border py-2 w-[100px] sm:w-[220px] hover:bg-accent hover:text-accent-foreground outline-none placeholder:text-center  rounded-[10px] "
          />
          <div className="flex border  rounded-[8px] hover:bg-accent items-center">
            <div className="mr-1">
              <MapPin />
            </div>
            <input
              type="text"
              placeholder="Search Location"
              className="border-none  py-2 w-[100px] sm:w-[250px] hover:bg-accent  hover:text-accent-foreground outline-none  rounded-[10px]"
            />
            <button className="rounded-[10px] text-xs sm:text-sm bg-blue-400 py-2 px-2 z-10 -ml-10 ">
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/Untitled1.jpg"
            className="h-[40px]  w-[40px]  rounded-[50%] border -ml-3  "
          ></img>
          <img
            src="/untitled2.jpg"
            className="h-[40px] z-10  w-[40px]   rounded-[50%] border -ml-3  "
          ></img>
          <img
            src="/untitled3.jpg"
            className="h-[40px] z-20 w-[40px]  rounded-[50%] border -ml-3  "
          ></img>
          <span className="flex items-center justify-center gap-[4px] ">
            <Star className="h-4 w-4 " /> <Star className="h-4 w-4 " />
            <Star className="h-4 w-4 " />
            <Star className="h-4 w-4 " />
            <Star className="h-4 w-4 " /> 4.9
          </span>
        </div>

        <div>
          <img
            src={"primage.png"}
            alt="hero image"
            className="clarity-contrast-200 h-[350px] w-[650px] sm:h-[450px] sm:w-[800px] md:h-[720px] md:w-[1200px] bg-current  "
          />
        </div>
      </div>

      <h2 className="font-bold font-serif text-3xl text-center  tracking-normal ">
        Job picks for You{" "}
      </h2>
      <div className="grid   sm:grid-cols-2   h-fit w-full container sm:place-items-center  justify-items-center  md:gap-x-[14rem]    gap-y-14">
        <div className="relative h-[250px]      w-[300px] sm:h-[250px] sm:w-[300px] md:h-[250px] md:w-[400px] ">
          <div className="flex text-white   rounded-[10px] sm:text-sm text-sm justify-center overflow-hidden  text-center font-semibold bg-blue-500 absolute w-full h-full  ">
            Featured
          </div>
          <div className="flex   flex-col absolute cover-container bg-white border overflow-hidden  z-10 w-full rounded-[10px]  h-full top-5  ">
            <div className="font-serif m-2 flex gap-2 ">
              {" "}
              <img
                style={{ height: "30px", width: "30px" }}
                src="/xiomilogo.png"
              />
              <div className="flex flex-col">
                <span className=" text-sm sm:text-xl ">
                  Mobile App Developer{" "}
                </span>
                <span className=" text-xs sm:text-sm opacity-[50%] ">
                  Xiomi
                </span>
              </div>
            </div>
            <div className="flex  justify-between px-5 py-1.4 h-fit ">
              <ul className="text-xs  sm:text-sm text-slate-700  h-fit  gap-2 flex flex-col font-bold">
                <li>Xiomi</li>
                <li>Smartphones/Electronics</li>
                <li>Listed company</li>
              </ul>
              <ul className="text-xs  sm:text-sm text-slate-700  h-fit  gap-2 flex flex-col font-bold">
                <li className="flex ">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" /> Beijing
                </li>
                <li className="flex">
                  <DollarSign className="h-4 w-4 sm:h-5 sm:w-5" /> 15k-26k
                </li>
              </ul>
            </div>
            <div className="flex h-fit py-2  ">
              <button className="bg-blue-300 text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3 py-1 m-1">
                Feature 500
              </button>
              <button className="bg-blue-300 text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3 py-1 m-1">
                Innovation Hub
              </button>
              <button className="bg-blue-300 text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3  py-1 m-1">
                Global presence
              </button>
            </div>

            <div className="flex items-center justify-between    h-full px-4">
              <p className="text-sm text-blue-500 ">
                <span>{daysago}days ago </span>
              </p>
              <button className="bg-blue-700 text-white text-sm  rounded-[10px] px-3 py-1 hover:bg-accent hover:text-accent-foreground border m-1">
                Job Details{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="relative   h-[250px] w-[300px] sm:h-[250px] sm:w-[300px] md:w-[400px] md:h-[250px]">
          <div className="flex text-white    rounded-[10px] justify-center overflow-hidden  text-center font-semibold bg-blue-500 absolute w-full h-full  ">
            Featured
          </div>
          <div className="flex flex-col   absolute cover-container bg-white border overflow-hidden  z-10 w-full rounded-[10px]  h-full top-5  ">
            <div className="font-serif m-2 flex gap-2 ">
              {" "}
              <img
                style={{ height: "30px", width: "30px", zoom: "1.2" }}
                src="/samsunglogo.png"
              />
              <div className="flex flex-col">
                <span className="text-xl ">Hardware Design Engineer </span>
                <span className="text-sm opacity-[50%] ">Samsung</span>
              </div>
            </div>
            <div className="flex  justify-between px-5 py-1.4 h-fit ">
              <ul className="text-sm opacity-[50%]  h-fit  gap-2 flex flex-col font-bold">
                <li>Samsung</li>
                <li>Technology/Electronics</li>
                <li>Listed company</li>
              </ul>
              <ul className="text-sm opacity-[50%]  h-fit  gap-2 flex flex-col font-bold">
                <li className="flex ">
                  <MapPin /> Seol
                </li>
                <li className="flex">
                  <DollarSign /> 15k-26k
                </li>
              </ul>
            </div>
            <div className="flex h-fit py-2  ">
              <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-1 text-center py-1 m-1">
                Global Tech Loader
              </button>
              <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3 py-1 m-1">
                Hardware Innovation
              </button>
              <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3  py-1 m-1">
                Global presence
              </button>
            </div>

            <div className="flex items-center justify-between    h-full px-4">
              <p className="text-sm text-blue-500 ">
                <span>{daysago}days ago </span>
              </p>
              <button className="bg-blue-700 text-white text-sm  rounded-[10px] px-3 py-1 hover:bg-accent hover:text-accent-foreground border m-1">
                Job Details{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="relative    h-[250px] w-[300px] sm:h-[250px] sm:w-[300px]  md:h-[250px] md:w-[400px]">
          <div className="flex text-white rounded-[10px]   justify-center overflow-hidden  text-center font-semibold bg-blue-500 absolute w-full h-full  ">
            Featured
          </div>
          <div className="flex   flex-col absolute cover-container bg-white border overflow-hidden  z-10 w-full rounded-[10px]  h-full top-5  ">
            <div className="font-serif m-2 flex gap-2 ">
              {" "}
              <img style={{ height: "30px", width: "30px" }} src="/uiux.jpg" />
              <div className="flex flex-col">
                <span className="text-sm sm:text-xl ">
                  Hardware Design Engineer{" "}
                </span>
                <span className="text-xs sm:text-sm opacity-[50%] ">
                  Samsung
                </span>
              </div>
            </div>
            <div className="flex  justify-between px-5 py-1.4 h-fit ">
              <ul className="text-xs sm:text-sm opacity-[50%]  h-fit  gap-2 flex flex-col font-bold">
                <li>Samsung</li>
                <li>Technology/Electronics</li>
                <li>Listed company</li>
              </ul>
              <ul className="text-sm opacity-[50%]  h-fit  gap-2 flex flex-col font-bold">
                <li className="flex ">
                  <MapPin /> Seol
                </li>
                <li className="flex">
                  <DollarSign /> 15k-26k
                </li>
              </ul>
            </div>
            <div className="flex h-fit py-2  ">
              <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-1 text-center py-1 m-1">
                Global Tech Loader
              </button>
              <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3 py-1 m-1">
                Hardware Innovation
              </button>
              <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3  py-1 m-1">
                Global presence
              </button>
            </div>

            <div className="flex items-center justify-between    h-full px-4">
              <p className="text-sm text-blue-500 ">
                <span>{daysago}days ago </span>
              </p>
              <button className="bg-blue-700 text-white text-sm  rounded-[10px] px-3 py-1 hover:bg-accent hover:text-accent-foreground border m-1">
                Job Details{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="relative h-[250px]   w-[300px] sm:h-[250px] sm:w-[300px] md:h-[250px] md:w-[400px] ">
          <div className="flex text-white rounded-[10px]    justify-center overflow-hidden  text-center font-semibold bg-blue-500 absolute w-full h-full  ">
            Featured
          </div>
          <div className="flex    flex-col absolute cover-container bg-white border overflow-hidden  z-10 w-full rounded-[10px]  h-full top-5  ">
            <div className="font-serif m-2 flex gap-2 ">
              {" "}
              <img
                style={{ height: "30px", width: "30px" }}
                src="/Spotify.png"
              />
              <div className="flex flex-col">
                <span className="text-sm sm:text-xl ">Data Scientist </span>
                <span className="text-xs sm:text-sm  opacity-[50%]">
                  Spotify
                </span>
              </div>
            </div>
            <div className="flex  justify-between px-5 py-1.4 h-fit ">
              <ul className="text-xs sm:text-sm opacity-[50%]  h-fit  gap-2 flex flex-col font-bold">
                <li>spotify</li>
                <li>Music/Entertainment </li>
                <li>Listed company</li>
              </ul>
              <ul className="text-xs sm:text-sm opacity-[50%]  h-fit  gap-2 flex flex-col font-bold">
                <li className="flex ">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 " /> Stockholm
                </li>
                <li className="flex">
                  <DollarSign className="h-4 w-4 sm:h-5 sm:w-5" /> 15k-26k
                </li>
              </ul>
            </div>
            <div className="flex h-fit py-2  ">
              <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-1 text-center py-1 m-1">
                Market Disruptor
              </button>
              <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3 py-1 m-1">
                Music Streaming
              </button>
              <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3  py-1 m-1">
                Data analytics
              </button>
            </div>

            <div className="flex items-center justify-between    h-full px-4">
              <p className="text-sm text-blue-500 ">
                <span>{getdate}</span>
              </p>
              <button className="bg-blue-700 text-white text-sm  rounded-[10px] px-3 py-1 hover:bg-accent hover:text-accent-foreground border m-1">
                Job Details{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-8">
        <button className="bg-white text-blue-500 border border-blue-400 hover:bg-accent  text-sm  rounded-[10px] px-3 py-1 ">
          More Oppurtunities
        </button>
      </div>
      <div>
        <div className="flex justify-center items-center font-medium text-3xl">
          Latest Job Oppurtunities
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
};
export default Newpagedesign;
