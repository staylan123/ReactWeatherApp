import React, { Fragment } from "react";
import useFetchWeather from "../hooks/useFetchWeather";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";

import classes from './WeatherPage.module.css';

require('dotenv').config()

const WeatherPage = () => {

  const apiUrl = process.env.REACT_APP_WEATHER_API_URL;

  const {
    data: forecast,
    loading,
    error,
    getWeather,
  } = useFetchWeather(`https://${apiUrl}?`);

  const onSubmit = (location) => {
    getWeather(location);
  };

  return (
    <Fragment>
        <h1 className={classes.appHeader}>Weather App</h1>
        <WeatherForm submitLocation={onSubmit} error={error} />
        <WeatherInfo forecast={forecast} error={error} loading={loading}/>
    </Fragment>
  );
};

export default WeatherPage;
