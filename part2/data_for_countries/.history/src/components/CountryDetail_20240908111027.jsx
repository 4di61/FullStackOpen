const CountryDetail = ({ countryDetail }) => {
    { name, languages, flag } = countryDetail;
    return <div className="countryDetail">
        <h2>{countryDetail.name}</h2>
    </div>
}

export default CountryDetail;