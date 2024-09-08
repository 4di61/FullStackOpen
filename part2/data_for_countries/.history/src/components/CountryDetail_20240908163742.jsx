const CountryDetail = ({ country }) => {
  const { name, languages, flags, capital, area } = country;
//   let showDetail = false;

  if (!showDetail) {
    return (
      <div className="countryDetail">
        {name}
        <button onClick={() => (showDetail = !showDetail)}>show</button>
      </div>
    );
  }
  return (
    <div className="countryDetail">
      <h2>
        {name}
        <button onClick={() => (showDetail = !showDetail)}>hide</button>
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
