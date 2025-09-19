import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/regionSlice";
import { Link } from "react-router-dom";


const CountriesToDisplay = ({countries}) => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setPage(0));
    }, []);

    const {currentPage , itemsPerPage} = useSelector(store => store.regions);

    const countiesToDisplay = countries
        .slice(itemsPerPage * currentPage, itemsPerPage * (currentPage + 1))
        .map((country, index) => <Link key={'c'+index} to={`/country/${country.name.official}`}><div 
        className="border border-black aspect-[2/1.3] hover:scale-110 cursor-pointer"
        ><img
        className="h-[100%] w-full object-cover"
        src={country.flags.svg} alt={country.flags.alt}></img></div></Link>)

    return(
        <div className="grid grid-cols-3 gap-4 md:gap-8 py-12">
            {countiesToDisplay}
        </div>
    )
}

export default CountriesToDisplay