import openai from "../utils/openAi";
import { addGptMovieResults } from "../utils/gptSlice";
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";

// search movie in TMDB
const searchMovieTMDB = async (movie) => {
    const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
    );
    const json = await data.json();
    return json.results;
};

const useOpenAiGptSearch = () => {
    const dispatch = useDispatch();

    const handleGptSearchClick = async (searchText) => {
        const gptQuery =
            "Act as a Movie Recommendation system and suggest some movies for the query : " +
            searchText +
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Masoom, Padosan, Chupke Chupke, Hera Pheri, Welcome";
        // Make API call to OpenAi to get movie results
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        // For each movie call TMDB API
        // const promiseArray = gptMovies.map(movie => useSearchMovieTMDB(movie));
        // In data I'll get 5 Promises not data, as it's async function
        // [Promise, Promise, Promise, Promise, Promise]

        const tmdbResults = await Promise.all(gptMovies.map(movie => searchMovieTMDB(movie)));

        dispatch(addGptMovieResults({
            movieNames: gptMovies,
            movieResults: tmdbResults
        }));
    };

    return { handleGptSearchClick };
};

export default useOpenAiGptSearch;