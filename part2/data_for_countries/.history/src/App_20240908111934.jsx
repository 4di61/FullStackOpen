import { useState } from 'react'
import Filter from './components/Filter'
import CountryList from './components/Filter'

const App = () => {
  return <div id="app">
    <Filter />
    <CountryList/>
  </div>
}

export default App
