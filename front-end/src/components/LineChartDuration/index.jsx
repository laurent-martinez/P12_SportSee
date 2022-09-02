import { useContext } from 'react'
import { Line, LineChart, Tooltip, XAxis } from 'recharts'
import { dataContext } from '../../data/fetch'
import './LineChartDuration.scss'

const LineChartDuration = () => {
   const { session } = useContext(dataContext)
   console.log(session.sessionsData)
   // let days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
   // let sessionData = session.map((sess, index) => {
   //    return {
   //       day: days[index],
   //       sessionLength: sess.sessionLength,
   //    }
   // })

   return (
      <div className="LineChartDuration">
         <LineChart width={256} height={256} data={session.sessionsData}>
            <Tooltip />
            <Line
               dataKey="sessionLength"
               type="monotone"
               strokeWidth={2}
               stroke="white"
            />
            <XAxis
               dataKey="day"
               stroke="white"
               axisLine={false}
               tickLine={false}
            />
         </LineChart>
      </div>
   )
}

export default LineChartDuration
