import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function WeekContentCard() {
    return (      
            <Card sx={{}}>
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        Word of the Day
                    </Typography>
                </CardContent>
            </Card>
    );
}
