class PerformanceDataFormater {
   constructor(performance) {
      this.performance = performance
      this.kinds = this.getKinds()
      this.performanceData = performance.map((perf, index) => {
         return {
            kind: this.kinds[index],
            value: perf.value,
         }
      })
   }
   getKinds() {
      let kinds = [
         'Intensité',
         'Vitesse',
         'Force',
         'Endurance',
         'Energie',
         'Cardio',
      ]
      return kinds
   }
}
export default PerformanceDataFormater
