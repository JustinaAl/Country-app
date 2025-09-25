const CountryInfo = ({country}) => {

    const { name: { common:name }, flags: { png:flags }, capital, population, maps: { googleMaps:maps } } = country;

    const languages = Object.values(country.languages)
    const currencies = Object.values(country.currencies)

    return(
        <>
            <h1 className="text-2xl md:text-4xl">{name}</h1>
            <img className="w-[70%] m-auto" src={flags} alt="" />
            <div className="text-md md:text-xl space-y-2 md:space-y-4">
                <div className="flex gap-4">
                    <span className="font-700">Capital:</span>
                    <ul className="flex flex-wrap italic">{capital.map((capital, index) => <li key={`cap${index}`}>{capital}{index < country.capital.length - 1 ? ', ' : '' }</li>)}</ul>
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
                    <span className="italic">{population}</span>
                </div>
                <div className="flex gap-4">
                    <span className="font-700">Google maps: </span>
                    <span className="italic"><a className="font-700 text-red-700" href={maps} target="_blank">Link</a></span>
                </div>
            </div>
        </>
    )
}

export default CountryInfo;