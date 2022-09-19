import { useContext } from 'react'
import {
   CartesianGrid,
   Line,
   LineChart,
   ResponsiveContainer,
   Tooltip,
   XAxis,
   YAxis,
} from 'recharts'
import { dataContext } from '../../data/fetch'

import './LineChartDuration.scss'

const LineChartDuration = () => {
   const { session } = useContext(dataContext)
   console.log(session)
   const CustomLinechartTooltip = ({ active, payload }) => {
      if (active) {
         return (
            <div className="linechartTooltip">
               <div className="linechartTooltip_item">
                  {payload[0].value} min
               </div>
            </div>
         )
      }
      return null
   }
   // let days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
   // let sessionData = session.map((sess, index) => {
   //    return {
   //       day: days[index],
   //       sessionLength: sess.sessionLength,
   //    }
   // })

   return (
      <div className="linechart">
         <ResponsiveContainer
            width="100%"
            height="100%"
            className="LineChartDuration"
         >
            <LineChart
               data={session.sessionsData || session}
               width={500}
               height={300}
               margin={{
                  top: 20,
                  right: 15,
                  left: 15,
                  bottom: 15,
               }}
            >
               <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  vertical={false}
               />
               <Tooltip content={<CustomLinechartTooltip />} />
               <Line
                  type="monotone"
                  stroke="#FFFFFF"
                  dataKey="sessionLength"
                  className="LineChartDuration_line"
                  activeDot={{ r: 4 }}
                  dot={false}
                  strokeWidth="3"
               />

               <XAxis
                  dataKey="day"
                  axisLine={false}
                  stroke="#FFF"
                  fillOpacity={0.6}
                  tick={{
                     fontSize: '15px',
                     fontWeight: 500,
                     lineHeight: '24px',
                  }}
                  tickLine={false}
               />
               <YAxis axisLine={false} hide={true} />
               <text
                  x="10%"
                  y="3%"
                  className="LineChartDuration_text"
                  textAnchor="start"
                  dominantBaseline="middle"
                  fill="#FFF"
               >
                  Durée moyenne des sessions
               </text>
            </LineChart>
         </ResponsiveContainer>
      </div>
   )
}

export default LineChartDuration
