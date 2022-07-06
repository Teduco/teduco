import CardInt from '../../../components/cardInt/cardInt'
import './universities.css'
import {useNavigate} from "react-router-dom";

import { Grid, Typography } from '@material-ui/core'

export default function Universities() {
  const navigate = useNavigate();
  
  const toTUMInfo = () => {
    navigate("/newApplication", { state: { uni: "TUM", program: "Informatik"} });
  };

    return (
        <div className="uni">
            <Typography gutterBottom variant="h5" style={{
                fontFamily: "poppins",
                fontSize: "32px",
                textOverflow: "ellipsis",
                marginLeft:"20px"
            }} >Recommended Programs</Typography>
            <Grid container spacing={2} justifyContent="space-evenly" alignItems="flex-end">

                <Grid item xs={3}>
                    <CardInt title="Volkswirtschaftslehre" sponsored="true" text="Hochschule München" uni="./hoch.jpg" clr="#d32f2f" />
                </Grid>

                <Grid item xs={3}>
                    <CardInt   title="Wirtschaftsinformatik" text="Ludwig Maximilian University of Munich" uni="./lmu_info.jpg" clr="#00701a" />
                </Grid>

                <Grid item xs={3} onClick={toTUMInfo} >
                    <CardInt title="Informatik" text="Technical University of Munich" uni="./tum_info.jpg" clr="#003c8f" />
                </Grid>

                <Grid item xs={3}>
                    <CardInt title="BWL" text="Technical University of Munich" uni="./tum_bwl.jpg" clr="#003c8f" />
                </Grid>

            </Grid>

            <Typography gutterBottom variant="h5" style={{
                fontFamily: "poppins",
                fontSize: "32px",
                marginLeft:"20px",
                marginTop:"50px"
            }}>Past Applications</Typography>
            <Grid container spacing={2} justifyContent="space-around" alignItems="flex-end">
                <Grid item xs={3}>

                    <CardInt title="BWL" text="Ludwig Maximilian University of Munich" uni="./lmu_info.jpg" clr="#00701a" />
                </Grid>

                <Grid item xs={3}>
                    <CardInt title="Wirtschaftsinformatik" text="Technical University of Munich" uni="./tum_info.jpg" clr="#003c8f" />
                </Grid>
                <Grid item xs={3}>
                    <CardInt title="Informatik" text="Hochschule München" uni="./hoch.jpg" clr="#d32f2f" />
                </Grid>
                <Grid item xs={3}>
                    <CardInt title="Wirtschaftsinformatik" text="Ludwig Maximilian University of Munich" uni="./lmu_info.jpg" clr="#00701a" />
                </Grid>
            </Grid>
        </div>
    )
}