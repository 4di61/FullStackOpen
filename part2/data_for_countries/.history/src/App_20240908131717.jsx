
import Filter from './components/Filter'
import CountryList from './components/CountryList'


const App = () => {

  const [countryList, setCountryList] = use
  return <div>
    <Filter />
    {/* <CountryList/> */}
  </div>
}

export default App
