import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center md:flex-row gap-8 md:gap-0 md:justify-between md:items-start bg-gray-800 rounded-lg p-8'>
        <div className='flex flex-col items-center mdLitems-start gap-4'>
            <Link href="/" className='flex items-center'>
                <Image src="/logo.png" alt="TrendLama Logo" width={36} height={36}
                    className='w-6 h-6 md:w-9 md:h-9'
                />
                <p className='hidden md:block text-md font-medium tracking-wider text-white'>KERNELKART</p>
             </Link>
             <p className='text-sm text-gray-400'>&#169; 2025 KernelKart</p>
             <p className='text-sm text-gray-400'>All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
            <p className='text-sm text-amber-50'>Links</p>
            <Link href="/">Homepage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
            <p className='text-sm text-amber-50'>Links</p>
            <Link href="/">Homepage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
            <p className='text-sm text-amber-50'>Links</p>
            <Link href="/">Homepage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
        </div>
    </div>
  )
}

export default Footer