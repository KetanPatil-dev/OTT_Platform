import React, { useEffect, useState } from "react";
import "./Titlecards.css";

const Titlecards = ({ title,category }) => {
  const [api, setApi] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2YxMDk0NTQ3ZmEyNDU2MjJlZDVlNzg3NmViZmJiMyIsIm5iZiI6MTc0Mzc0MzAyMC4xNDYsInN1YiI6IjY3ZWY2ODJjZWRlOGQ4MmYzYmFjZmZjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RnWRCDYjHTyi6EsrAgQ6WES3O2WBfcejWvu98wwApWE",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
      options
    ).then((res) => res.json())
      .then((res) => setApi(res.results))
      .catch((err) => console.error(err));
  },[] );
  console.log(api);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on CloneFlix"}</h2>
      <div className="card-list">
        {api.map((card, index) => {
          return (
            <div key={index + 1} className="card">
              <img
                src={"https://image.tmdb.org/t/p/w500" + card.backdrop_path}
                alt="card-img"
              />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Titlecards;
