import { createSlice } from "@reduxjs/toolkit";


const quizSlice = createSlice({
    name: 'quizSlice',
    initialState:{
        userName: '',
        quizStarted: false,
        allUserNames: [],

        random15: [],

        answers: Array(15).fill(''),
        showPopUp: false,
        quitShow: 'quit',

    },
    reducers:{
        setUsername: (state, action) => {state.userName = action.payload },
        cleanUserName: (state, action) => {state.userName = '' },
        setStartQuiz : (state, action) => {state.quizStarted = action.payload},
        setRandom15: (state, action) => {
            const copy = [...action.payload];
            for (let i = copy.length - 1; i > 0; i--) {
                const randomNumber = Math.floor(Math.random() * (i + 1));
                [copy[i], copy[randomNumber]] = [copy[randomNumber], copy[i]];
            }
            state.random15 = copy.slice(0, 15);
        },

        setAnswer: (state, action) => {
            const {i,value} = action.payload;
            state.answers[i] = value;
        },
        emptyAnswerArray: (state, action) => {state.answers = Array(15).fill('')},
        setShowPopUp: (state, action) => {state.showPopUp = action.payload},
        setQuitShow: (state, action) => {state.quitShow = action.payload},
        

    },

});


export const {setUsername, setStartQuiz, cleanUserName, setRandom15, setAnswers, setAnswer,emptyAnswerArray,setShowPopUp,setQuitShow} = quizSlice.actions
export default quizSlice.reducer