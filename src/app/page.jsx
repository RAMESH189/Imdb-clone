import Results from "@/components/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const response = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${process.env.REACT_API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await response.json();
  console.log(data.results);
  const movieData = data.results;

  if (!response) {
    throw new Error('failed to fetch data');
  }

  return (
    <div>
      <Results data = {movieData} />
    </div>
  )
}
