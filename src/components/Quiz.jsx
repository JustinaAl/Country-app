import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, resetPage } from "../redux/regionSlice";
import { useEffect } from "react";
import { setAnswer, setRandom15 } from "../redux/quizSlice";
import Paging from "./Paging";


const Quiz = () => {


    const dispatch = useDispatch();
    const {countries, status, error, selectedRegion, currentPage} = useSelector(store => store.regions)
    const {random15, answers} = useSelector(store => store.quiz)


    useEffect(() => {
        dispatch(fetchCountries(selectedRegion));
        dispatch(resetPage())
    }, []);

    useEffect(() => {
        dispatch(setRandom15(countries))
    }, [countries]);

    useEffect(() => {
        console.log(random15);
    }, [random15]);

     useEffect(() => {
        console.log(answers);
    }, [answers]);


    if (status === "Loading"|| countries.length === 0) return <p>Loading...</p>;
    if (status === "Failed") return <p>Error: {error}</p>;


    return (
        <>
         {random15.length !== 15 ? <p>Loading.</p> : 
         
         <div className="h-[100%] space-y-6 flex flex-col items-center justify-center md:space-y-12">
            <div className="aspect-[2/1.3] w-[50%] mx-auto flex items-center">
                <img src={random15[currentPage].flags.png} 
                alt={random15[currentPage].flags.alt}
                className = "w-full"/>
            </div>
            <input type="text" 
                placeholder="Enter name of a country"
                className="placeholder:text-sm h-fit"
                value={answers[currentPage] || ''}
                onChange={(e)=>dispatch(setAnswer({i: currentPage, value: e.target.value}))}
            />
            <Paging total={random15} itemsPerPage={1}/>
            <div className="flex flex-col w-fit gap-2">
                <button className="w-fill  border-green-600 hover:bg-green-400 border-2 text-sm p-2"
                        onClick={()=> {}}
                >Save Quiz</button>
                <button className="w-fill border-red-600 hover:bg-red-400 border-2 text-sm p-2"
                    
                >Quit without saving</button>
            </div>
         </div>
         }
        </>
    )
}

export default Quiz