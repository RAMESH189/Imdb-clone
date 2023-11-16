import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  const json = await response.json();
  const data = json.results;
  return (
    <div>
      {data && data.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {data && <Results data={data} />}
    </div>
  );
}
