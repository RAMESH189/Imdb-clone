"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {

    const [movie, setMovie] = useState("");
    const router = useRouter();

    const handleQuery = (e) => {
        e.preventDefault();
        if (!movie) return;
        router.push(`/search/${movie}`)
    }

  return (
      <form
          onSubmit={handleQuery}
          className='flex max-w-6xl mx-auto px-5 items-center justify-between pt-4'
      >
          <input
              type='text'
              value={ movie }
              onChange={(e) => setMovie(e.target.value)}
              placeholder='Search movie...'
              className='w-full flex-1 h-14 bg-transparent rounded-md placeholder-gray-400'
          />
          <button
              disabled= {!movie}
              className='text-lg text-amber-700 disabled:text-gray-400 hover:bg-slate-700 py-3 px-4 rounded-md'
          >
              Search
          </button>
    </form>
  )
}
