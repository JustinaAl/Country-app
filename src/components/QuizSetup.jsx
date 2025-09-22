import { useDispatch, useSelector } from "react-redux"
import SelectDropdown from "./SelectDropdown"
import { setRegion } from "../redux/regionSlice";
import { setUsername, setStartQuiz } from "../redux/quizSlice";
import BackButton from "./BackButton";



const QuizSetup = () => {

    const {regions, selectedRegion} = useSelector(store => store.regions);
    const {userName} = useSelector(store => store.quiz);
    const dispatch = useDispatch();

    const userNameExists = () => {
        const scoreArray = JSON.parse(localStorage.getItem('quizResults')) || [];
        const exists = scoreArray.some(user => user.name === userName);
        return exists;
    }

    return <>
        <BackButton />
        <div className="space-y-12 h-full flex flex-col">
            <h1 className="text-4xl">Flag quiz</h1>
            <div className="space-y-6">
                <div>
                    <label htmlFor="selectRegion" className="text-xl">Select Region</label>
                    <SelectDropdown options={regions} value={selectedRegion} setValue={setRegion} id={'selectRegion'}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="userName" className="text-xl text-left">Enter Username</label>
                    <input type="text" 
                        maxLength="10"
                        placeholder="Enter a username" 
                        onChange={(e)=>dispatch(setUsername(e.target.value))}
                        className="placeholder:text-sm"
                    />
                </div>
            </div>
            <button 
                className="w-fit self-center bg-green-400 disabled:scale-100 disabled:bg-transparent" 
                disabled={userName.length<3}
                onClick={() => { 
                    if(!userNameExists()){
                        dispatch(setStartQuiz(true))
                    }else{
                        alert('User with this username already exists')
                    }
                    }}
            >Start Quiz</button>
        </div>
    </>
}

export default QuizSetup