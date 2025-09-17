import { useNavigate } from "react-router-dom"

const StartPage = () => {

    const navigate = useNavigate();

    return(
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-center space-y-14">
            <h1 className="text-4xl">Country Exlorer</h1>
            <div className="w-fit space-y-16">
                <div className="flex flex-col items-center w-full space-y-4">
                    <button onClick={()=> navigate('/countries')}>Learn Countries</button>
                    <button onClick={()=> navigate('/collection')}>Collection</button>
                </div>
                <div className="flex flex-col items-center w-full space-y-4">
                    <button >Country Quiz</button>
                    <button >Leaderboard</button>
                </div>
            </div>
        </div>
    )
}

export default StartPage