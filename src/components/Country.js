const Country = ({country}) => {
    
    const handleClick = (e) => {
        
    }
    
    return (
    <li>
        {country.name.common}
        <button onClick={handleClick}>Visited</button>
    </li>
    );
}
export default Country;