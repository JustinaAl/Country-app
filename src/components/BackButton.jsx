import { useNavigate } from "react-router-dom"

const BackButton = () => {
    const navigete = useNavigate();
    return <button onClick={()=>navigete(-1)}
                className="py-1 px-2 md:py-2 md:px-4 w-fit"><i className="fa-solid fa-arrow-left"></i>
            </button>
}

export default BackButton