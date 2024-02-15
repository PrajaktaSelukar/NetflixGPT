import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import GptReducer from "./gptSlice";
import AppConfigReducer from "./appConfigSlice";

const userStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gpt: GptReducer,
        config: AppConfigReducer
    }
});

export default userStore;