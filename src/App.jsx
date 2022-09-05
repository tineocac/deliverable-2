import './App.css'
import ClockLoader
from "react-spinners/ClockLoader";
import { useState, useEffect } from 'react';
import WeatherApp from './assets/components/WeatherApp';
import images from './images.json'

function App() {

  const [ spinner, setSpinner] = useState(false)
  const [text, setText] = useState()

  console.log(images);

  useEffect(() => {
    setSpinner(true)
    setTimeout(() =>{
    setSpinner(false)},
    3000
    )
    setText("Loading")
    setTimeout(() =>{
      setText()
    }, 3000)
    
  }, [])

  return (

    <div className='App'>
      {
      spinner ? <ClockLoader
      color={"#C8FCEA"} loading={spinner} size={150} /> : 
      <WeatherApp/>
      } 
      <h1>{text}</h1>
      <img src="./assets/images/clear-sky-day.jpg" alt="" />
      
    </div>
  )
}

export default App
