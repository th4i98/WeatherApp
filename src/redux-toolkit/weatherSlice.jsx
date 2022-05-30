import weatherApi2 from "../apis/weatherApi2";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPreciseLocation } from "../apis/getPreciseLocation";

const initState = {
    weather: {

    },
    status: 'idle'
};

export const getWeatherAsync = createAsyncThunk(
    "weather/getWeatherAsync",
    async (city = "") => {
    
        let lat = 0, lon = 0;
        if (city === "") {
            const currentPostion = await getPreciseLocation();
            lat = currentPostion[0];
            lon = currentPostion[1];
        } else {
            const position = await weatherApi2.GETNAMEDIRECT({ q: city });
            lat = position[0].lat;
            lon = position[0].lon;
            console.log(position[0]);
        }
        const weather = await weatherApi2.GETWEATHERONECALL({ lat,lon });
        const cityname = await weatherApi2.GETNAMEREVERS({ lat, lon });
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        return { ...weather, cityName: cityname };
        
    }
);
const weatherSlice = createSlice({
    name: "weather",
    initialState:{
        weather: {},
        status: 'idle',
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getWeatherAsync.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(getWeatherAsync.fulfilled, (state, action) => {
            state.status = "idle";
            state.weather = action.payload;
        });
        builder.addCase(getWeatherAsync.rejected, (state ) => {
            state.status = "error";
        });
    },
});
export const {test} = weatherSlice.actions;
export const statusSelector = (state ) => state.weather.status;
export const weatherSelector = (state ) => {
   return state.weather.weather
};

export default weatherSlice.reducer;