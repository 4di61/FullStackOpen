import { useState } from 'react'
import { Filter,CountryList } from './components/Filter'

const App = () => {
  return <div id="app">
    <Filter />
    <CountryList/>
  </div>
}

export default App
