import { useState, useEffect } from "react";
import axios from "axios";
import backgroundsFuction from "../helpers/backgroundsFuction";

const useFetch = () => {

    const [weather, setWeather] = useState({})
    const [isKelvin, setIsKelvin] = useState(true)

    useEffect(() => {
        
        navigator.geolocation.getCurrentPosition(success);

        function success(pos) {
            const crd = pos.coords;

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=40da5385388e0391eb19a7c9215d511c`)
            .then( res => setWeather(res.data))
            }
        }, [])


        useEffect(() =>{
            backgroundsFuction(weather.weather?.[0].main)
        }, [weather])

    return{weather, isKelvin, setIsKelvin}

};

export default useFetch;
