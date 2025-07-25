// src/components/WeatherCard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherCard = ({ city = "Nairobi" }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [inputCity, setInputCity] = useState(city);

  const API_KEY = "a6b7c04f05510cdcf2b249d16da619d1";

  const fetchWeather = async (selectedCity) => {
    try {
      const current = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=${API_KEY}`
      );

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&units=metric&appid=${API_KEY}`
      );

      const filteredForecast = forecastRes.data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
      );

      setWeather(current.data);
      setForecast(filteredForecast.slice(0, 3));
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeather(null);
      setForecast([]);
    }
  };

  useEffect(() => {
    fetchWeather(inputCity);
  }, []);

  const handleSearch = () => {
    fetchWeather(inputCity);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      {/* Search Bar */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city (e.g. Nairobi)"
          className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {weather && (
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">{weather.name}</h3>
          <p className="text-2xl">{weather.main.temp}°C</p>
          <p className="capitalize">{weather.weather[0].description}</p>
        </div>
      )}

      {forecast.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">3-Day Forecast</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {forecast.map((day, index) => (
              <div key={index} className="bg-blue-100 dark:bg-gray-700 p-4 rounded-md text-center">
                <p className="font-medium">
                  {new Date(day.dt_txt).toLocaleDateString("en-KE", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt={day.weather[0].description}
                  className="mx-auto"
                />
                <p>{day.main.temp}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
