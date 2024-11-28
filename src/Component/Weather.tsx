import React, { useEffect, useState } from "react";
import { fetchWeatherData, WeatherResponse } from "./Service/WeatherApi";

const Weather: React.FC = () => {

    const [weather, setWeather] = useState<WeatherResponse | null>(null);
    const [location, setLocation] = useState<string>("Ranchi");
    const [input, setInput] = useState<string>("");

    useEffect(() => {
        const getWeather = async () => {
            const data: WeatherResponse | null = await fetchWeatherData(location);
            setWeather(data);
        };

        getWeather();
    }, [location]);
    const handleSearch = () => {
        if (input.trim()) {
            setLocation(input.trim());
            setInput("");
        }
    };

    return (
        <div className="min-h-screen text-white flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white text-gray-800 rounded-lg shadow-lg p-6">
                {/* Search Bar */}
                <div className="flex items-center space-x-2 mb-6">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter location"
                        className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Search
                    </button>
                </div>


                {weather ? (
                    <>
                        <h1 className="text-2xl font-bold text-center mb-4">
                            Weather in {weather.resolvedAddress.split(",")[0]}
                        </h1>
                        <div className="text-center">
                            <p className="text-6xl font-bold">{weather.currentConditions.temp}°C</p>
                            <p className="text-lg">{weather.currentConditions.conditions}</p>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div className="text-center">
                                <p className="text-sm font-medium">Wind Speed</p>
                                <p className="text-lg">{weather.currentConditions.windspeed} km/h</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-medium">Humidity</p>
                                <p className="text-lg">{weather.currentConditions.humidity}%</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-center text-lg font-semibold">Loading weather data...</p>
                )}
            </div>
        </div>
    );
};

export default Weather;
