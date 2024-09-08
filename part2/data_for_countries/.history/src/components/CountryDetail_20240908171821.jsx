import { useState } from "react";

const CountryDetail = ({ country,  detailed}) => {
  const { name, languages, flags, capital, area } = country;
  const [showDetail, setShowDetail] = useState(detailed);
    log
  if (!showDetail) {
    return (
      <div className="countryDetail">
        {name}
        <button onClick={() => setShowDetail(!showDetail)}>show</button>
      </div>
    );
  }
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
    </div>
  );
};

export default CountryDetail;
