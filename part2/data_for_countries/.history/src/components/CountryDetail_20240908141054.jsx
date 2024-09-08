
const CountryDetail = ({ country }) => {
    const { name, languages, flag, capital, area } = country;
    console.log(typeof languages)
  return (
    <div className="countryDetail">
      <h2>{name}</h2>
      capital {capital[0]}
      <br />
      area {area}
      <br />
      <h3>languages:</h3>
      <ul>
        {languages.values().map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <img src={flag} alt={`Flag of ${name}`} />
    </div>
  );
};

export default CountryDetail;
