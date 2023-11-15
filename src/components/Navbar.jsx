import React from 'react'
import NavBarItem from './NavBarItem'

export default function Navbar() {
  return (
    <div className='flex justify-center items-center font-bold p-4 bg-amber-100  dark:bg-gray-700'>
      <NavBarItem title='Trending' param='fetchTrending'/>    
      <NavBarItem title='Top rated' param='fetchTopRated'/>    
    </div>
  )
}
