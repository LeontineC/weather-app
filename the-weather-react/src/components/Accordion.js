import React, { useState } from 'react'
import WeatherIcons from '../Assets/WeatherIcons'



const Accordion = ({ day }) => {

    const [clicked, setClicked] = useState(false)


    return (
        <>
            <div className='item'>
                <div className='title'
                    onClick={() => setClicked(!clicked)}>
                    <div className='titleIcons'> {new Intl.DateTimeFormat('en-UK', { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(day.dt * 1000))} <WeatherIcons size='20' iconID={day.weather[0].icon} />
                    </div>
                    <div>{clicked ? '-' : '+'}</div>
                </div>
                {clicked && <div className='content'>
                    <p>{`morning:${Math.round(day.temp.morn)}\u00b0C noon:${Math.round(day.temp.day)}\u00b0C  evening:${Math.round(day.temp.eve)}\u00b0C  night:${Math.round(day.temp.night)}\u00b0C`}</p>
                </div>}
            </div>
        </>
    )
}

export default Accordion
