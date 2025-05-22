import Link from 'next/link'
import React from 'react'

const Header = () => {

  return (
    <>
        <nav className='w-3/4 mx-auto fixed h-15 items-center text-white flex justify-around bg-black/30 backdrop-blur-sm'>
            <Link className='font-bold text-xl' href="/">SK</Link>
            <ul className='flex gap-10 cursor-pointer'>
                <Link className='hover:underline transition-transform duration-200 hover:scale-115' href="/About">About</Link>
                <Link className='hover:underline transition-transform duration-200 hover:scale-115' href="/Project">Projects</Link>
            </ul>
        </nav>
    </>
  )
}

export default Header