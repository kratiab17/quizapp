import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import registerSlice from "./registerSlice";
import quizSlice from "./quizSlice";
const store = configureStore({
    reducer : {
        modal : modalSlice ,
        register : registerSlice ,
        quiz : quizSlice 
    }
})

export default store;