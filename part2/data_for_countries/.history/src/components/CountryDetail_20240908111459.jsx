import { Linter } from "eslint";

const CountryDetail = ({ countryDetail }) => {
    const { name, languages, flag, capital, area } = countryDetail;
    return <div className="countryDetail">
        <h2>{countryDetail.name}</h2>
        capital {capital}
        <br />
        area {area}
        <br />
        <h3>languages:</h3>
        <ul>
            {languages.map(language=> <li>language</li>)}
        </ul>
        <img src={ flag} alt="" />
    </div>
}

export default CountryDetail;