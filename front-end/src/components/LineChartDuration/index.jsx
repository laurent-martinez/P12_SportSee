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
import propTypes from 'prop-types'

/**
 * @component the line chart of the averages sessions component who render html using the context to collect specific data
 * @returns {HTMLEment} the html of the bar chart activity component
 */
const LineChartDuration = () => {
   /**
    * collect modelise datas from the context using useContext
    */
   const { session, isLoading } = useContext(dataContext)
   /**
    * a custom function to set up the tooltip of the charts to suits the design
    * @param {active}
    * @param {payload}
    *
    */
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

   return (
      <>
         {isLoading && <>Loading....</>}
         {!isLoading && (
            <>
               <div className="linechart">
                  <ResponsiveContainer
                     width="100%"
                     height="100%"
                     className="LineChartDuration"
                  >
                     <LineChart
                        data={session.sessionsData || session}
                        width={500}
                        height={200}
                        margin={{
                           top: 50,
                           right: 0,
                           left: 0,
                           bottom: 10,
                        }}
                     >
                        <CartesianGrid
                           strokeDasharray="3 3"
                           horizontal={false}
                           vertical={false}
                        />
                        <Tooltip
                           content={<CustomLinechartTooltip />}
                           cursor={false}
                           wrapperStyle={{ outline: 'none' }}
                        />
                        <Line
                           type="monotone"
                           stroke="#FFFFFF"
                           dataKey="sessionLength"
                           className="LineChartDuration_line"
                           activeDot={{ r: 4 }}
                           dot={false}
                           strokeWidth="3"
                           opacity={0.8}
                        />
                        <XAxis
                           dataKey="day"
                           stroke="#FFF"
                           tickLine={false}
                           fillOpacity={0.5}
                           style={{
                              transform: 'scale(0.9)',
                              transformOrigin: 'bottom',
                           }}
                           tickMargin={10}
                           axisLine={false}
                           interval="preserveStartEnd"
                           domain={['dataMin - 8', 'dataMax + 8']}
                           tick={{
                              fontSize: '15px',
                              fontWeight: 500,
                              lineHeight: '24px',
                           }}
                        />
                        <YAxis axisLine={false} hide={true} />
                        <text
                           x="10%"
                           y="10%"
                           className="LineChartDuration_text"
                           textAnchor="start"
                           dominantBaseline="middle"
                           fill="#FFF"
                        >
                           Durée moyenne des
                        </text>
                        <text
                           x="10%"
                           y="20%"
                           className="LineChartDuration_text"
                           textAnchor="start"
                           dominantBaseline="middle"
                           fill="#FFF"
                        >
                           {' '}
                           sessions
                        </text>
                     </LineChart>
                  </ResponsiveContainer>
               </div>
            </>
         )}
      </>
   )
}

LineChartDuration.propTypes = {
   session: propTypes.shape({
      sessionsData: propTypes.shape({
         day: propTypes.string,
         sessionsLength: propTypes.number,
      }),
   }),
   isLoading: propTypes.bool,
}
export default LineChartDuration
