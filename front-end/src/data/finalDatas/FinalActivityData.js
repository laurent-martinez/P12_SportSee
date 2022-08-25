import { useFetchActivities } from '../fetch'
import ActivityFormater from '../models/ActivityFormater'

const FinalActivityData = () => {
   let activities = useFetchActivities()
   const activity = activities.sessions
   console.log(activities)
   const activityClass = new ActivityFormater(activity)
   let activitiesDatas = activityClass.activitiesModel
   return activitiesDatas
}
export default FinalActivityData
