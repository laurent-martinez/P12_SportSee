import { useContext } from 'react'
import { dataContext } from '../../data/fetch'

import './composition.scss'

const Composition = () => {
   const { keyData } = useContext(dataContext)

   return (
      <div className="composition">
         <div className="composition_cell">
            <img src="/img/calories.svg" alt="" />
            <div className="composition_cell_infos">
               <div className="composition_cell_infos_number">
                  {keyData.calories || keyData.calorieCount}kCal
               </div>
               <div className="composition_cell_infos_values">Calories</div>
            </div>
         </div>
         <div className="composition_cell">
            <img src="/img/proteins.svg" alt="" />

            <div className="composition_cell_infos">
               <div className="composition_cell_infos_number">
                  {keyData.proteins || keyData.proteinCount}g
               </div>
               <div className="composition_cell_infos_values">Proteines</div>
            </div>
         </div>
         <div className="composition_cell">
            <img src="/img/carbs.svg" alt="" />

            <div className="composition_cell_infos">
               <div className="composition_cell_infos_number">
                  {keyData.carbs || keyData.carbohydrateCount}g
               </div>
               <div className="composition_cell_infos_values">Glucides</div>
            </div>
         </div>
         <div className="composition_cell">
            <img src="/img/fats.svg" alt="" />

            <div className="composition_cell_infos">
               <div className="composition_cell_infos_number">
                  {keyData.lipids || keyData.lipidCount}g
               </div>
               <div className="composition_cell_infos_values">Lipides</div>
            </div>
         </div>
      </div>
   )
}

export default Composition
