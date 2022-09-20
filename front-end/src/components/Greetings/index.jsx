import { useContext } from 'react'
import { dataContext } from '../../data/fetch'
import './greetings.scss'
import propTypes from 'prop-types'

/**
 * @component the greetings component who render html using the context to collect specific data
 * @returns {HTMLEment} the html of the bar chart activity component
 */
const Greetings = () => {
   /**
    * collect modelise datas from the context using useContext & define a loader until the datas get collected & transformed.
    */
   const { userData, isLoading } = useContext(dataContext)

   return (
      <>
         {isLoading && <>Loading...</>}
         {!isLoading && (
            <>
               <div className="greeting">
                  <h1 className="greeting_title">
                     Bonjour{' '}
                     <span className="greeting_title_name">
                        {userData.firstName || userData}
                     </span>
                  </h1>
                  <h2 className="greeting_congrats">
                     Félicitations ! Vous avez explosé vos objectifs hier 👏
                  </h2>
               </div>
            </>
         )}
      </>
   )
}
Greetings.propTypes = {
   userData: propTypes.shape({
      firstName: propTypes.string,
   }),
   isLoading: propTypes.bool,
}
export default Greetings
