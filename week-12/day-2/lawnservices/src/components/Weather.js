import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchData } from '../redux/actions/WeatherActions'
import WeatherCard from './WeatherCard'
// const weatherAPI = process.env.REACT_APP_weatherAPIKEY

export default function Weather() {
const dispatch = useDispatch()
const weather = useSelector((state) => state.weatherData)
useEffect(() => {
    const getWeatherData = async () => {
        const getWeather = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=29.69&lon=-95.68&units=imperial&exclude=minutely,hourly,alerts,current&appid=750ea5847bbdbf22dec14f20d97e9f2e'
        )
        const jsonWeather = await getWeather.json();
        dispatchData(dispatch, jsonWeather)
    }
    getWeatherData()
    return () => {
        
    }
}, [])

    return (
        <div className="weatherPage">
            <Link to="/">Back Home</Link>
            <div className="weatherPage2">
            <h2>Safety is our number 1 priority, so we don't work in storms. Check the weather forecast to see if we can schedule service, or if you need to water your plants!</h2>
            <h3>Today's Weather and 7 Day Forecast:</h3>
            
            {weather?.data?.daily?.map((day) => (<WeatherCard weather={day} />))}
            </div>

        </div>
    )
}
