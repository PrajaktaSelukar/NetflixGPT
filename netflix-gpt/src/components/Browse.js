import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {
        /**
         * - MainContainer
         *    - VideoBackground
         *    - VideoTitle
         * - SecondaryContainer
         *    - MovieList * m
         *      - Cards * n
         */
      }
    </div>
  )
}

export default Browse;