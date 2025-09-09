import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    if (!search) return;
    const res = await axios.get(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${search}`);
    setMovies(res.data.Search || []);
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <input 
          type="text" 
          placeholder="Search movies..." 
          className="p-2 border rounded flex-1"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchMovies} className="bg-teal-400 px-4 py-2 rounded">Search</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((m) => (
          <div key={m.imdbID} className="bg-white rounded shadow p-2 text-black">
            <img src={m.Poster} alt={m.Title} className="w-full h-48 object-cover"/>
            <h3 className="font-bold">{m.Title}</h3>
            <p>{m.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}