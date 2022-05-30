import * as React from "react";
import TextField from "@mui/material/TextField";
import { dtToDay } from "../helpers/convertDate";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
// import { getWeatherAsync } from "../../redux/weatherReducer";
import { getWeatherAsync, statusSelector, weatherSelector } from "../../redux-toolkit/weatherSlice";
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
    
    const status = useSelector(statusSelector);
    const weatherData2 = useSelector(weatherSelector);
    console.log(weatherData2);  
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
                    {weatherData2.cityName &&
                        (weatherData2.cityName[0].country === "VN"
                            ? "Vietnam"
                            : weatherData2.cityName[0].country)}
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
