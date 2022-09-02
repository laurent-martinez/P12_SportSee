import { createContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import keyDataFormater from './models/KeyDataFormater'
import UserDataFormater from './models/UserDataFormater'
import SessionDataFormater from './models/SessionDataFormater'
import PerformanceDataFormater from './models/PerformanceDataFormater'

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
   const [keyData, setKeyData] = useState([])
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

            const keyDataFormat = new keyDataFormater(
               allDataUser.data.data.keyData
            )

            const userDataFormat = new UserDataFormater(
               allDataUser.data.data.userInfos
            )
            const sessionDataFormat = new SessionDataFormater(
               allDataSession.data.data.sessions
            )
            const performanceDataFormat = new PerformanceDataFormater(
               allDataPerformance.data.data.data
            )
            setUserData(userDataFormat)
            setKeyData(keyDataFormat)
            setActivity(allDataActivity.data.data.sessions)
            setSession(sessionDataFormat)
            setPerformance(performanceDataFormat)
         })
      )
   }, [])

   const value = {
      userData,
      activity,
      performance,
      session,
      keyData,
   }
   return <dataContext.Provider value={value}>{children}</dataContext.Provider>
}
