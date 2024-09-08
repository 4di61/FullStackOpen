import { useEffect, useState } from "react";
import weatherService from "../services/weatherService";

const CountryDetail = ({ country, detailed }) => {
  const { name, languages, flags, capital, area } = country;
  const [showDetail, setShowDetail] = useState(detailed);
  const [weather, setWeather] = useState({});

  if (!showDetail) {
    return (
      <div className="countryDetail">
        {name}
        <button onClick={() => setShowDetail(!showDetail)}>show</button>
      </div>
    );
  }
    useEffect(() => {
        
    })

  return (
    <div className="countryDetail">
      <h2>
        {name}
        <button onClick={() => setShowDetail(!showDetail)}>hide</button>
      </h2>
      capital {capital[0]}
      <br />
      area {area}
      <br />
      <h3>languages:</h3>
      <ul>
        {Object.values(languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img id="flag" src={flags.png} alt={flags.alt} />
      <h2>Weather in {name}</h2>
      {/* temperature icon wind */}
    </div>
  );
};

export default CountryDetail;
