import { useState } from "react";
import { movies } from "./Data";
const Movie = () => {
  const [movielist, setMovielist] = useState(movies);
  const FilterByCategory = (cat) => {
    setMovielist(movies.filter((data) => data.category == cat));
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => setMovielist(movies)}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          All
        </button>
        <button
          onClick={() => FilterByCategory("Action")}
          type="button"
          className="btn btn-outline-secondary mx-3"
        >
          Action
        </button>
        <button
          onClick={() => FilterByCategory("Thriller")}
          type="button"
          className="btn btn-outline-success mx-3"
        >
          Thriller
        </button>
        <button
          onClick={() => FilterByCategory("Animation")}
          type="button"
          className="btn btn-outline-danger mx-3"
        >
          Animation
        </button>
        <button
          onClick={() => FilterByCategory("Horror")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          Horror
        </button>
        <button
          onClick={() => FilterByCategory("Drama")}
          type="button"
          className="btn btn-outline-info mx-3"
        >
          Drama
        </button>
        <button
          onClick={() => FilterByCategory("Sci - Fi")}
          type="button"
          className="btn btn-outline-light mx-3"
        >
          Sci - Fi
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "1300px",
          textAlign: "center",
          margin: "auto",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {movielist.map((data) => (
          <div
            key={data.id}
            style={{
              maxWidth: "280px",

              textAlign: "center",
            }}
          >
            <div style={{ padding: "10px" }} classNameName="hover_effect">
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  border: "1px solid yellow",
                  borderRadius: "10px",
                  height: "280px",
                }}
              />
            </div>
            <h5>{data.title}</h5>
            <h4>{data.release_date}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movie;
