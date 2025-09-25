import { useEffect } from "react";
import BackButton from "./BackButton";
import { useDispatch, useSelector } from "react-redux";
import { addCountry, removeCountry, setSavedCountries } from "../redux/regionSlice";


const CountryPageToolbar = ({country}) => {

    const savedArray = JSON.parse(localStorage.getItem('savedList'))
    let exists;
    if (savedArray) {
        exists = savedArray.some(item => item.name.common === country.name.common)
    }

    const dispatch = useDispatch();

    const {savedCountries} = useSelector(store => store.regions);

    useEffect(() => {
        dispatch(setSavedCountries());
    },[]);

    useEffect(() => {
    }, [savedCountries]);


    return(
        <>
            <div className="flex justify-between">
                <BackButton/>
                {!exists ? 
                    <button onClick={()=>dispatch(addCountry(country))}
                    className="py-1 px-2 md:py-2 md:px-4 w-fit">Save</button> :
                    <button onClick={()=>dispatch(removeCountry(country))}
                    className="py-1 px-2 md:py-2 md:px-4 w-fit bg-red-400 border-red-700">Remove</button>
                }
            </div>
        </>
    )
}

export default CountryPageToolbar