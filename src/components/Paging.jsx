import { useDispatch, useSelector } from "react-redux"
import { setPage } from "../redux/regionSlice";

const Paging = ({total}) => {

    const dispatch = useDispatch();
    const {itemsPerPage} = useSelector(store => store.regions);

    const numberOfPages = Math.ceil(total.length / itemsPerPage)
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
        <div className="flex justify-center gap-4 ">
            {buttonsForPages}
        </div>
    )
}

export default Paging