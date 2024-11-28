import axios from "axios";

// Define the interface for the weather data
export interface WeatherResponse {
    resolvedAddress: string;
    currentConditions: {
        temp: number;
        conditions: string;
        windspeed: number;
        humidity: number;
    };
}

// Fetch weather data
export const fetchWeatherData = async (location: string): Promise<WeatherResponse | null> => {
    try {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=current&key=9LLJNEBE2DRMD6DHXR5QA9HYU&contentType=json`;
        const response = await axios.get<WeatherResponse>(url);
        console.log(response.data); // Log the data to the console
        return response.data; // Return the data
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null; // Return null if there is an error
    }
};
