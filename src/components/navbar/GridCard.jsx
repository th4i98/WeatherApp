import Grid from "@mui/material/Grid";
import TodayContent from "../Contents/TodayContent";

export default function GridCard() {
    return (
        <Grid container spacing={2}>
            {[...Array(6)].map((item, index) => (
                <Grid item xs={4} key={index}>
                    <TodayContent></TodayContent>
                </Grid>
            ))}
        </Grid>
    );
}; 