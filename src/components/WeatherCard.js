import React from 'react'

import CurrentTime from './CurrentTime'
import WeatherIcons from '../Assets/WeatherIcons'



const WeatherCard = ({ data, city}) => {

    const iconType = (data.current.weather[0].icon)
    const timezone = (data.timezone)
    const todaysDate = new Intl.DateTimeFormat('en-UK', {weekday: 'long', day: '2-digit' , month: 'long', year: 'numeric'  }).format(new Date(data.current.dt * 1000))
    
    return (
        
        <div className='containerCard'>

            
            <p>{todaysDate}</p>
            <h2>{city}</h2>
            <CurrentTime thetimezone = {timezone} />
            <div className='weatherOnly'>
            <p>{Math.round(data.current.temp)} &deg; C</p>
            <p>{data.current.weather[0].description}</p>
            <WeatherIcons iconID={iconType} />
            <p>humidity: {data.current.humidity} %</p>
            </div>
        </div>
        
    )
}

export default WeatherCard
