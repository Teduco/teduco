import FeaturedInfo from '../../../components/featuredInfo/FeaturedInfo'
import Chart from '../../../components/chart/Chart'
import CardInt from '../../../components/cardInt/cardInt'
import'./home.css'

import { applicationdata } from '../../../AppData'
import WidgetLg from '../../../components/widgetLg/widgetLg'
import { Grid, Typography } from '@material-ui/core'


export default function Home() {
  return (

    <div className="home">
      <Typography gutterBottom variant="h5">Recommended Programms</Typography>
      <Grid container spacing = {2} justifyContent= "flex-end">
        <Grid item xs={4}>
          <CardInt title = "Wirtschaftsinformatik" text = "Ludwig Maximilian University of Munich" uni="./lmu_info.jpg" clr = "#00701a"/>
        </Grid>
        <Grid item xs={4}>
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
      
      <FeaturedInfo/>
      <Chart data={applicationdata} title="Applications" grid dataKey="Applications"/>
      <WidgetLg/>
      </div>

  )
}
