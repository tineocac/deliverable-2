import useFetch from '../hook/useFetch'
import ClockLoader
from "react-spinners/ClockLoader";
const WeatherApp = () => {

    const { weather, isKelvin, setIsKelvin, isLoading} = useFetch()

    return (
        <div>
            {
                isLoading ? (
                <>
                    <ClockLoader
                    color={"#C8FCEA"} size={150}/>
                    <h1>Loading</h1>
                </>
                ):
                <div className='container'>
                    <h1>Weather App</h1>
                    <h2>{weather.name}, {weather.sys?.country}</h2>
                    <h2>"{weather.weather?.[0].description}"</h2>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="weather-icon" />
                    <h2 className='temperature'>{isKelvin ? weather.main?.temp : Math.round(weather.main?.temp - 273.15)} {isKelvin ? "K" : "°C"}</h2>
                    <div className='state'>
                        <article>
                            <i className="fa-solid fa-wind"></i>
                            <b> Wind speed: </b>
                            {weather.wind?.speed}
                        </article>
                        <article>
                            <i className="fa-solid fa-cloud"></i>
                            <b> Clouds: </b>
                            {weather.clouds?.all}%
                        </article>
                        <article>
                            <i className="fa-solid fa-temperature-three-quarters"></i>
                            <b> Pressure: </b>
                            {weather.main?.pressure} mb
                        </article>
                    </div>
                    <button onClick={ () => setIsKelvin(!isKelvin)}> <span>Convert temperature to {isKelvin ? "°C" : "K"}</span> </button> 
                    </div>
            } 
        </div>
        );
};

export default WeatherApp;