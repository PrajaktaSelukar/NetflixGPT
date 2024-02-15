import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import GptReducer from "./gptSlice";

const userStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gpt: GptReducer
    }
});

export default userStore;