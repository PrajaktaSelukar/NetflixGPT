import { BACKGROUND_IMG } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
          <img 
            className="h-screen md:h-auto object-cover"
            alt="background"
            src={ BACKGROUND_IMG }
          />
        </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearchPage