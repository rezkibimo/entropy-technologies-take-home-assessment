'use client'

import { useState, useEffect } from 'react'

const WeatherWidget = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const appid = process.env.OPENWEATHERMAP_API_KEY

    useEffect(() => {
        //get the latitude and longitude 
        navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords?.latitude;
            let longitude = position.coords?.longitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appid}&units=metric`

            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                    setLoading(false)
                })
                .catch((error) => {
                    console.error("Failed to fetch weather data:", error);
                    setLoading(false);
                });
        }, () => {

            //If failed to get latitude and longitude it will default to Sydney

            console.error("Failed to get current location, defaulting to Sydney");
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${appid}&units=metric`

            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                    setLoading(false)
                })
                .catch((error) => {
                    console.error("Failed to fetch weather data for Sydney:", error);
                    setLoading(false);
                });
        });
    }, [])

    // console.log(data);

    if (isLoading) return <p className="min-w-[230px] min-h-[150px]">Loading...</p>
    if (!data) return <p>No weather data</p>
    return (
        <div className="flex md:flex-1 lg:flex flex-col">
            <div className="flex flex-col items-center justify-center min-w-xs min-h-[150px]">
                <div className="font-medium text-3xl">{data.main.temp.toFixed(1)}&deg;C</div>
                <div className="font-medium text-lg">{data.weather[0].description}</div>
                <div className="text-sm font-light text-gray-500">L: {data.main.temp_min} H: {data.main.temp_max}</div>

            </div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-col items-center">
                    <div className="font-medium text-sm">Wind</div>
                    <div className="text-sm text-gray-500">{data.wind.speed}k/h</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="font-medium text-sm">Humidity</div>
                    <div className="text-sm text-gray-500">{data.main.humidity}%</div>
                </div>
            </div>
        </div>
    );
}

export default WeatherWidget
