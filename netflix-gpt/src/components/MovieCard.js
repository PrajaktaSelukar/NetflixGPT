import { MOVIE_CDN_URL } from "../utils/constants"

const MovieCard = ({ posterTitle, posterPath }) => {
    if(!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4">
        <img 
            alt={posterTitle}
            src={MOVIE_CDN_URL + posterPath} 
        />
    </div>
  )
}

export default MovieCard