const Country = ({country, updateVisitedListOnClick}) => {
    
    const handleClick = (e) => {
        updateVisitedListOnClick(country.name.common);
    }
    
    return (
    <li className="button">
        <strong className="country__name">{country.name.common}</strong>
        <br/>
        <button onClick={handleClick}>Visited</button>
        <br/>
        <br/>
    </li>
    );
}
export default Country;