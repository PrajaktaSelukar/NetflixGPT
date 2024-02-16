import { BACKGROUND_IMG } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img 
          alt="background"
          src={ BACKGROUND_IMG }
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage