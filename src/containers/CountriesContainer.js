import { useState, useEffect} from "react";
import Country from "../components/Country";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
    const [countries, setCountries ] = useState([])
    const [visitedCountries, setVisitedCountries ] = useState([])
    
    useEffect(() => {
        updateList();
        }
    , []);
    
    const updateVisitedListOnClick = (country) => {
        setVisitedCountries([...visitedCountries, country]);
    } 
    
    const updateList = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(jsonData => setCountries(jsonData));
    }
    return (
        <> 
            {countries ?  <CountryList countries= {countries}/> : <p>Loading</p>}
            {countries ?  <CountryList countries= {visitedCountries}/> : <p>Loading</p>}
        </>
     );
}
export default CountryContainer;