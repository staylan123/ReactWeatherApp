import { useState } from "react";
import classes from './WeatherForm.module.css';

const WeatherForm = (props) => {
  const [location, setLocation] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (!location || location === '') {
        return;
    }
    props.submitLocation(location);
    setLocation('');
  };

  return (
    <div>
    <form onSubmit={submitHandler} className={classes.form}>
      <input
        type="text"
        id="location"
        placeholder="Enter A Location..."
        value={location}
        onChange={event => setLocation(event.target.value)}
        required
        className={classes.input}
      />
    </form>
    { props.error ? <p className={classes.errorText}>Enter A Valid Location!</p> : <p></p>}
  </div>
  );
};

export default WeatherForm;
