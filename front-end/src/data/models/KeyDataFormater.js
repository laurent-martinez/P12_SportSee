class keyDataFormater {
   constructor(keyData) {
      this.keyData = keyData
      this.calories = keyData.calorieCount.toLocaleString('en-US') + 'KCal'
      this.proteins = keyData.proteinCount + 'g'
      this.carbs = keyData.carbohydrateCount + 'g'
      this.lipids = keyData.lipidCount + 'g'
   }
}
export default keyDataFormater
