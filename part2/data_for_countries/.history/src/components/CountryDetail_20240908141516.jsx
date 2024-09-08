const CountryDetail = ({ country }) => {
  const { name, languages, flags, capital, area } = country;
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
      <img src={flags.png} alt={flags.alt} />
    </div>
  );
};

export default CountryDetail;
