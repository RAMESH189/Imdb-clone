import React from 'react';
import MenuItem from './MenuItem';
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div
      className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'
    >
      <div className="flex">
        <MenuItem title='Home' address='/' Icon={ AiFillHome } />
        <MenuItem title='About' address='/about' Icon={ BsFillInfoCircleFill } />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href='/'>
          <h2 className='2xl flex'>
            <span className='font-bold bg-amber-500 py-2 px-2 rounded-lg border border-solid border-gray-800'>The Movie DB</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}
