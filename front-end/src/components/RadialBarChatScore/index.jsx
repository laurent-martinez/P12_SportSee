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
   const scoreData = [
      {
         name: 'user',
         uv: userScore,
         fill: '#E60000',
      },
      {
         name: 'base',
         uv: 1,
         fill: 'white',
      },
   ]
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
      <div className="radialchart">
         <ResponsiveContainer
            className="radial-bar-chat-score"
            width="100%"
            height="100%"
         >
            <RadialBarChart
               minAngle={30}
               barSize={14}
               cx="50%"
               cy="50%"
               innerRadius="100%"
               outerRadius="60%"
               startAngle={200}
               endAngle={-160}
               data={scoreData}
            >
               <circle cx="50%" cy="50%" fill="white" r="105"></circle>
               <RadialBar
                  dataKey="uv"
                  angleAxisId={1}
                  background={{ fill: 'white' }}
                  cornerRadius="10"
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
               <Legend
                  align="center"
                  verticalAlign="middle"
                  content={ScoreText}
               />
            </RadialBarChart>
         </ResponsiveContainer>
      </div>
   )
}

export default RadialBarChatScore
