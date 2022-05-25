import types from "../const/type";
const weatherAction = {
    GET_WEATHER: (data) => {
        return {
            type: types.GET_WEATHER,
            payload: data,
        };
    },
};
export default weatherAction;
