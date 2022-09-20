import BarChartActivity from '../../components/BarChartActivity'
import Composition from '../../components/composition'
import Greetings from '../../components/Greetings'
import HorizontalNavbar from '../../components/HorizontalNavbar'
import LineChartDuration from '../../components/LineChartDuration'
import RadarChartPerformance from '../../components/RadarChartPerformance'
import RadialBarChatScore from '../../components/RadialBarChatScore'
import VerticalNavbar from '../../components/VerticalNavbar'
import './Home.scss'

/**
 * @component Home component who render the dashboard page with all the infos & charts
 * @returns {HTMLElement}
 */
const Home = () => {
   return (
      <>
         <div className="container">
            <HorizontalNavbar />
            <div className="container_main">
               <VerticalNavbar />
               <div className="container_main_content">
                  <div className="container_main_content_greetings">
                     <Greetings />
                  </div>
                  <div className="container_main_content_stats">
                     <div className="charts">
                        <BarChartActivity />
                        <div className="secondLineCharts">
                           <LineChartDuration />
                           <RadarChartPerformance />
                           <RadialBarChatScore />
                        </div>
                     </div>
                     <div className="nutriScore">
                        <Composition />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Home
