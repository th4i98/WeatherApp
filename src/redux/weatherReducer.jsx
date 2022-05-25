import weatherApi2 from '../apis/weatherApi2'
import types from '../const/type';
import weatherAction from './weatherAction';
import { getPreciseLocation} from '../apis/getPreciseLocation'
export const getWeatherAsync = (city = '') => {
    
    return async(dispatch)=>{
        let lat=0,lon=0;

      
        if(city === ''){
            const currentPostion = await getPreciseLocation();
            lat=currentPostion[0];
            lon=currentPostion[1];
        }
        else{
            const position = await weatherApi2.GETNAMEDIRECT({ q: city });
            
            lat = position[0].lat;
            lon = position[0].lon;

        }
        const weather = await weatherApi2.GETWEATHERONECALL({ lat: lat, lon: lon });
        
        const cityname = await weatherApi2.GETNAMEREVERS({ lat, lon });
    
        dispatch(weatherAction.GET_WEATHER({...weather,cityName: cityname}))
    }
};
const initState = {
    weather: {
    }
};
const weatherReducer = (state = initState, action) => {

    switch (action.type) {
        case types.GET_WEATHER:
            return {
                ...state,
                weather: action.payload
            }
            
        default:
            return state;
    }
};
export default weatherReducer
