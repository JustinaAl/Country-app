import { useDispatch, useSelector } from "react-redux"
import QuizSetup from "../components/QuizSetup";
import Quiz from "../components/Quiz";
import { useEffect } from "react";
import { setStartQuiz } from "../redux/quizSlice";



const QuizPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setStartQuiz(false));
    }, []);

    const {quizStarted} = useSelector(store => store.quiz);


    return(
        <div className="h-full">
            {quizStarted ? <Quiz /> : <QuizSetup />}
        </div>
    )
}

export default QuizPage