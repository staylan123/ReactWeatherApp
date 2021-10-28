import { useState } from "react";
import axios from "axios";
require('dotenv').config()


const useFetchWeather = (url) => {
  const [data, setData] = useState(null); // Weather Json
  const [loading, setLoading] = useState(false); // Loading Circle
  const [error, setError] = useState(null); // Errors
 
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  // getWeather -> user input
  async function getWeather(location) {
    try {
      setLoading(true); // loading -> currently fetching data
      setError(false); // error -> will be false prior to callingg api
      const response = await axios.get(url, {
        params: {
          q: location,
          units: 'imperial',
          APPID: apiKey
        }
      })
      setData(response.data); // sets "data" to the response.data of the fetch
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false); // once data fetched sets loading back to false
    }
  }

  return { data, loading, error, getWeather };
};

export default useFetchWeather;