import './RadarChartPerformance.scss'
import {
   PolarGrid,
   RadarChart,
   PolarAngleAxis,
   Radar,
   ResponsiveContainer,
} from 'recharts'
import { useContext } from 'react'
import { dataContext } from '../../data/fetch'

const RadarChartPerformance = () => {
   const { performance } = useContext(dataContext)

   return (
      <ResponsiveContainer
         className="RadarChartPerformance"
         width="100%"
         aspect={1.3}
      >
         <RadarChart
            x="50%"
            cy="50%"
            outerRadius="92%"
            data={performance.performanceData}
         >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
               dataKey="kind"
               stroke="#FFF"
               dy={5}
               tickLine={false}
               tick={{
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  padding: '15px',
               }}
            />
            <Radar
               name=""
               dataKey="value"
               stroke="transparent"
               fill="#E60000"
               fillOpacity={0.8}
            />
         </RadarChart>
      </ResponsiveContainer>
   )
}

export default RadarChartPerformance
