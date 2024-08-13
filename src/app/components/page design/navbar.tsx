import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex w-full justify-center items-center py-4'>
            <div className='flex items-center px-16 justify-center gap-16'>
                <div className='flex items-center gap-16'>
                    <Link href={"#"} className='font-bold text-sm'>
                        Home
                    </Link>
                    <Link href={"#"} className='font-bold text-sm'>
                        About
                    </Link>
                </div>
                <div className='flex items-center w-20 justify-center'>
                    <Star className='h-9 w-9 fill-primary text-primary'/>
                </div>
                <div className='flex items-center gap-16'>
                    <Link href={"#"} className='font-bold text-sm'>
                        Works
                    </Link>
                    <Link href={"#"} className='font-bold text-sm'>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar