import Country from "./Country";

const CountryList = ({countries}) => {
    const countryComponents = countries.map((country, index) => {
    return <Country country={country} key={index}/>;
     });
      return (
      <ul>
      {countryComponents}
      </ul>
      )
}
export default CountryList;