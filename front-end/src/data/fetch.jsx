import React, { createContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import keyDataFormater from './models/KeyDataFormater'
import UserDataFormater from './models/UserDataFormater'
import SessionDataFormater from './models/SessionDataFormater'
import PerformanceDataFormater from './models/PerformanceDataFormater'

/**
 * initialize the context object
 *
 */
export const dataContext = createContext(null)

/**
 *
 * @param {*} param0
 * @type {React.FC}
 * @returns
 */
export const DataContextProvider = ({ children }) => {
   const [userData, setUserData] = useState([])
   const [keyData, setKeyData] = useState([])
   const [activity, setActivity] = useState([])
   const [session, setSession] = useState([])
   const [performance, setPerformance] = useState([])
   const [userScore, setUserScore] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   // const searchGet = (str) =>
   //    new URLSearchParams(window.location.search).get(str)
   // const id = searchGet('user')

   useEffect(() => {
      setIsLoading(true)
      const url = 18
      const userDataUrl = `http://localhost:3000/user/${url}`
      const activityUrl = `http://localhost:3000/user/${url}/activity`
      const sessionUrl = `http://localhost:3000/user/${url}/average-sessions`
      const performanceUrl = `http://localhost:3000/user/${url}/performance`
      //base url
      const getUserData = axios.get(userDataUrl)
      const getActivity = axios.get(activityUrl)
      const getSession = axios.get(sessionUrl)
      const getPerformance = axios.get(performanceUrl)

      axios.all([getUserData, getActivity, getSession, getPerformance]).then(
         axios.spread((...allData) => {
            // const allDataUser = allData[0]
            // const allDataActivity = allData[1]
            // const allDataSession = allData[2]
            // const allDataPerformance = allData[3]

            const keyDataFormat = new keyDataFormater(
               allData[0].data.data.keyData
            )

            const userDataFormat = new UserDataFormater(
               allData[0].data.data.userInfos
            )
            const sessionDataFormat = new SessionDataFormater(
               allData[2].data.data.sessions
            )
            const performanceDataFormat = new PerformanceDataFormater(
               allData[3].data.data.data
            )
            // const activityDataFormat = new ActivityDataFormater(
            //    allData[1].data.data.sessions
            // )

            setUserData(userDataFormat)
            setKeyData(keyDataFormat)
            setActivity(allData[1].data.data.sessions)
            setSession(sessionDataFormat)
            setPerformance(performanceDataFormat)
            setUserScore(allData[0].data.data.score)
            setIsLoading(false)
         })
      )
   }, [])
   //
   const value = {
      userData,
      activity,
      performance,
      session,
      keyData,
      userScore,
      isLoading,
   }
   return <dataContext.Provider value={value}>{children}</dataContext.Provider>
}
