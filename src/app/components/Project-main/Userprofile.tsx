"use client"
import { url } from "inspector";
import React, { useState } from "react";
import "./style/Userprofile.css";
import Link from "next/link";
import { DownloadIcon, LinkedinIcon } from "lucide-react";
import { clamp } from "framer-motion";
import { Edit2Icon } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Github } from "lucide-react";
interface ComponentProps {
  Name: string;
  Email: string;
  Phone: number;
  Age: number;
  Address: string;
  Bio: string;
  Image: string;
  LinkedIn: string;
  Skills: string[];
  Main_Profession: string;
  Experience: number;
  GitHub: string;
  Job_Experience: string[];
  Education: string;
  experience_company: string[];
  excompany_name: string[];
  Certifications: string[];
}
const Userprofile = ({
  Name,
  Main_Profession,
  Age,
  Email,
  Phone,
  Address,
  Bio,
  Image,
  LinkedIn,
  GitHub,
  Skills,
  Experience,
  Job_Experience,
  excompany_name,
  experience_company,
  Education,
  Certifications,
}: ComponentProps) => {
  const [github, setgithub] = useState("github.com/BhuwanRajAwasthi");
  let isclicked = false;
  let exbutton = document.getElementsByClassName("exbutton");
  let morebutton = document.getElementsByClassName("morebutton");
  
  
  
  
  return (
    <div className="h-screen main-container w-full flex flex-col sm:flex-row items-start justify-start   bg-[#eee] ">
      <div
        typeof="button"
        className="text-lg cursor-pointer hover:bg-green-400  flex border-slate-400 p-1 rounded absolute right-4 top-6 text-[#339733] border"
      >
        Edit <Edit2Icon />
      </div>
      <section className="flex h-full  border p-3 flex-col w-fit gap-[2vw]  items-center sm:flex-row ">
        <div className="flex mt-[5px]  pb-4 h-full gap-4 bg-[#f7f7f7] w-[90vw] sm:w-[40vw] sm:min-w-[300px]  relative  px-4  flex-col items-center ">
          <div
            typeof="button"
            onClick={() => {
              window.open(Image, "_self");
            }}
            className="h-[120px] cursor-pointer mt-2   w-[120px] border  rounded-[50%] "
            style={{
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              outline: "4px solid #c0c0c0",
            }}
          ></div>

          <div className="text-wrap    font-serif tracking-wide sticky   text-center text-lg  font-[500]">
            {Name}
          </div>
          <div className="text-wrap  font-serif p-1 text-start tracking-wide line-clamp-6">
            {Bio}
          </div>
          <div className="flex flex-row  gap-5 items-center">
            <div className="h-fit w-fit p-1  border flex item-center justify-center rounded-[50%]">
              <Link className="block w-full" href={GitHub}>
                <Github className="fill-black" />
              </Link>
            </div>
            <div className="h-fit w-fit p-1  border flex item-center justify-center rounded-[50%]">
              {" "}
              <Link className="block w-full" href={LinkedIn}>
                <LinkedinIcon className="fill-black" />
              </Link>{" "}
            </div>
            
          </div>
          <div className=" h-fit px-6 py-2 rounded-lg  flex flex-col   w-full    ">
          <div className="text-xl font-bold mb-2">Skills</div>
          <div
            className="flex flex-col skill-container  w-full  flex-wrap"
            style={{ gap: "10px 20px" }}
          >
            <div className="flex justify-between text-center items-center">
              <span className="ml-4">Ux Designer</span>
            </div>
            <div className="flex justify-between items-center ">
              <span className="ml-4">Java</span>
            </div>
            <div className="ml-4">{Skills[2]}</div>
            <div className="ml-4">{Skills[2]}</div>
          </div>
        </div>
        </div>
        
      </section>
      <section className="flex border h-[100vh] bo  w-full items-center gap-4 justify-evenly flex-col p-2   ">
        
        
        <div className=" bg-[#f7f7f7]     flex flex-col gap-[2px] rounded-lg p-3 h-fit sm:min-h-[260px] sm:min-w-[280px]  ">
          <div className="text-start text-xl mb-2 font-bold">
            Basic Information:
          </div>
          <div className="grid grid-cols-2   sm:grid-cols-3 sm:grid-rows-2 px-3 sm:gap-x-[8vw] gap-y-4 ">
            <div className=" flex flex-col font-serif ">
              <span>
                <b>Phone</b>
              </span>
              <span>{Phone}</span>
            </div>
            <div className="flex flex-col">
              <span>
                <b>Address</b>
                <span className="hidden sm:block"></span>
              </span>
              <span>{Address}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Age</span>
              <span>{Age} years</span>
            </div>

            <div className="flex flex-col">
              <span className="font-semibold">Experience</span>
              <span>{Experience} years</span>
            </div>
            <div className="text-nowrap flex flex-col font-serif tracking-wide">
              <span className="font-bold ">Email</span>
              <span className="text-sm">{Email}</span>
            </div>
          </div>
          <div className="flex items-center mt-2 sm:mt-4 gap-5">
            <button className="text-center  flex flex-nowrap hover:bg-[#1066b6] px-2 py-1 items-center gap-1 rounded bg-[#1d7efc] text-white ">
              <DownloadIcon className="h-4 w-4" />
              <span className="text-sm sm:text-lg"> Download CV</span>
            </button>
            <button className="text-center text-xs sm:text-lg  flex flex-nowrap px-2 py-1 items-center gap-1 rounded  border-slate-500 border hover:bg-[#c4bbbb] ">
              Send Email
            </button>
          </div>
        </div>
        <div className=" bg-[#f7f7f7]    w-full border    flex flex-col gap-[10px] rounded-lg px-3 py-2 h-[50%] min-h-[250px]  ">
          <div
            className="tracking-wide  font-semibold bg-[#f7f7f7] w-full text-xl  flex gap-3  p-3 h-fit   "
            style={{}}
          >
            {" "}
            <button className="exbutton text-sm  border-b border-black" onClick={()=>{
              
            }}>
              Experience
            </button>
            <button className="text-sm morebutton px-2  rounded-[10px]" onClick={()=>{
              (exbutton[0] as HTMLElement).style.display ="hidden";
              (morebutton[0] as HTMLElement).style.display="block";
            }} >
              more
            </button>
          </div>
          <div className="flex flex-col experience-container gap-2 ">
            <div className=" border rounded-lg justify-start   px-3 py-2 flex flex-row gap-2 items-center ">
              <div className="flex gap-2 items-center">
                <img
                  src="/themisfit.jpg"
                  alt="misfit"
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                />
                <div className="flex flex-col">
                  <span>{experience_company[0]}</span>
                  <span className="text-xs">{excompany_name[0]}</span>
                  <span className="text-xs tracking-tight">
                    {" "}
                    july 21 2023 - 1 january 2023{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="border justify-start  rounded-lg border-[#eeeeee]  px-3 py-2 flex flex-row gap-2 items-center ">
              <div className="flex gap-2 items-center">
                <img
                  src="/themisfit.jpg"
                  alt="misfit"
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                />
                <div className="flex flex-col">
                  <span>{experience_company[0]}</span>
                  <span className="text-xs">{excompany_name[0]}</span>
                  <span className="text-xs tracking-tight">
                    {" "}
                    july 21 2023 - 1 january 2023{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Userprofile;
