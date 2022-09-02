import './RadarChartPerformance.scss'
import {
   PolarGrid,
   RadarChart,
   PolarAngleAxis,
   PolarRadiusAxis,
   Radar,
} from 'recharts'
import { useContext } from 'react'
import { dataContext } from '../../data/fetch'

const RadarChartPerformance = () => {
   const { performance } = useContext(dataContext)
   console.log('perf', performance)

   // let kinds = [
   //    'Intensité',
   //    'Vitesse',
   //    'Force',
   //    'Endurance',
   //    'Energie',
   //    'Cardio',
   // ]
   // let performanceData = performance.map((sess, index) => {
   //    return {
   //       kind: kinds[index],
   //       value: sess.value,
   //    }
   // })
   return (
      <div className="RadarChartPerformance">
         <RadarChart
            outerRadius={90}
            width={730}
            height={250}
            data={performance.performanceData}
         >
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis angle={30} domain={[0, 300]} />
            <Radar
               dataKey="value"
               stroke="#8884d8"
               fill="#8884d8"
               fillOpacity={0.6}
            />
         </RadarChart>
      </div>
   )
}

export default RadarChartPerformance
