import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LangContext } from "../context/LangContext";

function Home({ searchQuery }) {
  const { language } = useContext(LangContext); // get language from context
  const [movies, setMovies] = useState([]);
  const [page, ] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const url = searchQuery
      ? `https://api.themoviedb.org/3/search/movie`
      : `https://api.themoviedb.org/3/movie/popular`;

    axios
      .get(url, {
        params: {
          api_key: "266fa35430a1a599464e4bee16690be8",
          query: searchQuery,
          page,
          language, // take language from context
        },
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [searchQuery, page, language]);

  return (
    <div className="container py-4">
      <h3 className="text-light">Movies ({language})</h3>
      <div className="row">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="col-md-2 mb-4"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <div className="card h-100 bg-dark text-light border-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
                style={{ height: "80%", objectFit: "cover" }}
              />
              <div className="card-body p-2 text-center">
                <h6 className="card-title" style={{ fontSize: "14px" }}>
                  {movie.title}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
