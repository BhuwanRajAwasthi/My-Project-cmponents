"use client"
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
const Carosel = () => {
    const [nums, setNums] = useState(0)

    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <div className='flex justify-center border h-72 w-[30rem]'>
                <div className='h-full flex items-center'>
                    <Button
                        onClick={() => setNums(nums - 1)}
                        disabled={nums <= 0}
                    >
                        <ArrowLeftCircle className='h-5 w-5' />
                    </Button>
                </div>
                <div className='h-72 w-[20rem] flex items-center justify-center'>
                    {
                        nums == 0 && (
                            <div className='h-56 w-56 border rounded-lg flex transition-all duration-700 items-center justify-center'>
                                <span className='text-8xl font-bold'>1</span>
                            </div>
                        )
                    }
                    {
                        nums == 1 && (
                            <div className='h-56 w-56 border rounded-lg bg-yellow-200 transition-all duration-700 flex items-center justify-center'>
                                <span className='text-8xl font-bold'>2</span>
                            </div>
                        )
                    }
                    {
                        nums == 2 && (
                            <div className='h-56 w-56 border rounded-lg border-red-500 transition-all duration-700 flex items-center justify-center'>
                                <span className='text-8xl font-bold'>3</span>
                            </div>
                        )
                    }
                </div>
                <div className='h-full flex items-center'>
                    <Button
                        onClick={() => setNums(nums + 1)}
                        disabled={nums >= 2}
                    >
                        <ArrowRightCircle className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default Carosel