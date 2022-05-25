import * as React from 'react';
import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import NavBar from "./components/navbar/navbar";
import Sidebar from './components/Sidebar/Sidebar';
import { blue } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherAsync } from "./redux/weatherReducer";

function App() {
    const primary = blue[100];
    const secondary = blue[300];
    // const [weatherDetail, setWeatherDetail] = useState({})

    // const sendDataToApp = (data) => {
    //    console.log(data);
    //     setWeatherDetail(data);  
    // }
    const weather = useSelector((state) => state.weather.weather);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getWeatherAsync());
    }, []);
    console.log(weather);


  return (
       
      <div className="App">
          <Container fixed>
              <Box sx={{ display: "flex", m: 4 }}>
                  {/* Side Bar */}
                  <Box
                      sx={{
                          width: 1 / 4,
                          height: "90vh",
                          backgroundColor: primary,
                      }}
                  >
                      <Sidebar></Sidebar>
                  </Box>
                  {/* Nav bar */}
                  <Box
                      sx={{
                          width: 3 / 4,
                          height: "90vh",
                          backgroundColor: secondary,
                      }}
                  >
                      <Box sx={{ width: "100%", typography: "body1" }}>
                          <NavBar></NavBar>
                      </Box>
                  </Box>
              </Box>
          </Container>
      </div>
  );
}

export default App;
