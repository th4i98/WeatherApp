import * as React from "react";
import TextField from "@mui/material/TextField";
import Clouds from "../../img/cloudy.png";
import { makeStyles } from "@mui/styles";
import { dtToDay } from "../helpers/convertDate";
import { useState, useEffect } from "react";
import weatherApi2 from "../../apis/weatherApi2";

const useStyles = makeStyles({
    div: {
        display: "flex",
        justifyContent: "center",
    },
    image: {
        width: "50%",
    },
    inputField: {
        boxSizing: "border-box",
        marginBottom: "10px",
        width: "100%",
        padding: "10px",
        display: "flex",
        fontSize: "1rem",
        fontWeight: "400",
        color: "#212529",
        backgroundClip: "padding-box",
        appearance: "none",
        borderRadius: "0.25rem",
        '& input': {
            height: '0.4375em'
        }
    },
    location: {
        margin: "16px 32px",
        textAlign: "center"
    },
    city: {
        fontSize: "29px",
        marginBottom: "10px",
        fontWeight: "700",
    },
    country: {
        fontSize: "30px",
        marginBottom: "10px",
        fontWeight: "700",
    },
    date: {
        fontWeight: "normal",
        fontSize: "0.9rem",
    },
    list: {
        listStyleType: 'none',
        textAlign: 'center',
        transform: 'translateX(-10%)'
    }
});

export default function Sidebar() {
    const classes = useStyles();
    const [cityName, setCityName] = useState("");
    const [weatherData, setWeatherData] = useState({
        name: '',
        sys: {
            country: ''
        }
    });

    const handleInputChange = (e) => {
        setCityName(e.target.value);
    };
    const handleKeyPress = (e) => {
        if(e.key !== 'Enter') return;
        else {
            const getWeather = weatherApi2.GET({q: cityName}).then(function(result) {
                console.log(result);
                setWeatherData(result);
            });
            console.log(getWeather);
            // setWeatherData(getWeather)
            // const apiKey = 'e8558d79404af674371bdc48e91b9f88';
            // const geoCodeApi = `https://api.openweathermap.org/data/2.5/weather?`;
            // const getWeather = async () => {
            //     const cityData = await axios.get(geoCodeApi, { params: {
            //         q: cityName,
            //         appid: apiKey,
            //         units: 'metric'
            //     }});
            //     if (cityData.status === 200) {
            //         setWeatherData(cityData.data);
            //     } else {
            //         console.log("City Not Found");
            //     }       
                // ============================================================
                // const { lon, lat } = cityData?.data.coord;
                // const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
                // const response = await axios.get(weatherUrl);
                // if (response.status === 200) {
                //     console.log(response);
                //     setWeatherData(response.data);
                // } else {
                //     console.log('City Not Found')
                // }           
            // } 
            // getWeather();
        }  
    };
    console.log(weatherData);
    
    return (
        <>
            <TextField
                className={classes.inputField}
                id="outlined-basic"
                value={cityName}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Search"
            />
            <div className={classes.div}>
                <img className={classes.image} src={Clouds} alt="" />
            </div>
            <div className={classes.location}>
                <div className={classes.city}>{weatherData.name}</div>
                <div className={classes.country}>{weatherData.sys.country}</div>
                <div className={classes.date}>{dtToDay(weatherData.dt)}</div>
            </div>
            <ul className={classes.list}>
                <li>32 °C</li>
                <li>Humidity: 62% </li>
                <li>Wind: 11 km/h</li>
            </ul>
        </>
    );
}
