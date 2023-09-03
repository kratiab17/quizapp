import { createSlice } from "@reduxjs/toolkit";
import { QUESTIONS } from "../config";
const quizSlice = createSlice({
    name : 'quiz',
    initialState : {
        currentPage : '',
        startQuiz : false,
        quizAnswer : {},
        quizResult : 0,
        timer :  60
    },
    reducers : {
        defaultQuiz : (state) => {
            state.quizResult = 0;
            state.quizAnswer = {}
        },
        handleQuiz : (state ,action) => {
            state.startQuiz = action.payload
        },
        handleQuizAnswers : (state , action ) => {
            state.quizAnswer[action.payload.question] = action.payload.answer
        },
        handleQuizResult : (state) => {
            for(let i of QUESTIONS)
            {
                if(i.correct_option === parseInt(state.quizAnswer[i.no]) )
                {
                   state.quizResult+=1 }}
        },
        handleCurrentPage : (state,action) => {
            if(action.payload.includes('start'))
                state.currentPage = 'close'
            if(action.payload.includes('close'))
                state.currentPage = 'start'
            
            if(action.payload.includes('submit'))
            {
                state.currentPage = ''
            }
            
        },
        handleTimer : (state,action) =>{
            state.timer-=1
            if(action.payload===true)
                state.timer=60
        }
    }
})
export const quizActions = quizSlice.actions;
export default quizSlice.reducer;