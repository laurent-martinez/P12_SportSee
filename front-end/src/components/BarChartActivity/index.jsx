import { useContext } from 'react'
import {
   BarChart,
   Bar,
   XAxis,
   Legend,
   Tooltip,
   ResponsiveContainer,
   CartesianGrid,
   YAxis,
} from 'recharts'
import { dataContext } from '../../data/fetch'

import './BarChartActivity.scss'

const BarChartActivity = () => {
   const { activity, isLoading } = useContext(dataContext)

   let activityData = activity.map((act, index) => {
      return {
         day: [index + 1],
         kilogram: act.kilogram,
         calories: act.calories,
      }
   })

   const CustomToolTip = ({ active, payload }) => {
      if (active) {
         return (
            <div className="barchartTooltip">
               <div className="barchartTooltip_info">{payload[0].value}kg</div>
               <div className="barchartTooltip_info">
                  {payload[1].value}Kcal
               </div>
            </div>
         )
      }
      return null
   }
   return (
      <>
         {isLoading && <></>}
         {!isLoading && (
            <div className="barchart">
               <ResponsiveContainer
                  className="barChartActivity"
                  width="100%"
                  height="100%"
                  aspect={3}
               >
                  <BarChart
                     data={activityData}
                     margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: -25,
                     }}
                  >
                     <CartesianGrid strokeDasharray="3 3" vertical={false} />
                     <Legend
                        className="barchart-legend"
                        wrapperStyle={{ top: -25, left: '30%' }}
                        iconType="circle"
                        formatter={(value) => {
                           console.log(value)
                           return (
                              <span style={{ color: '#74798C' }}> {value}</span>
                           )
                        }}
                     />
                     <YAxis
                        yAxisId="weight"
                        domain={['dataMin-1', 'dataMax+2']}
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={20}
                        tickCount={3}
                     />
                     <YAxis
                        yAxisId="calories"
                        tickLine={false}
                        orientation="bottom"
                        tickMargin={10}
                        hide
                     />
                     <Bar
                        barSize={12}
                        name="Poids (kg)"
                        yAxisId="weight"
                        radius={[10, 10, 0, 0]}
                        dataKey="kilogram"
                        fill="#282D30"
                     />
                     <Bar
                        barSize={12}
                        name="Calories brûlées (kCal)"
                        radius={[10, 10, 0, 0]}
                        yAxisId="calories"
                        dataKey="calories"
                        fill="#E60000"
                     />
                     <XAxis dataKey="day" tickLine={false} />
                     <Tooltip
                        content={<CustomToolTip />}
                        cursor={{ fill: '#c4c4c4', opacity: '50%' }}
                     />
                     <text
                        x={110}
                        y={0}
                        textAnchor="middle"
                        dominantBaseline="middle"
                     >
                        Activité quotidienne
                     </text>
                  </BarChart>
               </ResponsiveContainer>
            </div>
         )}
      </>
   )
}

export default BarChartActivity
