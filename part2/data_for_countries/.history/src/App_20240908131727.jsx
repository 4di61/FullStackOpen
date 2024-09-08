
import Filter from './components/Filter'
import CountryList from './components/CountryList'
import { useState } from 'react'


const App = () => {

  const [countryList, setCountryList] = useState([])
  return <div>
    <Filter />
    {/* <CountryList/> */}
  </div>
}

export default App
