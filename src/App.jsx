import * as React from 'react';
import { Container } from '@mui/material';
import { useState, useEffect } from 'react';

import { blue } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { getWeatherAsync } from './redux-toolkit/weatherSlice';
import { Box } from '@mui/system';
import Sidebar from './components/Sidebar/Sidebar';
import NavBar from './components/navbar/navbar';




function App() {
    const primary = blue[100];
    const secondary = blue[300];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getWeatherAsync());
    }, []);



  return (
      <div className="App">
          <Container fixed>
                   <Box sx={{ display: "flex", m: 4 }}>
                 
                  <Box
                      sx={{
                          width: 1 / 4,
                          height: "90vh",
                          backgroundColor: primary,
                      }}
                  >
                      <Sidebar></Sidebar>
                  </Box>
               
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
