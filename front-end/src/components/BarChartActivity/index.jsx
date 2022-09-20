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
import propTypes from 'prop-types'
import './BarChartActivity.scss'

/**
 * @component the bar char activity component who render html using the context to collect specific data
 * @returns {HTMLEment} the html of the bar chart activity component
 */
const BarChartActivity = () => {
   /**
    * collect modelise datas from the context using useContext
    */
   const { activity, isLoading } = useContext(dataContext)
   /**
    * modifying activity datas to suit the charts design
    */
   let activityData = activity.map((act, index) => {
      return {
         day: [index + 1],
         kilogram: act.kilogram,
         calories: act.calories,
      }
   })

   /**
    * a custom function to set up the tooltip of the charts to suits the design
    * @param {active}
    * @param {payload}
    *
    */
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
         {isLoading && <>Loading....</>}
         {!isLoading && (
            <>
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
                           top: 50,
                           right: 30,
                           left: 0,
                           bottom: -20,
                        }}
                     >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <Legend
                           className="barchart-legend"
                           wrapperStyle={{ top: -5, left: '30%' }}
                           iconType="circle"
                           formatter={(value) => {
                              console.log(value)
                              return (
                                 <span style={{ color: '#74798C' }}>
                                    {' '}
                                    {value}
                                 </span>
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
                           hide
                           padding={{ left: -47, right: -48 }}
                           tickMargin={16}
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
                           wrapperStyle={{ outline: 'none' }}
                        />
                        {/* <ReferenceLine y={83} label="Max" stroke="red" /> */}
                        <text
                           className="graphTitle"
                           x="3%"
                           y="10"
                           width={147}
                           height={48}
                           textAnchor="start"
                           dominantBaseline="middle"
                           fill="#20253A"
                           style={{
                              fontWeight: '550',
                              fontSize: '18px',
                              lineHeight: '24px',
                           }}
                        >
                           Activité quotidienne{' '}
                        </text>
                     </BarChart>
                  </ResponsiveContainer>
               </div>
            </>
         )}
      </>
   )
}

BarChartActivity.propTypes = {
   activityData: propTypes.shape({
      day: propTypes.string,
      kilogram: propTypes.number,
      calories: propTypes.number,
   }),
   isLoading: propTypes.bool,
}
export default BarChartActivity
