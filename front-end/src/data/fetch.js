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
 * @function that provide a context provider, calling the api to get datas, call the formatters to modelise the data & exporting an object of variables through a dataContext provider.
 * @param {children}
 * @returns {element}
 */
export const DataContextProvider = ({ children }) => {
   /**
    * all variables needed for the charts, using useState to set state, empty array and true for the loader.
    */
   const [userData, setUserData] = useState([])
   const [keyData, setKeyData] = useState([])
   const [activity, setActivity] = useState([])
   const [session, setSession] = useState([])
   const [performance, setPerformance] = useState([])
   const [userScore, setUserScore] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   /**
    * using useEffect to know when to render the components
    */
   useEffect(() => {
      /**
       * setting loading to true waiting the process of getting & modelising datas.
       */
      setIsLoading(true)
      /**
       * url of the user to get his specific datas(modify url if you want to access to other users)
       */
      const url = 18

      /**
       * urls with all endpoints
       */
      const userDataUrl = `http://localhost:3000/user/${url}`
      const activityUrl = `http://localhost:3000/user/${url}/activity`
      const sessionUrl = `http://localhost:3000/user/${url}/average-sessions`
      const performanceUrl = `http://localhost:3000/user/${url}/performance`

      /**
       * using axios to make a http get request
       */
      const getUserData = axios.get(userDataUrl)
      const getActivity = axios.get(activityUrl)
      const getSession = axios.get(sessionUrl)
      const getPerformance = axios.get(performanceUrl)

      /**
       * using axios to get datas
       */
      axios.all([getUserData, getActivity, getSession, getPerformance]).then(
         axios.spread((...allData) => {
            /**
             * using the formatters to modelise the arrays of datas from the api
             */
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

            /**
             * define the new state of variables after getting modelise datas
             */
            setUserData(userDataFormat)
            setKeyData(keyDataFormat)
            setActivity(allData[1].data.data.sessions)
            setSession(sessionDataFormat)
            setPerformance(performanceDataFormat)
            setUserScore(
               allData[0].data.data.score || allData[0].data.data.todayScore
            )
            /**
             * setting the loading to false once datas have been collected & modelised
             */
            setIsLoading(false)
         })
      )
   }, [])
   //
   /**
    * create an object with all the variables needed for the charts
    */
   const value = {
      userData,
      activity,
      performance,
      session,
      keyData,
      userScore,
      isLoading,
   }
   /**
    * exporting the context provider with the values needed
    */
   return <dataContext.Provider value={value}>{children}</dataContext.Provider>
}

// in case of needed modelised datas, from mocked datas of the backend.

// import { mockedDatas } from './mockData'
// import {
//    ActivityMockedData,
//    keyDataMockedData,
//    PerformanceMockedData,
//    SessionsMockedData,
//    userMockedData,
//    userMockedScore,
// } from './models/mockedData'
// if (mockedDatas) {
//    setUserData(userMockedData)
//    setKeyData(keyDataMockedData)
//    setUserScore(userMockedScore)
//    setActivity(ActivityMockedData())
//    setSession(SessionsMockedData())
//    setPerformance(PerformanceMockedData())
//    setIsLoading(false)
// }
