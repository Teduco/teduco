import "./Universities.css";
import CardInt from '../../../components/cardInt/cardInt'
import { Grid, Typography } from '@material-ui/core'
import { Link, useNavigate } from "react-router-dom";

export default function Universities() {
  const navigate = useNavigate();

  const toTUMInfo = () => {
    navigate("/newApplication", { state: { uni: "TUM", program: "Informatik"} });
  };


  return (
    <div className="Universities">
   <Typography gutterBottom variant="h5">Recommended Programms</Typography>
      <Grid container spacing = {2} justifyContent= "flex-end">
        <Grid item xs={4}>
          <CardInt title = "Wirtschaftsinformatik" text = "Ludwig Maximilian University of Munich" uni="./lmu_info.jpg" clr = "#00701a"/>
        </Grid>
        <Grid item xs={4} onClick={toTUMInfo}>
          <CardInt title = "Informatik" text = "Technical University of Munich" uni ="./tum_info.jpg" clr = "#003c8f"/>
        </Grid>
        <Grid item xs={4}>
          <CardInt title = "BWL" text = "Technical University of Munich" uni="./tum_bwl.jpg" clr = "#003c8f"/>
        </Grid>
      </Grid>

      <Typography gutterBottom variant="h5">Past Applications</Typography>
      <Grid container spacing = {2} justifyContent= "flex-end">
        <Grid item xs={4}>
          <CardInt title = "BWL" text = "Ludwig Maximilian University of Munich" uni="./lmu_info.jpg" clr = "#00701a"/>
        </Grid>
        <Grid item xs={4}>
          <CardInt title = "Wirtschaftsinformatik" text = "Technical University of Munich" uni ="./tum_info.jpg" clr = "#003c8f"/>
        </Grid>
        <Grid item xs={4}>
          <CardInt title = "Wirtschaftsinformatik" text = "Ludwig Maximilian University of Munich" uni="./lmu_info.jpg" clr = "#00701a"/>
        </Grid>
      </Grid>
    </div>

  );
}



      
