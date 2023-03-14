import Country from "./Country";

const CountryList = ({countries, onVisit}) => {
    // pass props

    // map countries and return country
    return (
        <div className="country__list">
            {countries.map((country, index) => (
                <>Country key={index} country={country} onVisit{onVisit}</>
            ))}
        </div>
    )
};

export default CountryList;