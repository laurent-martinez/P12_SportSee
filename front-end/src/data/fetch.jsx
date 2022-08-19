import { useEffect, useState } from 'react'

const useFetchUser = () => {
   const [user, setUser] = useState([])
   useEffect(() => {
      const fetchUser = () => {
         fetch('http://localhost:3000/user/18')
            .then((res) => res.json())
            .then((result) => {
               setUser(result.data)
            })
      }
      fetchUser()
   }, [])

   return user
}
const useFetchActivities = () => {
   const [activity, setActivity] = useState([])
   useEffect(() => {
      const fetchActivity = () => {
         fetch('http://localhost:3000/user/18/activity')
            .then((res) => res.json())
            .then((result) => {
               setActivity(result.data)
            })
      }
      fetchActivity()
   }, [])
   return activity
}

const useFetchSessions = () => {
   const [session, setSession] = useState([])

   useEffect(() => {
      const fetchSession = () => {
         fetch('http://localhost:3000/user/average-sessions')
            .then((res) => res.json())
            .then((result) => {
               setSession(result.data)
            })
      }
      fetchSession()
   }, [])
   return session
}

const useFetchPerformances = () => {
   const [performance, setPerformance] = useState([])

   useEffect(() => {
      const fetchPerformance = () => {
         fetch('http://localhost:3000/user/18/performance')
            .then((res) => res.json())
            .then((result) => {
               setPerformance(result.data)
            })
      }
      fetchPerformance()
   }, [])
   return performance
}

export {
   useFetchUser,
   useFetchActivities,
   useFetchSessions,
   useFetchPerformances,
}
