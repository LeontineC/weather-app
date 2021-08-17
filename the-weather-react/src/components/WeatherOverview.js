import React, { useState, useEffect } from 'react'
import WeatherCard from './WeatherCard'
import WeatherDetail from './WeatherDetail'

const cities = {
  'amsterdam': {
    longtitude: 4.8897,
    latitude: 52.374,
    name: 'Amsterdam',
  },
  'montreal': {
    longtitude: -73.5878,
    latitude: 45.5088,
    name: 'Montreal',
  }
};

const WeatherOverview = () => {
  const [data, setData] = useState()
  const [latitude, setLatitude] = useState(cities.montreal.latitude)
  const [longtitude, setLongtitude] = useState(cities.montreal.longtitude)
  const [city, setCity] = useState(cities.montreal.name)
  const [show, setShow] = useState(false)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
      .then((response) => response.json())
      .then((newData) => setData(newData))



  }, [latitude, longtitude]);

  if (!data) return null

  const handleOnClick = (city) => {
    /*
    const newLatitude = 52.374
    setLatitude(newLatitude)
    changeLongtitude()
    changeCity()
    */
    
    setLatitude(cities[city].latitude);
    setLongtitude(cities[city].longtitude);
    setCity(cities[city].name);
    
  }

  /*const changeLongtitude = (e) => {
    const newLongtitude = 4.8897
    setLongtitude(newLongtitude)
  }

  const changeCity = (e) => {
    const newCity = `Amsterdam`
    setCity(newCity)
  }

  const handleOnClickBack = (e) => {
    const newLatitudeBack = 45.5088
    setLatitude(newLatitudeBack)
    changeLongtitudeBack()
    changeCityBack()
  }

  const changeLongtitudeBack = (e) => {
    const newLongtitudeBack = -73.5878
    setLongtitude(newLongtitudeBack)

  }
  const changeCityBack = (e) => {
    const newCityBack = `Montreal`
    setCity(newCityBack)
  } */




  return (
    <>


      <div className='weatheroverview'>
        <WeatherCard data={data} city={city} />
      </div>
      <div className='weatherDetail'
        onClick={() => setShow(!show)}>
        <button className='button'>7-day forecast</button>
      </div>


      {show && <WeatherDetail data={data} />}
      <div className='buttonContainer'>
        <button className='citybutton'
          onClick={() => {
            handleOnClick('amsterdam')
          }}> the weather Amsterdam</button>
        <button className='citybutton'
          onClick={() => {
            handleOnClick('montreal')
          }}> the weather Montreal</button>
      </div>

    </>
  )
}

export default WeatherOverview
