import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Filter = ({filter, handler}) => {
  return (
    <div>
      Find countries: <input value={filter} onChange={handler}></input>
    </div>
  );
}

const CountryDisplay = ({countries, showCountry}) => {
  if (countries.length > 10) {
    return <div>Too many countries match, please specify another filter.</div>
  } else if (countries.length <= 10 && countries.length > 1) {
    return <div>{countries.map(country => <div key = {country.name}>{country.name}<button onClick={showCountry(country.name)}>show</button></div>)}</div>
  } else if (countries.length === 1) {
    return (
      <Country country={countries[0]}/>
    )
  } else {
    return <div>No countries found.</div>
  }
}

const Country = ({country}) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={country.flag} alt = {"Flag of " + country.name}/>
    </div>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState('')

  const handleNameChange = (event) => {
    setCountryName(event.target.value)
  }

  const showCountry = (countryName) => () => {
    setCountryName(countryName)
  }

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((countries) => {
        setCountries(countries.data)
      })
  }, [])

  const shownCountries = countries.filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()))

  return ( 
    <>
      <Filter filter={countryName} handler={handleNameChange}/>
      <CountryDisplay countries={shownCountries} showCountry={showCountry}/>
    </>
  )
}

export default App;
