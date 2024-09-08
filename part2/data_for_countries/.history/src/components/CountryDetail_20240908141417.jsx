const CountryDetail = ({ country }) => {
  const { name, languages, flags, capital, area } = country;
  console.log(typeof languages);
  return (
    <div className="countryDetail">
      <h2>{name}</h2>
      capital {capital[0]}
      <br />
      area {area}
      <br />
      <h3>languages:</h3>
      <ul>
        {Object.values(languages).map((language) => (
          <li>{language}</li>
        ))}
          </ul>
      <img src={flags.png} alt={`Flag of ${name}`} />
    </div>
  );
};

export default CountryDetail;
