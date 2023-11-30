import React, { Fragment, useEffect } from "react";
import Banner from "../components/banner/Banner";
import MovieList from "../components/movie/MovieList";

function HomePage() {
  useEffect(() => {
    document.title = "Movies";
  }, []);

  return (
    <Fragment>
      <Banner></Banner>
      <div>
        <section className="container-base movies-layout mb-20">
          <h2 className="text-white text-2xl font-bold capitalize mb-10">
            now playing
          </h2>
          <MovieList type="now_playing"></MovieList>
        </section>
        <section className="container-base top-rated mb-20">
          <h2 className="text-white text-2xl font-bold capitalize mb-10">
            Top rated movies
          </h2>
          <MovieList type="top_rated"></MovieList>
        </section>
        <section className="container-base top-rated mb-20">
          <h2 className="text-white text-2xl font-bold capitalize mb-10">
            Trending
          </h2>
          <MovieList type="popular"></MovieList>
        </section>
      </div>
    </Fragment>
  );
}

export default HomePage;
