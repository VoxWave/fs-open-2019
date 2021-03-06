import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Numbers = ({persons, filter}) => {
  return persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map(person => 
    <div key={person.name}>{person.name} {person.number}</div>
  )
}

const NewName = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange}) => 
<>
  <h2>Add a New Person</h2>
  <form onSubmit={addPerson}>
    <div>name: <input value={newName} onChange={handleNameChange}/></div>
    <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
</>

const Filter = ({filter, handleFilterChange}) => 
<div>
  filter shown with: <input value={filter} onChange={handleFilterChange}/>
</div>

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(p => p.name).includes(newName)) {
      alert('${newName} is already added to the phonebook')
      return
    }
    const personObject = { name: newName, number: newNumber }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <NewName 
        addPerson={addPerson} 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} filter={filter}/>
    </div>
  )

}

export default App