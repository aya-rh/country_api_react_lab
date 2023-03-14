import Country from "./Country";

const VisitedCountryList = (visitedCountries) => {
    return (
        <div className="visited-country__list">
            <h2>Visited Countries List: </h2>
            <ul>
                {visitedCountries.map((country, index) => (
                 <li key={index}>{country.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default VisitedCountryList;
