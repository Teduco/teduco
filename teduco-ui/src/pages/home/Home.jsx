import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import'./home.css'
import { applicationdata } from '../../AppData'
import WidgetLg from '../../components/widgetLg/widgetLg'

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={applicationdata} title="Applications" grid dataKey="Applications"/>
      <WidgetLg/>
      </div>
  )
}
