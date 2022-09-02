import React from 'react'
import RadialBarChatScore from '../RadialBarChatScore'
import BarChartActivity from '../BarChartActivity'
import RadarChartPerformance from '../RadarChartPerformance'
import LineChartDuration from '../LineChartDuration'
import './MainContent.scss'
import Greetings from '../Greetings'
import Composition from '../composition'
const MainContent = () => {
   // const test = useFetchUser()
   // console.log(test.userInfos.firstName)
   return (
      <div className="MainContent">
         <div className="greetings">
            <Greetings />
         </div>
         <div className="barchart">
            <BarChartActivity />
         </div>
         <div className="linechart">
            <LineChartDuration />
         </div>
         <div className="radarchart">
            <RadarChartPerformance />
         </div>
         <div className="radialchart">
            <RadialBarChatScore />
         </div>
         <div className="composition">
            <Composition />
         </div>
      </div>
   )
}

export default MainContent
