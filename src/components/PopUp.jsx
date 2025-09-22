import { useDispatch, useSelector } from "react-redux"
import { setShowPopUp } from "../redux/quizSlice"
import { useNavigate } from "react-router-dom";

const PopUp = () => {

    const dispatch = useDispatch();
    const navigate= useNavigate();
    
    const {quitShow, random15,answers, userName} = useSelector(store => store.quiz)
    const {selectedRegion} = useSelector(store => store.regions)

    const saveResults = (score) => {
        const user = {
            name: userName,
            region: selectedRegion,
            points: score
        }
        const scoreArray = JSON.parse(localStorage.getItem('quizResults')) || [];
        scoreArray.push(user)

        localStorage.setItem('quizResults', JSON.stringify(scoreArray))
    }

    const countPoints = () => {
        const rightAnswers = random15.map(country => country.name.common);
        const userAnswers = [...answers];

        let score=0

        for(let i=0; i< rightAnswers.length; i++){
            if (userAnswers[i] && rightAnswers[i].toLowerCase() === userAnswers[i].toLowerCase()) {
                score++
            }
        }
        saveResults(score);
        return score;
    }

    return(
        <div className="fixed flex justify-center items-center w-full h-full ">
            <div className="flex flex-col items-center p-4 z-20 bg-red-200/60 backdrop-blur-md border-2 border-red-300 w-[700px] max-w-[85%] h-[40svh] rounded-md md:mt-[0px]">
                <button className="w-[50px] p-2 self-end"
                        onClick={() => dispatch(setShowPopUp(false))}
                >X</button>
                <div className="w-full h-full flex flex-col justify-center items-center gap-6 md:gap-10">
                    <p className="font-text text-xl md:text-2xl text-center">Are you sure you want to end game?</p>
                    <div className="flex space-x-6">
                        <button className="w-[100px] border-green-600 border-2 hover:bg-green-300"
                                onClick={() => {
                                    if(quitShow === 'quit'){
                                        dispatch(setShowPopUp(false))
                                        navigate('/')
                                    }else if (quitShow === 'show'){
                                        alert(countPoints())
                                    }
                                }
                                }
                        >YES</button>
                        <button className="w-fit w-[100px] border-red-600 border-2 hover:bg-red-300"
                                onClick={() => dispatch(setShowPopUp(false))}
                        >NO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp