import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaThumbsUp } from "react-icons/fa";

export default function Card({ data }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:hover:bg-slate-100 dark:sm:hover:bg-slate-600 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${data.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-t-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="No Image available"
          style={{maxWidth:'100%', height:'auto'}}
        />
        <div className="p-2">
           <h2 className=" font-bold py-1">{data.title || data.name}</h2>
          <p className="line-clamp-4">{data.overview}</p>
          <div className="flex justify-end items-center">
            <FaThumbsUp className="m-2"/>
            <span>{data.vote_count}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
