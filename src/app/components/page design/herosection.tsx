import { ArrowRight } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

interface ImageCardProps{
    imgUrl: string;
}
const ImageCard = ({
    imgUrl
}: ImageCardProps) => {
    return (
        <div className='h-[14.5rem] sm:h-fit sm:w-fit w-[28rem] overflow-hidden bg-white rounded-xl relative'>
            <Image
                src={imgUrl}
                alt="Hero image"
                height={720}
                width={1200}
                className='object-cover bg-blend-overlay '
            />
            <div className='h-[15.5rem] w-[28rem]  absolute top-0 left-0 flex items-end px-7 pb-4'>
                <div className='flex justify-between items-center w-full'>
                    <h2 className='text-background'>Brand Project</h2>
                    <span className='bg-background h-5 w-5 rounded-full flex items-center justify-center'>
                        <ArrowRight className='h-3 w-3 text-primary' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ImageCard