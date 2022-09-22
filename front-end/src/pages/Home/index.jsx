import { useContext } from 'react'
import BarChartActivity from '../../components/BarChartActivity'
import Composition from '../../components/composition'
import Greetings from '../../components/Greetings'
import HorizontalNavbar from '../../components/HorizontalNavbar'
import LineChartDuration from '../../components/LineChartDuration'
import RadarChartPerformance from '../../components/RadarChartPerformance'
import RadialBarChatScore from '../../components/RadialBarChatScore'
import VerticalNavbar from '../../components/VerticalNavbar'
import { dataContext } from '../../data/fetch'
import './Home.scss'

/**
 * @component Home component who render the dashboard page with all the infos & charts
 * @returns {HTMLElement}
 */
const Home = () => {
   const {
      userData,
      activity,
      performance,
      session,
      keyData,
      userScore,
      isLoading,
   } = useContext(dataContext)
   return (
      <>
         {isLoading && <>Loading...</>}
         <div className="container">
            <HorizontalNavbar />
            <div className="container_main">
               <VerticalNavbar />
               {!isLoading &&
                  (userData.length > 0 ||
                     activity.length > 0 ||
                     performance.length > 0 ||
                     session.length > 0 ||
                     keyData.length > 0 ||
                     userScore.length > 0) && (
                     <>
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
                     </>
                  )}
            </div>
         </div>
         {!isLoading &&
            (userData.length === 0 ||
               activity.length === 0 ||
               performance.length === 0 ||
               session.length === 0 ||
               keyData.length === 0 ||
               userScore.length === 0) && (
               <>
                  <div className="errorMessage">
                     Profil utilisateur non reconnu
                  </div>
               </>
            )}
      </>
   )
}

export default Home
