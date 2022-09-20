import {
   Legend,
   RadialBar,
   RadialBarChart,
   ResponsiveContainer,
} from 'recharts'
import './RadialBarChatScore.scss'
import { useContext } from 'react'
import { dataContext } from '../../data/fetch'
import propTypes from 'prop-types'

/**
 * @component the radial chart of the user score component who render html using the context to collect specific data
 * @returns {HTMLEment} the html of the bar chart activity component
 */
const RadialBarChatScore = () => {
   /**
    * collect modelise datas from the context using useContext
    */
   const { userScore, isLoading } = useContext(dataContext)
   /**
    * @function set datas to match the radial bar chart specificities
    * @return {array} of object containing the datas needed to set up the radial bar with recharts
    */
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
   /**
    * @function
    * @returns {HTMLEment} legend of the radial bar chart
    */
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
      <>
         {isLoading && <>Loading...</>}
         {!isLoading && (
            <>
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
            </>
         )}
      </>
   )
}

RadialBarChatScore.propTypes = {
   scoreData: propTypes.shape({
      name: propTypes.string,
      uv: propTypes.number,
      fill: propTypes.string,
   }),
   isLoading: propTypes.bool,
}

export default RadialBarChatScore
