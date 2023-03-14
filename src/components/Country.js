const Country = ({country, onVisit}) => {
    const {name, flag} = country;

    //callback to onVisit 
    const handleVisit = () => {
        onVisit(country);
    }

    // handle visit and add button
    return (
        <div className="country">
            <img className="country__flag" src={flag} alt={name} />
            
            <div className="country__info">
                <h2 className="country__name">{name}</h2>
                <button onClick={handleVisit}>Visited?</button>
            </div>

        </div>
    )
}

export default Country;