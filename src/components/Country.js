const Country = ({country}) => {
    return (
    <li>
        {country.name.common}
        <button>Visited</button>
    </li>
    );
}
export default Country;