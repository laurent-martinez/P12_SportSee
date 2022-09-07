import {
   Legend,
   RadialBar,
   RadialBarChart,
   ResponsiveContainer,
} from 'recharts'
import './RadialBarChatScore.scss'
import { useContext } from 'react'
import { dataContext } from '../../data/fetch'

const RadialBarChatScore = () => {
   const { userScore } = useContext(dataContext)
   console.log('glouglou', userScore)
   const scoreData = [
      {
         name: 'user',
         uv: userScore,
         fill: '#E60000',
      },
      {
         name: 'base',
         uv: 1,
         fill: '#F4F4F4',
      },
   ]
   console.log('newData', scoreData)
   const ScoreText = () => {
      return (
         <div className="score-legend">
            <p className="score-legend_percentage">{userScore * 100}%</p>
            <p className="score-legend_text">de votre</p>
            <p className="score-legend_text">objectif</p>
         </div>
      )
   }
   return (
      <ResponsiveContainer
         className="radial-bar-chat-score"
         width="100%"
         height="100%"
         aspect={1}
      >
         <RadialBarChart
            minAngle={30}
            barSize={10}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            startAngle={200}
            endAngle={-160}
            data={scoreData}
            style={{ height: '100%', backgroundColor: '#F4F4F4' }}
         >
            <RadialBar
               background
               dataKey="uv"
               angleAxisId={1}
               fill="#E60000"
               cornerRadius="10"
               style={{ backgroundColor: 'white' }}
            />

            <text
               x="15%"
               y="15%"
               className="radial-bar-chat-score_text"
               textAnchor="middle"
               dominantBaseline="middle"
            >
               Score
            </text>
            <Legend align="center" verticalAlign="middle" content={ScoreText} />
         </RadialBarChart>
      </ResponsiveContainer>
   )
}

export default RadialBarChatScore
