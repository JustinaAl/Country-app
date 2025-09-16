import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "../components/SelectDropdown";
import { fetchCountries, setPage, setRegion } from "../redux/regionSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const itemsPerPage = 12;

const CountriesPage = () => {

    const {regions, selectedRegion, countries, status, error, currentPage} = useSelector(store => store.regions);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchCountries(selectedRegion));
    }, [selectedRegion]);


    const countiesToDisplay = countries
    .slice(itemsPerPage * currentPage, itemsPerPage * (currentPage + 1))
    .map((country, index) => <Link to={`/country/${country.name.official}`}><div 
    key={'c'+index}
    className="border border-black aspect-[2/1.3] hover:scale-110 cursor-pointer"
    ><img
    className="h-[100%] w-full object-cover"
    src={country.flags.svg} alt={country.flags.alt}></img></div></Link>)

    const numberOfPages = Math.ceil(countries.length / itemsPerPage)
    const buttonsForPages = []

    for(let i = 0; i<numberOfPages; i++){
        buttonsForPages.push(
        <button
            className="p-2 w-12"
            key={`pg${i}`}
            onClick={()=> dispatch(setPage(i))}
                >{i + 1}
        </button>)
    }
    
    

    return(
        <div className="md:p-4 lg:p-6 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl mb-4">Select Region</h1>
            <SelectDropdown options={regions} value={selectedRegion} setValue={setRegion}/>
            <div>
                <div className="grid grid-cols-3 gap-4 md:gap-8 py-12">
                    {countiesToDisplay}
                </div>
                <div className="flex justify-center gap-4 ">
                    {buttonsForPages}
                </div>
            </div>
        </div>
    )
}

export default CountriesPage;