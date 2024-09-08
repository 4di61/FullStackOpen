const CountryDetail = ({ countryDetail }) => {
    const { name, languages, flag, capital, area } = countryDetail;
    return <div className="countryDetail">
        <h2>{countryDetail.name}</h2>
        capital {capital}
        <br />
        area {area}
        
    </div>
}

export default CountryDetail;