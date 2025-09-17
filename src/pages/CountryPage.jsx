import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchCountry } from "../redux/countrySlice";
import { useEffect } from "react";
import CountryInfo from "../components/CountryInfo";
import CountryPageToolbar from "../components/CountryPageToolbar";


const CountryPage = () =>{

    const {countryName} = useParams();

    const dispatch = useDispatch();
    const {countryInfo, status, error} = useSelector(store => store.country)


    useEffect(() => {
        if (countryName) {
            dispatch(fetchCountry(countryName));
        }
    }, [dispatch, countryName]);


    if (status === "Loading"|| countryInfo.length === 0) return <p>Loading...</p>;
    if (status === "Failed") return <p>Error: {error}</p>;

    const country = countryInfo[0];
    

    return(
        <div className="space-y-4 md:p-6 md:space-y-10">
            <CountryPageToolbar country={country} to={'/countries'}/>
            <CountryInfo country={country}/>
        </div>
    )
}

export default CountryPage