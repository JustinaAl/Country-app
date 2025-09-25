import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, resetPage } from "../redux/regionSlice";
import { useEffect} from "react";
import { setAnswer, setQuitShow, setRandom15, setShowPopUp } from "../redux/quizSlice";
import Paging from "./Paging";
import PopUp from "./PopUp";
import { useNavigate } from "react-router-dom";


const Quiz = () => {

    const dispatch = useDispatch();
    const navigate= useNavigate();

    const {countries, status, error, selectedRegion, currentPage} = useSelector(store => store.regions)
    const {random15, answers, showPopUp, showResult, result} = useSelector(store => store.quiz)


    useEffect(() => {
        dispatch(fetchCountries(selectedRegion));
        dispatch(resetPage())
    }, []);

    useEffect(() => {
        dispatch(setRandom15(countries))
    }, [countries]);


    if (status === "Loading") return <p>Loading...</p>;
    if (status === "Failed" || countries.length === 0) return <p>Error: {error}</p>;


    return (
        <>
         {random15.length !== 15 ? <p>Loading.</p> : 
         
         <div className="h-[100%] space-y-4 flex flex-col items-center justify-center md:space-y-6">
            <div className="aspect-[2/1.3] w-[50%] mx-auto flex items-center">
                <img src={random15[currentPage].flags.png} 
                alt={random15[currentPage].flags.alt}
                className = "w-full"/>
            </div>

            {showResult && <p className="font-main md:text-xl">{random15[currentPage].name.common}</p>}
            
            <input type="text" 
                placeholder="Enter name of a country"
                className="placeholder:text-sm h-fit"
                value={answers[currentPage] || ''}
                onChange={(e)=>dispatch(setAnswer({i: currentPage, value: e.target.value}))}
            />
            <Paging total={random15} itemsPerPage={1}/>
            <div className="flex flex-col w-fit gap-2">
                {showResult ?
                    <>
                        <p className="font-main text-xl md:text-2xl md:py-2">You got {result} points!</p>
                        <button onClick={()=> navigate('/')}>Quit</button>
                    </>
                :
                    <>
                        <button className="w-fill  border-green-600 hover:bg-green-400 border-2 text-sm p-2"
                                onClick={() => {
                                    dispatch(setShowPopUp(true))
                                    dispatch(setQuitShow('show'))
                                }
                                }
                        >Save Quiz</button>
                        <button className="w-fill border-red-600 hover:bg-red-400 border-2 text-sm p-2"
                                onClick={() => {
                                    dispatch(setShowPopUp(true))
                                    dispatch(setQuitShow('quit'))
                                }
                                }
                        >Quit without saving</button>
                    </>
                }
            </div>
            {showPopUp && <PopUp />}
         </div>
         }
        </>
    )
}

export default Quiz