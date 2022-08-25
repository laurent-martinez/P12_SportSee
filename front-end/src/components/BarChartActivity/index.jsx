import { useContext } from 'react'
import { BarChart, Bar, XAxis, Tooltip } from 'recharts'
import { dataContext } from '../../data/fetch'

import './BarChartActivity.scss'

const BarChartActivity = () => {
   const { activity } = useContext(dataContext)
   console.log(activity)
   let activityData = activity.map((act, index) => {
      return {
         day: [index + 1],
         kilogram: act.kilogram,
         calories: act.calories,
      }
   })
   return (
      <div className="barChartActivity">
         <BarChart width={730} height={250} data={activityData}>
            <Bar dataKey="kilogram" fill="#282D30" />
            <Bar dataKey="calories" fill="#E60000" />
            <XAxis dataKey="day" tickLine={false} />
            <Tooltip />
         </BarChart>
      </div>
   )
}

export default BarChartActivity
