import Country from "./Country";

const CountryList = ({countries, updateVisitedListOnClick}) => {
    
    const countryComponents = countries.map((country, index) => {
    return <Country country={country} key={index} updateVisitedListOnClick= {updateVisitedListOnClick}/>;
     });
    
    
    return (
      <ul>
      {countryComponents}
      </ul>
    )
}
export default CountryList;