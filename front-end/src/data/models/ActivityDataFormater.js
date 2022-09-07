class ActivityDataFormater {
   constructor(activity) {
      this.activity = activity
      this.activityData = activity.map((act, index) => {
         return {
            day: [index++],
            kilogram: act.kilogram,
            calories: act.calories,
         }
      })
   }
}
export default ActivityDataFormater
