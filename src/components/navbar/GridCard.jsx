// import TodayContent from "../Contents/TodayContent";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { dtToTime } from '../helpers/convertDtToHour'
import { BsSun } from "react-icons/bs";
import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { RiTempColdLine } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";
import { makeStyles } from "@mui/styles"; 
import { useDispatch, useSelector } from "react-redux";


const useStyle = makeStyles({
    todayCardHeader: {
        fontSize: "1.25rem",
    },
    todayContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "50px",
    },
    contentDescript: {
        fontSize: "1.75rem",
    },
});

export default function GridCard(props) {
    const classes = useStyle();
    const weatherData = useSelector((state) => state.weather.weather)
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <div className={classes.todayCardHeader}>UV Index</div>
                        <div className={classes.todayContent}>
                            <BsSun />
                            <div className={classes.contentDescript}>
                                {weatherData.current && weatherData.current.uvi} nm
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <div className={classes.todayCardHeader}>Sunrise</div>
                        <div className={classes.todayContent}>
                            <WiSunrise />
                            {weatherData.current && (
                                <div className={classes.contentDescript}>
                                    {dtToTime(weatherData.current.sunrise)}
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <div className={classes.todayCardHeader}>Sunset</div>
                        <div className={classes.todayContent}>
                            <WiSunset />
                            {weatherData.current && (
                                <div className={classes.contentDescript}>
                                    {dtToTime(weatherData.current.sunset)}
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <div className={classes.todayCardHeader}>Humidity</div>
                        <div className={classes.todayContent}>
                            <WiHumidity />
                            <div className={classes.contentDescript}>
                                {weatherData.current && weatherData.current.humidity}%
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <div className={classes.todayCardHeader}>Pressure</div>
                        <div className={classes.todayContent}>
                            <RiTempColdLine />
                            <div className={classes.contentDescript}>
                                {weatherData.current && weatherData.current.pressure} hPa
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <div className={classes.todayCardHeader}>
                            Visibility
                        </div>
                        <div className={classes.todayContent}>
                            <MdVisibility />
                            <div className={classes.contentDescript}>
                                {weatherData.current && weatherData.current.visibility} metres
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            {/* {[...Array(6)].map((item, index) => (
            ))} */}
        </Grid>
    );
}; 