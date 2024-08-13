import React from "react";
import Image from "next/image";
import { Contact, MapPin } from "lucide-react";
import { DollarSign } from "lucide-react";
import { ContactIcon } from "lucide-react";

import { BookMarkedIcon } from "lucide-react";
import { Phone } from "lucide-react";
interface JobcardProps {
  Job_title: string;
  company_name: string;
  location: string;
  job_post: number;
  salary: any; 
  company_logo: string;
  phone_number: number;
  
  
}
const Jobcard = ({
  Job_title,
  company_name,
  location,
  job_post,
  salary,
  company_logo,
  phone_number,
  

}: JobcardProps) => {
  const[time,settime] = React.useState(0);
  const [daysago, setdaysago] = React.useState("days ago");
  
  return (
    <div style={{
    
      boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 4px 8px 12px 0 rgba(0, 0, 0, 0.19)"

    }} className="h-fit flex flex-col border p-1 w-[210px] bg-[#fcf7f7]   m-2 relative shadow-lg 
     outline-none rounded-lg" >
      
      
      <div className="text-start  font-serif  px-2   flex flex-col pb-0">
        <span className="font-bold text-lg text-nowrap">{Job_title}</span>
        <div className="text-xs text-wrap  opacity-70  ">{company_name}</div>
        
      </div>
      <div className="inline m-2 absolute right-2 top-4">

      <img
            src="/esewa.png"
            style={{
                height: "20px",
                width: "20px",
               
            }}
            alt=""
            />
            </div>

        <div className="text-xs  pl-1  flex items-center pt-2  opacity-70 text-wrap"><MapPin className="h-4 w-4"/>{location}</div>
        <div className="flex items-center pt-2" ><DollarSign className="h-5 w-5 pl-1 "/><span>{salary}</span></div>
        <div className="flex pt-1 text-xs pl-1 gap-1 items-center "><Phone className="h-4 w-4 "/>{phone_number}</div>
        <div className="flex h-fit w-full ml-1 gap-2 mt-2">
          <div className="h-fit px-2 py-[3px] w-fit p- rounded-lg border border-[#2471b1] text-xs text-center"> Part time</div>
          <div className="h-fit  px-2 py-[3px] w-fit  rounded-lg  border border-[#2471b1] text-xs text-center"> Internshipt</div>
          <div className="text-xs absolute right-2 bottom-[74px] flex gap-1  text-center text-[#286334]"><span>{time}</span><span>{daysago}</span></div>

        </div>
        
        <button type="button" className="p-1 bg-[#2471b1] w-full rounded-lg font-serif font-bold hover:bg-[#0f528a] mt-2 ">hell</button>
    </div>
  );
};
export default Jobcard;
