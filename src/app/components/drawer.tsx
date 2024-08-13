"use client"
import { useState } from "react"
import { useEffect } from "react"
const Drawer =() => {
    const [calorie, setcalorie] = useState(350);
   
   
    return (
        <main className="h-screen flex w-full justify-center items-center">
          <div className="flex gap-5 flex-col " style={{minWidth: '170px'}}>

                       <div className="flex flex-col gap-2 justify-center  " >
                        
                            <h4 className="text-2xl font-bold">Move Goal</h4>
                            <p className="text-sm opacity-[50%]">set your daily activity goal</p>
                         </div>
                        <div className="flex  gap-4 justify-center">
                            { calorie >=0 &&(

                                
                                <button className="bg-accent text-accent-foreground font-medium rounded-md py-2 px-4 text-sm" disabled={calorie <= 0}  onClick={() => setcalorie(calorie - 100)}>- </button>
                            )
                            }
                            <div className="flex flex-col justify-center items-center " style={{minWidth: '5em' , maxWidth: '14em' }}>

                            <h1 className="text-7xl font-bold" style={{color: calorie >=2000 ? "red": "black", minWidth: '4em' , textAlign: 'center'}}>
                                {
                                calorie < 0 ? "0" : calorie 
                                }
                            </h1>
                            <p className="text-sm opacity-[50%] ">Calories/Day</p>
                            </div>
                            <button
                                className="bg-accent text-accent-foreground font-medium rounded-md py-2 px-4  text-sm" disabled={calorie >= 10000}
                                onClick={() => setcalorie(calorie + 50)}
                                >+</button>
                            
                        </div>
                        <div className="  flex  bar-container items-end  justify-center gap-4">

                                    <div
                                        
                                        style={{
                                            width: '20px',
                                            height: '90px',
                                            backgroundColor: 'black',
                                        }}></div>
                                        <div
                                        
                                        style={{
                                            width: '20px',
                                            height: '83px',
                                            backgroundColor: 'black',
                                        }}></div>
                                    <div
                                        
                                        style={{
                                            width: '20px',
                                            height: '110px',
                                            backgroundColor: 'orange',
                                        }}></div>
                                        <div
                                        
                                        style={{
                                            width: '20px',
                                            height: '100px',
                                            backgroundColor: 'green',
                                        }}></div>
                                    <div
                                        
                                        style={{
                                            width: '20px',
                                            height: '50px',
                                            backgroundColor: 'black',
                                        }}></div>

                                    <div
                                        
                                        style={{
                                            width: '20px',
                                            height: '70px',
                                            backgroundColor: 'black',
                                        }}></div>
                                    <div
                                        
                                        style={{
                                            width: '20px',
                                            height: '80px',
                                            backgroundColor: 'yellow',
                                        }}></div>
                                        <div
                                        
                                        style={{
                                            width: '20px',
                                            height: '45px',
                                            backgroundColor: 'green',
                                        }}></div>
                                        <div
                                        
                                        style={{
                                            width: '20px',
                                            height: '100px',
                                            backgroundColor: 'blue',
                                        }}></div>
                                        
                                
                        </div>
                        <button className="bg-[#efa41a] bg-accent-foreground text-2xl py-2 rounded-[15px]  text-center tracking-tight  ">Submit</button>
                        <button className="bg-accent border py-3 rounded-[15px] text-center text-accent-foreground ">Cancel</button>
                        
                     </div>
                
        </main>

    );


}
export default Drawer;