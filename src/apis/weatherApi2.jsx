import axios from "axios";
import url from "./urls";

const apiKey = "e8558d79404af674371bdc48e91b9f88";
const weatherApi2 = {
    GET: async (params) => {
        console.log(apiKey);
        const weather = await axios.get(url.weather, {
            params: {
                ...params,
                appid: apiKey,
                units: "metric",
            },
        });
        return weather.data;
    },
};
export default weatherApi2
