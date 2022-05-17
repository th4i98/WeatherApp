import * as React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import WeekContentCard from "./WeekContentCard"
import WeekContentDetail from "./WeekContentDetail";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'stretch'
    },
});
export default function WeekContent() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid container spacing={2}>
                {[...Array(8)].map((item, index) => (
                    <Grid item xs={3} key={index}>
                        <WeekContentCard />
                    </Grid>
                ))}
            </Grid>
            <WeekContentDetail></WeekContentDetail>
        </Container>
    );
};
