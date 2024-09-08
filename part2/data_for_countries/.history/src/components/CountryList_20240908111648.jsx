import CountryDetail from "./CountryDetail";

const CountryList = ({countryList}) => {
    return <div id="countryList">
        {countryList.map(country=> CountryDetail)}
    </div>
}

export default CountryList;