import { useState, useEffect} from "react";
import Country from "../components/Country";
import CountryList from "../components/CountryList";

const CountryContianer = () => {
    const [countries, setCountries ] = useState([])
    useEffect(() => {
        updateList();
        }
    , []);
    
    // const updateVisitedList = () => {
    // }
    
    const updateList = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(jsonData => setCountries(jsonData));
    }
    return (
         countries ?  <CountryList countries= {countries}/> : <p>Loading</p>
     );
}
export default CountryContianer;