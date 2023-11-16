import Image from "next/image";
import React from "react";

async function getMovie(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_API_KEY}`
  );
  return await response.json();
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        />
        <div className="p-4">
          <h2 className="mb-4 font-bold text-xl">
            {movie.title || movie.name}
          </h2>
          <p className="mb-4">{movie.overview}</p>
          <p className="mb-4">Release date : {movie.release_date}</p>
          <p>Rating : {movie.vote_count}</p>
        </div>
      </div>
    </div>
  );
}
