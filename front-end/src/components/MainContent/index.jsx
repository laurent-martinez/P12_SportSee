import React from 'react'
// import RadialBarChatScore from '../RadialBarChatScore'
import BarChartActivity from '../BarChartActivity'
import RadarChartPerformance from '../RadarChartPerformance'
import LineChartDuration from '../LineChartDuration'
import './MainContent.scss'
import { useContext } from 'react'
import { dataContext } from '../../data/fetch'
const MainContent = () => {
   const { userData } = useContext(dataContext)
   console.log(userData)
   // const test = useFetchUser()
   // console.log(test.userInfos.firstName)
   return (
      <div className="MainContent">
         <h1 className="MainContent_title">
            Bonjour <span>{userData.firstName}</span>
         </h1>

         <BarChartActivity />
         <div className="test">
            <LineChartDuration />
            <RadarChartPerformance />
         </div>

         {/* <RadialBarChatScore /> */}
      </div>
   )
}

export default MainContent
