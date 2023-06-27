import { useState, useEffect } from "react";
import Setcard from "./Setcard";
import "./bestmovies.css";

const BestMovies = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
    let link = `https://api.themoviedb.org/4/list/8207676?page=1&api_key=${apiKey}&language=de-DE&append_to_response=videos,images`;
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <main>
      <div className="movie-grid">
        {details.map((elt, i) => {
          return (
            <Setcard
              key={elt.id}
              id={elt.id}
              title={elt.title}
              year={elt.release_date?.slice(0, 4)}
              img={elt.poster_path}
            />
          );
        })}
      </div>
    </main>
  );
};

export default BestMovies;
