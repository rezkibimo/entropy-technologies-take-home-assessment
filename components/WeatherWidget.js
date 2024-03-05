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
        <div className="lg:flex flex-1 flex-col">
            <div className="flex flex-col items-center justify-center min-w-xs min-h-[150px]">
                <div className="font-medium text-3xl">{data.main.temp}</div>
                <div className="font-medium text-sm">{data.weather[0].description}</div>
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
