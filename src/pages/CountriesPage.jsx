import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "../components/SelectDropdown";
import { fetchCountries, setRegion } from "../redux/regionSlice";
import { useEffect } from "react";
import BackButton from "../components/BackButton";
import CountriesToDisplay from "../components/CountriesToDisplay";
import Paging from "../components/Paging";


const CountriesPage = () => {

    const {regions, selectedRegion, countries, status, error} = useSelector(store => store.regions);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchCountries(selectedRegion));
    }, [selectedRegion]);
        

    return(
        <div className="md:p-4 lg:p-6 h-full flex flex-col justify-center">
            <BackButton/>
            <label htmlFor="selectRegion" className="text-4xl md:text-5xl mb-4">Select Region</label>
            <SelectDropdown options={regions} value={selectedRegion} setValue={setRegion} id={'selectRegion'}/>
            <div>
                <CountriesToDisplay countries={countries}/>
                <Paging total={countries} itemsPerPage={12}/>
            </div>
        </div>
    )
}

export default CountriesPage;