import { useDispatch, useSelector } from "react-redux"
import { setPage } from "../redux/regionSlice";
import { useEffect } from "react";
import { emptyAnswerArray } from "../redux/quizSlice";

const Paging = ({total, itemsPerPage}) => {

    const dispatch = useDispatch();
    const {currentPage} = useSelector(store => store.regions)
    const {answers, random15, showResult} = useSelector(store => store.quiz)


    const rightAnswers = random15.map(country => country.name.common);
    const userAnswers = [...answers];

    useEffect(()=>{
        dispatch(emptyAnswerArray())
    },[])

    const numberOfPages = Math.ceil(total.length / itemsPerPage)
    const buttonsForPages = []

    for(let i = 0; i<numberOfPages; i++){
        buttonsForPages.push(
        <button
            className={`p-2 w-12
                ${!showResult
                ? currentPage === i 
                    ? 'bg-blue-400'
                    : answers[i] !== ''
                        ? 'bg-blue-200'
                        : ''
                : answers[i] === rightAnswers[i]
                    ? 'bg-green-300'
                    : 'bg-red-300'
                }
            `}
            key={`pg${i}`}
            onClick={()=> dispatch(setPage(i))}
                >{i + 1}
        </button>)
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 ">
            {buttonsForPages}
        </div>
    )
}

export default Paging