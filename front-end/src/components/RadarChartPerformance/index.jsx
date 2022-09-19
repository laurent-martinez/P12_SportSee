import './RadarChartPerformance.scss'
import {
   PolarGrid,
   RadarChart,
   PolarAngleAxis,
   Radar,
   ResponsiveContainer,
   PolarRadiusAxis,
} from 'recharts'
import { useContext } from 'react'
import { dataContext } from '../../data/fetch'

const RadarChartPerformance = () => {
   const { performance } = useContext(dataContext)

   return (
      <div className="radarchart">
         <ResponsiveContainer
            className="RadarChartPerformance"
            width="100%"
            height="100%"
         >
            <RadarChart
               x="50%"
               cy="50%"
               outerRadius="75%"
               data={performance.performanceData || performance}
            >
               <PolarGrid radialLines={false} />
               <PolarAngleAxis
                  dataKey="kind"
                  stroke="#FFF"
                  tickLine={false}
                  dy={2}
                  dx={1}
                  tick={{
                     fontSize: '75%',
                     fontWeight: 500,
                     lineHeight: '24px',
                  }}
               />
               <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
               <Radar
                  name=""
                  dataKey="value"
                  stroke="transparent"
                  fill="#E60000"
                  fillOpacity={0.8}
               />
            </RadarChart>
         </ResponsiveContainer>
      </div>
   )
}

export default RadarChartPerformance
