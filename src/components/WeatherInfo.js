import LoadingSpinner from "./UI/LoadingSpinner";
import classes from "./WeatherInfo.module.css";

const WeatherInfo = ({ forecast, error, loading }) => {
  return (
    <div>
      {forecast && (
        <div className={classes.weatherBox}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div>
              {/* Location */}
              <h2 className={classes.location}>
                {forecast.name}, {forecast.sys.country}
              </h2>
              {/* Image and Condition */}
              <div className={classes.imageCard}>
                <img
                  src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                  alt="Weather Icon"
                />
                <div className={classes.description}>
                  {forecast.weather[0].description}
                </div>
              </div>
              {/* Temp */}
              <div className={classes.mainTemp}>
                {forecast.main.temp.toFixed()}
                <span>&#176;</span>F
              </div>
              {/* Max and Min Temps */}
              <div className={classes.maxTemp}>
                Max: {forecast.main.temp_max.toFixed()}
                <span>&#176;</span>F
              </div>
              <div className={classes.minTemp}>
                Min: {forecast.main.temp_min.toFixed()}
                <span>&#176;</span>F
              </div>
              {/* Humidity */}
              <div classes={classes.weatherHumidity}>
                Humidity: {forecast.main.humidity.toFixed()}%
              </div>
            </div>
          )}
        </div> // Card Div
      )}
    </div>
  );
};

export default WeatherInfo;
