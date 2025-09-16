import { useSelector } from "react-redux";
import SelectDropdown from "../components/SelectDropdown";
import { setRegion } from "../redux/regionSlice";

const CountriesPage = () => {

    const {regions, selectedRegion} = useSelector(store => store.regions);

    return(
        <div>
            <h1 className="text-4xl">Select Region</h1>
            <SelectDropdown options={regions} value={selectedRegion} setValue={setRegion}/>
        </div>
    )
}

export default CountriesPage;