import BackButton from "../components/BackButton"

const Region = ({region, users}) => {
    return(
        <div>
            <p className="text-xl font-main font-500">{region}</p>
            <ul className="font-text text-md italic">
                {users.map(user => <li key={user.name}>{user.name} - {user.points}p</li>)}
            </ul>
        </div>
    )
}

const LeaderboardPage = () => {

    const data = JSON.parse(localStorage.getItem('quizResults'));
    let resultsToShow;

    if (data) {

        const sortedByPoints = data.sort((a, b) => b.points - a.points);
        const sortedByRegion = sortedByPoints.sort((a, b) => a.region.localeCompare(b.region));
        const groupedByRegion = Object.groupBy(sortedByRegion, region => region.region);

        const keepFirstThree = (data) => {
            const newData = {};
            for (const key in data) {
                newData[key] = data[key].slice(0, 3);
            }
            return newData;
        }

        resultsToShow = keepFirstThree(groupedByRegion);
        
    }
    

    return(
        <div className="h-full">
            <div className="flex h-fit mb-8 md:mb-14">
                <BackButton />
                <h1 className="text-3xl w-full md:text-4xl">Top scores</h1>
            </div>
            <div className="grid grid-cols-2 md:px-8 h-full max-h-[500px] m-auto">
                {data ? Object.entries(resultsToShow).map(([region, users]) => (<Region key={region} region={region} users={users}/>)) : <p>It seems like no one played yet!</p>}
            </div>
        </div>
    )
}

export default LeaderboardPage;