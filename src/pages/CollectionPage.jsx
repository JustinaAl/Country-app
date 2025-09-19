import { useDispatch, useSelector } from "react-redux"
import BackButton from "../components/BackButton"
import CountriesToDisplay from "../components/CountriesToDisplay"
import Paging from "../components/Paging"
import { useEffect } from "react"
import { setSavedCountries } from "../redux/regionSlice"


const CollectionPage = () => {
    
    const dispatch = useDispatch();
    const {savedCountries} = useSelector(store => store.regions);

    useEffect(() => {
        dispatch(setSavedCountries());
    },[]);
    
    return(
        <div className="h-full">
            <BackButton/>
            <div>
                <h1 className="text-3xl md:text-4xl mt-4">Saved Countries</h1>
                {!savedCountries ? <p className="text-xl text-center pt-24">You dont have any countries saved!</p> :
                <>
                    <CountriesToDisplay countries={savedCountries} />
                    <Paging total={savedCountries} itemsPerPage={12}/>
                </> 
                }
            </div>
        </div>
    )
}

export default CollectionPage;