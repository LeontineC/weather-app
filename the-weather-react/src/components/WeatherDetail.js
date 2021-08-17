import React from 'react'
import './WeatherDetail.css';
import Accordion from './Accordion';



const WeatherDetail = ({ data }) => {


    if (data.daily.length > 7) {
        data.daily.shift();
    }

    return (

        <div className='containerForecast'>
            <div className='accordion'>
                {data.daily.map((day) => <Accordion day={day} />)}
            </div>
        </div>
    )

}

export default WeatherDetail




