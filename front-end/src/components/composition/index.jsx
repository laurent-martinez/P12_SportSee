import { useContext } from 'react'
import { dataContext } from '../../data/fetch'
import './composition.scss'

/**
 * @component the composition cards component who render html using the context to collect specific data
 * @returns {HTMLEment} the html of the bar chart activity component
 */
const Composition = () => {
   /**
    * collect modelise datas from the context using useContext
    */
   const { keyData, isLoading } = useContext(dataContext)

   return (
      <>
         {isLoading && <>Loading...</>}
         {!isLoading && (
            <>
               <div className="composition">
                  <div className="composition_cell">
                     <img src="/img/calories.svg" alt="" />
                     <div className="composition_cell_infos">
                        <div className="composition_cell_infos_number">
                           {keyData.calories || keyData.calorieCount}
                        </div>
                        <div className="composition_cell_infos_values">
                           Calories
                        </div>
                     </div>
                  </div>
                  <div className="composition_cell">
                     <img src="/img/proteins.svg" alt="" />

                     <div className="composition_cell_infos">
                        <div className="composition_cell_infos_number">
                           {keyData.proteins || keyData.proteinCount}
                        </div>
                        <div className="composition_cell_infos_values">
                           Proteines
                        </div>
                     </div>
                  </div>
                  <div className="composition_cell">
                     <img src="/img/carbs.svg" alt="" />

                     <div className="composition_cell_infos">
                        <div className="composition_cell_infos_number">
                           {keyData.carbs || keyData.carbohydrateCount}
                        </div>
                        <div className="composition_cell_infos_values">
                           Glucides
                        </div>
                     </div>
                  </div>
                  <div className="composition_cell">
                     <img src="/img/fats.svg" alt="" />

                     <div className="composition_cell_infos">
                        <div className="composition_cell_infos_number">
                           {keyData.lipids || keyData.lipidCount}
                        </div>
                        <div className="composition_cell_infos_values">
                           Lipides
                        </div>
                     </div>
                  </div>
               </div>
            </>
         )}
      </>
   )
}

export default Composition
