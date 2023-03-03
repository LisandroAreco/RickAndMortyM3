import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'

function App () {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  //simulacion de seguridad
  const [access, setAccess] = useState(false)
  const navigate = useNavigate()

  const username = "areco.lisandro@gmail.com"
  const password = "123asd"
  
  const login = (userData) => {
    if(userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/")
  }, [access])
//
  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== id)
    )

  }

  return (
    <div className='App' >
      {location.pathname === "/" ? <Form login={login}/> : <Nav onSearch={onSearch} />}
      <Routes> 
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </div>
  )
}

export default App
