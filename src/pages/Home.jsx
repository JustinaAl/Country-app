
import { useSelector } from "react-redux"


const Home = () => {

    const countries = useSelector(store => store.countries.countries)

    return(
        <div >{countries[1]}</div>
    )
}

export default Home