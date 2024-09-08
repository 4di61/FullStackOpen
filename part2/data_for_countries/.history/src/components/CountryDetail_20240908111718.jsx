import { Linter } from "eslint";

const CountryDetail = ({ country }) => {
    const { name, languages, flag, capital, area } = country;
    return <div className="countryDetail">
        <h2>{country.name}</h2>
        capital {capital}
        <br />
        area {area}
        <br />
        <h3>languages:</h3>
        <ul>
            {languages.map(language=> <li>language</li>)}
        </ul>
        <img src={ flag} alt={`Flag of ${name}`} />
    </div>
}

export default CountryDetail;