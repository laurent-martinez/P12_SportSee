import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { dataContext } from '../../data/fetch'
import './greetings.scss'

const Greetings = () => {
   const { id } = useParams()
   console.log('kiiks', id)
   const { userData } = useContext(dataContext)
   return (
      <div className="greeting">
         <h1 className="greeting_title">
            Bonjour{' '}
            <span className="greeting_title_name">{userData.firstName}</span>
         </h1>
         <h2 className="greeting_congrats">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
         </h2>
      </div>
   )
}

export default Greetings
