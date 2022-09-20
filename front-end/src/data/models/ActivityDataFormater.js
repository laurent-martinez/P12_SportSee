/**
 *@class to modelise activity datas from an array of datas
 *@param {array} array of datas from the api
 *
 */
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
