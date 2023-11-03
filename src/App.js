import { useState } from "react"
import './App.css'

const App = () => {
  const api = {
    key:"a53765c75df701814120db4065624aed",
    base:"https://api.openweathermap.org/data/2.5/"
  }
  const[search,setSearch]=useState("")
  const[weather,setWeather]=useState({})
  function searchPress(){
    fetch(`${api.base}/weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(data=>setWeather(data))
  }
  return (
    <div className="Main">
      <div className='App'>
      <br />
      <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
      <br /><br />
      <button onClick={searchPress}>Search</button>
      <br />
      {(typeof weather.main !=="undefined")?(
        <div>
          <p>Name:{weather.name}</p>
          <p>Temp:{weather.main.temp}⭐</p>
          <p>Rain/Cloud:{weather.weather[0].main}</p>
          <p>Description:{weather.weather[0].description}</p>
        </div>
      ):("Not Found")}
      <br /><br />
      </div>
    </div>
  )
}

export default App
