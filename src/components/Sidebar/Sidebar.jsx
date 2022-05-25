import * as React from "react";
import TextField from "@mui/material/TextField";
import weatherApi2 from "../../apis/weatherApi2";
import { dtToDay } from "../helpers/convertDate";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import {getPreciseLocation} from "../../apis/getPreciseLocation";
import { getWeatherAsync } from "../../redux/weatherReducer";

const useStyles = makeStyles({
    div: {
        display: "flex",
        justifyContent: "center",
        "& img": {},
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
        "& input": {
            height: "0.4375em",
        },
    },
    location: {
        margin: "16px 32px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // transform: "translateX(18%)",
    },
    city: {
        fontSize: "50px",
        marginBottom: "10px",
        fontWeight: "700",
    },
    country: {
        fontSize: "30px",
        marginBottom: "10px",
        fontWeight: "700",
    },
    date: {
        fontSize: "20px",
        fontWeight: "normal",
    },
    list: {
        listStyleType: "none",
        textAlign: "center",
        transform: "translateX(-4%)",
        textTransform: "capitalize",
        "& li": {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            fontSize: "20px",
        },
    },
});
export default function Sidebar({ sendDataToApp }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const weatherData2 = useSelector((state) => state.weather.weather);
    console.log(weatherData2);
    // const [cityName, setCityName] = useState([{name: ""}]);
    // State lưu dữ liệu render ra side bar
    // const [weatherData, setWeatherData] = useState({
    //     current: {
    //         temp: 0,
    //         weather: [{ description: "" }],
    //         clouds: 0,
    //     },
    // });
    // ====================================================
    // State để lưu dữ liệu ra navbar, tab Today
    // const [weatherDetail, setWeatherDetail] = useState({
    //     current: {
    //         uvIndex: 0,
    //         humidity: 0,
    //         visibility: 0,
    //         pressure: 0,
    //         sunrise: 0,
    //         sunset: 0,
    //     },
    // });
    //=====================================================
    // Lấy tọa độ hiện tại
    // const getCoordDefault = async () => {
    //     let lat, lon = 0;
    //     try {
    //         const getLatLon = await getPreciseLocation();
    //         lat = getLatLon[0];
    //         lon = getLatLon[1];
    //         getNameDefault({ lat, lon });
    //         getWeather({lat, lon});
    //     } catch (error) {   
    //         console.log(error);
    //     }
        
    // };
    //=====================================================
    // Lấy tên thành phố từ tọa độ default
    // const getNameDefault = async ({lat, lon}) => {
    //     const response = await weatherApi2.GETNAMEREVERS({lat, lon});
    //     setCityName(response);
    //     // setCityName("");
    // }
    //=====================================================
    // Lấy tọa độ khi user nhập tên thành phố
    // const getCoordByName = async () => {
    //     let lat,
    //         lon = 0;
    //     const response = await weatherApi2.GETNAMEDIRECT({ q: cityName });
    //     lat = response[0].lat;
    //     lon = response[0].lon;
    //     getWeather({lat, lon});
    //     setCityName(response);
    // };
    //=====================================================
    // call Api để lấy dữ liệu render ra sidebar và Today tab ở navbar
    // const getWeather = async ({lat, lon}) => {
    //     const response = await weatherApi2.GETWEATHERONECALL({
    //         lat: lat,
    //         lon: lon,
    //     });
    //     console.log(response);
    //     setWeatherData(response);
    //     setWeatherDetail(response);
    //     sendDataToApp(response);
    // };
    // useEffect(() => {
    //     getCoordDefault();
    // }, []);
    //=======================================================
    // const handleInputChange = (e) => {
    //     setCityName(e.target.value);
    // };
    // gõ tên thành phố và bấm enter để show dữ liệu ở sidebar và Today tab
    // const handleKeyPress = (e) => {
    //     if (e.key !== "Enter") return;
    //     else {
    //         getCoordByName();
    //         e.target.value = "";
    //     }
    // };
    //======================================================================
    const handleKeyPress = (e) => {
        if (e.key === "NumpadEnter" || e.key === "Enter") {
            dispatch(getWeatherAsync(e.target.value));
            e.target.value = "";
        }
    }
    return (
        <>
            <TextField
                className={classes.inputField}
                id="outlined-basic"
                // value={cityName}
                // onChange={handleInputChange}
                onKeyDown={(e) => {
                    handleKeyPress(e);
                }}
                placeholder="Search"
            />
            <div className={classes.div}>
                <img
                    className={classes.image}
                    src={`http://openweathermap.org/img/wn/${weatherData2?.current?.weather?.[0].icon}@2x.png`}
                    alt=""
                />
            </div>
            <div className={classes.location}>
                <div className={classes.city}>
                    {weatherData2.cityName && weatherData2.cityName[0].name}
                    {/* {weatherData2?.cityName?.name} */}
                </div>
                <div className={classes.country}>
                    {(weatherData2.cityName && weatherData2.cityName[0].country === 'VN') ? "Vietnam" : weatherData2.cityName[0].country}
                </div>
                <div className={classes.date}>
                    {dtToDay(weatherData2?.current?.dt)}
                </div>
            </div>
            <ul className={classes.list}>
                <li>{weatherData2?.current?.temp} °C</li>
                <li>{weatherData2?.current?.weather[0].description} </li>
                <li>Cloud {weatherData2?.current?.clouds} %</li>
            </ul>
        </>
    );
}
