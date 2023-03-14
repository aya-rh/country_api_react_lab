import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import VisitedCountryList from "../components/VisitedCountryList";


const CountriesContainer = () => {
    //define two state variables and declare as empty arrays
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    //hook to fetch data from api
    useEffect (()=>{
        updateCountryData();
    },[]);

    const updateCountryData = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((jsonData)=> setCountries(jsonData.common.name))
    }

    //to handle the visit and enable marking country as visited
    const handleVisit = (country) => {
        setVisitedCountries(preVisited => [...preVisited, country]);
    }

    return(
        <div>
            <CountryList countries= {countries} onVisit={handleVisit}/>
            <VisitedCountryList visitedCountries={visitedCountries}/>
        </div>
    )
    //pass countried, visitedCountries, and onVisit as props
};

export default CountriesContainer;