import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react";
import useOpenAiGptSearch from "../hooks/useOpenAiGptSearch";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const { handleGptSearchClick } = useOpenAiGptSearch();

  return (
    <div className="pt-[40%] md:pt-[5%] flex justify-center">
        <form 
            className="w-full md:w-1/2 bg-black grid grid-cols-12"
            onSubmit={(e) => e.preventDefault() }
        >
            <input 
                type="text"
                ref={searchText}
                className="p-4 m-4 col-span-9"
                placeholder={lang[langKey]["What would you like to search today?"]}
            />
            <button 
                className="col-span-3 m-4 py-2 px-2 md:px-4 bg-red-400 text-white rounded-lg"
                onClick={() => {
                    handleGptSearchClick(searchText.current.value)
                }}
            > { lang[langKey]["Search"] }
            </button>
        </form>
    </div>
  )
};

export default GptSearchBar;