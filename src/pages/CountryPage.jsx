import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchCountry } from "../redux/countrySlice";
import { useEffect } from "react";


const CountryPage = () =>{

    const {countryName} = useParams();

    const dispatch = useDispatch();
    const {countryInfo, status, error} = useSelector(store => store.country)


    useEffect(() => {
        if (countryName) {
            dispatch(fetchCountry(countryName));
            console.log(countryName);
            
        }
    }, [dispatch, countryName]);

    if (status === "Loading"|| countryInfo.length === 0) return <p>Loading...</p>;
    if (status === "Failed") return <p>Error: {error}</p>;

    const country = countryInfo[0];
    const languages = Object.values(country.languages)
    const currencies = Object.values(country.currencies)

    

    return(
        <div className="space-y-4 md:p-6 md:space-y-10">
            <div className="flex justify-between">
                <button className="py-2 px-4 w-fit"><i class="fa-solid fa-arrow-left"></i></button>
                <button className="py-2 px-4 w-fit">Save</button>
            </div>
            <h1 className="text-2xl md:text-4xl">{country.name.official}</h1>
            <img className="w-[70%] m-auto" src={country.flags.png} alt="" />
            <div className="font-text text-md md:text-xl space-y-2 md:space-y-4">
                <div className="flex gap-4">
                    <span className="font-700">Capital:</span>
                    <ul className="flex flex-wrap italic">{country.capital.map((capital, index) => <li key={`cap${index}`}>{capital}{index < country.capital.length - 1 ? ', ' : '' }</li>)}</ul>
                </div>
                <div className="flex gap-4">
                    <span className="font-700">Languages:</span>
                    <ul className="flex flex-wrap italic">{languages.map((language, index) => <li key={`lang${index}`}>{language}{index < languages.length - 1 ? ', ' : '' }</li>)}</ul>
                </div>
                <div className="flex gap-4">
                    <span className="font-700">Currencies:</span>
                    <ul className="flex flex-wrap">{currencies.map((currency, index) => <li key={`cur${index}`}>{currency.name}{index < languages.length - 1 ? ', ' : '' }</li> )}</ul>
                </div>
                <div className="flex gap-4">
                    <span className="font-700">Population: </span>
                    <span>{country.population}</span>
                </div>
            </div>
        </div>
    )
}

export default CountryPage