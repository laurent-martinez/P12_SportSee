import { createContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

// const useFetchUser = () => {
//    const [userData, setUserData] = useState([])
//    useEffect(() => {
//       const fetchUser = () => {
//          fetch('http://localhost:3000/user/18')
//             .then((res) => res.json())
//             .then((result) => {
//                setUserData(result.data)
//             })
//       }
//       fetchUser()
//    }, [])

//    return userData

export const dataContext = createContext(null)
export const DataContextProvider = ({ children }) => {
   const [userData, setUserData] = useState([])
   const [activity, setActivity] = useState([])
   const [session, setSession] = useState([])
   const [performance, setPerformance] = useState([])

   useEffect(() => {
      const userDataUrl = 'http://localhost:3000/user/18'
      const activityUrl = 'http://localhost:3000/user/18/activity'
      const sessionUrl = 'http://localhost:3000/user/18/average-sessions'
      const performanceUrl = 'http://localhost:3000/user/18/performance'

      const getUserData = axios.get(userDataUrl)
      const getActivity = axios.get(activityUrl)
      const getSession = axios.get(sessionUrl)
      const getPerformance = axios.get(performanceUrl)

      axios.all([getUserData, getActivity, getSession, getPerformance]).then(
         axios.spread((...allData) => {
            const allDataUser = allData[0]
            const allDataActivity = allData[1]
            const allDataSession = allData[2]
            const allDataPerformance = allData[3]

            setUserData(allDataUser.data.data.userInfos)
            setActivity(allDataActivity.data.data.sessions)
            setSession(allDataSession.data.data.sessions)
            setPerformance(allDataPerformance.data.data.data)
         })
      )
   }, [])

   const value = {
      userData,
      activity,
      performance,
      session,
   }
   return <dataContext.Provider value={value}>{children}</dataContext.Provider>
}
