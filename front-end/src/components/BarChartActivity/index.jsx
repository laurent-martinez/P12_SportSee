import { useContext } from 'react'
import {
   BarChart,
   Bar,
   XAxis,
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
            <ResponsiveContainer
               className="barChartActivity"
               width="100%"
               aspect={4}
            >
               <BarChart width={730} height={250} data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <YAxis
                     yAxisId="weight"
                     domain={['dataMin-1', 'dataMax+2']}
                     orientation="right"
                     axisLine={false}
                     tickLine={false}
                     tickMargin={10}
                     tickCount={3}
                  />
                  <YAxis
                     yAxisId="calories"
                     axisLine={false}
                     tickLine={false}
                     hide
                  />
                  <Bar
                     barSize={12}
                     yAxisId="weight"
                     radius={[10, 10, 0, 0]}
                     dataKey="kilogram"
                     fill="#282D30"
                  />
                  <Bar
                     barSize={12}
                     radius={[10, 10, 0, 0]}
                     yAxisId="calories"
                     dataKey="calories"
                     fill="#E60000"
                  />
                  <XAxis dataKey="day" tickLine={false} />
                  <Tooltip content={<CustomToolTip />} />
               </BarChart>
            </ResponsiveContainer>
         )}
      </>
   )
}

export default BarChartActivity
