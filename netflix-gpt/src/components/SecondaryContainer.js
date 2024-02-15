import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie)
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20 pl-12'>
        <MovieList categoryTitle={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList categoryTitle={"Popular"} movies={movies.popularMovies} />
        <MovieList categoryTitle={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList categoryTitle={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer