import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const { movieNames, movieResults } = useSelector((store) => store.gpt);

    if(!movieNames) return null;

  return (
    <div>
      <div className='bg-black'>
        {
            movieNames.map((movieName, index) => (
                <MovieList 
                    key={movieName} 
                    categoryTitle={movieName} 
                    movies={movieResults[index]} 
                />
            ))
        }
      </div>
    </div>
  )
}

export default GptMovieSuggestions