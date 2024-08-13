"use client";
import React from "react";
import CompanyProfile from "./components/Project-main/Company_profile";
import Jobcard from "./components/Project-main/Jobcard";
import CompanyProfile2 from "./components/Project-main/Company_profile2";
import "./styles.css";
import Userprofile from "./components/Project-main/Userprofile";
export default function Home() {
  return (
    <main className="h-screen w-full ">
      <Userprofile Name={"Bhuwan Raj Awasthi"} Age={0} Main_Profession={""} Email={"bhuwanraj123456@gmail.com"} Phone={0} Address={"bagar-1,pokhara"} Bio={"Hello my name is bhuwan raj awasthi. I am Currently studying at prithivhi narayan campus it's cool to study here,as i wanted beautiful, with greeny and fresh environment where you meet different peoples "} Image={"./gentlemen.jpg"} LinkedIn={"https://LinkedIn/BhuwanRajAwasthi"} GitHub={""} Skills={["Ux designer", "Java", "Kotlin"]} Experience={0} Education={""}excompany_name={["The misfit of night raid"]} Certifications={[]} Job_Experience={[]} experience_company={["Product Designer"]}/>
      <CompanyProfile />
      <CompanyProfile2/>
    </main>
  );
}
