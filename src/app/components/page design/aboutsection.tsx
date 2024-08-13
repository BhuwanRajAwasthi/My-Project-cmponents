import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <section className='h-[20rem] grid grid-cols-2 px-10'>
            <div className='flex flex-col justify-between'>
                <div>
                    <h2 className='text-muted-foreground text-xl'>About Me</h2>
                </div>
                <div>
                    <Image
                        src="/gentlemen.jpg"
                        alt=""
                        height={800}
                        width={800}
                        className=" border h-[10rem]  w-[10rem] rounded-full object-cover"
                    />
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <p className='max-w-sm text-sm font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt maiores quis, est nesciunt eius animi soluta cumque, modi, hic facere dolore veritatis deserunt? In adipisci laborum aut sit inventore laboriosam numquam ipsam hic voluptates? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio accusamus veritatis, culpa adipisci consequatur quas, saepe nisi cumque modi voluptatum dolorum iusto. Amet saepe ut debitis fugiat optio praesentium maxime quia excepturi, maiores architecto!</p>
            </div>
        </section>
    )
}

export default AboutSection