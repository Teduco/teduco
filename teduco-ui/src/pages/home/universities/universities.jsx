
import CardInt from '../../../components/cardInt/cardInt'
import './universities.css'

import { Grid, Typography } from '@material-ui/core'

export default function Universities() {
    return (
        <div className="uni">
            <Typography gutterBottom variant="h5" style={{
                fontFamily: "poppins",
                fontSize: "32px",
                textOverflow: "ellipsis"
            }} >Recommended Programs</Typography>
            <Grid container spacing={2} justifyContent="space-evenly" alignItems="flex-end">

                <Grid item xs={3}>

                    <CardInt title="Volkswirtschaftslehre" text="Hochschule München" uni="./hoch.jpg" clr="#d32f2f" />
                </Grid>
                <Grid item xs={3}>
                    <CardInt title="Wirtschaftsinformatik" text="Ludwig Maximilian University of Munich" uni="./lmu_info.jpg" clr="#00701a" />
                </Grid>
                <Grid item xs={3}>
                    <CardInt title="Informatik" text="Technical University of Munich" uni="./tum_info.jpg" clr="#003c8f" />
                </Grid>
                <Grid item xs={3}>
                    <CardInt title="BWL" text="Technical University of Munich" uni="./tum_bwl.jpg" clr="#003c8f" />
                </Grid>
            </Grid>

            <Typography gutterBottom variant="h5" style={{
                fontFamily: "poppins",
                fontSize: "32px"
            }}>Past Applications</Typography>
            <Grid container spacing={2} justifyContent="space-around" alignItems="flex-end">
                <Grid item xs={3}>

                    <CardInt title="BWL" text="Ludwig Maximilian University of Munich" uni="./lmu_info.jpg" clr="#00701a" />
                </Grid>

                <Grid item xs={3}>
                    <CardInt title="Wirtschaftsinformatik" text="Technical University of Munich" uni="./tum_info.jpg" clr="#003c8f" />
                </Grid>
                <Grid item xs={3}>
                    <CardInt title="Architektur" text="Hochschule München" uni="./hoch.jpg" clr="#d32f2f" />
                </Grid>
                <Grid item xs={3}>
                    <CardInt title="Wirtschaftsinformatik" text="Ludwig Maximilian University of Munich" uni="./lmu_info.jpg" clr="#00701a" />
                </Grid>
            </Grid>
        </div>
    )
}