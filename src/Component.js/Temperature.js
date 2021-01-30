import React, { useEffect } from 'react';
import '../App.css';
import axios from 'axios';

function Temperature(props) {

    const [city, setCity] = React.useState([])
    const [search, setSearch] = React.useState("delhi");

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=806dec7705832cf531a55c31abe6ef37`)
            .then(res => {
                const data = res.data
                setCity(data.main)
                console.log(data.main)
               

            })
            .catch(err => {
                console.log(err);
            }, [search])
    })

    const inputHandle = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className="card text-center my-3">
                <h2 className="mt-3 font">Check Weather Here</h2>
                <div className="card-header">
                    <input className="form-control w-75"
                        placeholder="Search city"
                        value={search}
                        onChange={inputHandle}
                    />
                </div>
                <div className="card-body">
                    <div className="mb-4">
                        <img className="card-img-top" src="https://icon-library.com/images/weather-app-icon/weather-app-icon-3.jpg" alt="Weatherapp Icon"></img>
                    </div>
                    <h1 className="card-title">🌥️ {search} 🌥️</h1>
                    <h2 className="card-text">{city.temp}°C</h2>
                    <h3>feels_like: {city.feels_like}°C</h3>
                    <h4>Min : {city.temp_min}°C Max : {city.temp_max}°C </h4>
                </div>
                <div className="card-footer bg-warning">
                    Humidity : {city.humidity}%   Pressure :  {city.pressure} mbar
                </div>
            </div>
        </>
    )
}
export default Temperature;
