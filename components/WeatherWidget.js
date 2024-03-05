'use client'

import { useState, useEffect } from 'react'

const WeatherWidget = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        //get the latitude and longitude 
        navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords?.latitude;
            let longitude = position.coords?.longitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=869ccd959710c42449ab7506049169b2&units=metric`

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
            console.error("Failed to get current location, defaulting to Sydney");
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=869ccd959710c42449ab7506049169b2&units=metric`

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

    console.log(data);

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No weather data</p>
    return (
        <div className="flex-1">
            <div className="flex flex-col items-center justify-center mt-6 min-w-xs max-w-xs">
                <div className="font-medium text-5xl">{data.main.temp}</div>
                <div className="font-medium text-sm">{data.weather[0].description}</div>
            </div>
            <div className="flex flex-row justify-between mt-6">
                <div className="flex flex-col items-center">
                    <div className="font-medium text-sm">Wind</div>
                    <div className="text-sm text-gray-500">{data.wind.speed}k/h</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="font-medium text-sm">Humidity</div>
                    <div className="text-sm text-gray-500">{data.main.humidity}%</div>
                </div>
                {/* <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center ml-6">
                        <div className="mt-1">
                            <span className="text-sm font-light text-gray-500">{data.main.temp_max}</span>
                        </div>
                        <div>
                            <span className="text-sm font-light text-gray-500">{data.main.temp_min}</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default WeatherWidget
