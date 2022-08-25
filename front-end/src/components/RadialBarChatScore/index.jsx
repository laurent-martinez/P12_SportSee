import './RadialBarChatScore.scss'
// import { useFetchUser } from '../../data/fetch'
import { RadialBarChart, RadialBar } from 'recharts'

const RadialBarChatScore = () => {
   // const score = useFetchUser()
   // const goodScore = score.score * 100

   return (
      <div className="radial-bar-chat-score">
         <RadialBarChart
            width={730}
            height={250}
            innerRadius="10%"
            outerRadius="80%"
            data={score}
            startAngle={180}
            endAngle={0}
            cx={100}
            cy={100}
         >
            <RadialBar minAngle={15} value={goodScore} fill="#0000" />
         </RadialBarChart>
      </div>
   )
}

export default RadialBarChatScore