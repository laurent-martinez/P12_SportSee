import { mockedDatas } from '../mockData'

const url = 12

const mockedDataId = (nb) => {
   return mockedDatas[nb].find((id) => url === id.id || url === id.userId)
}

const userMockedData = mockedDataId(0).userInfos.firstName

const ActivityMockedData = () => {
   const userActivityMocked = mockedDataId(1).sessions
   let activityData = userActivityMocked.map((act, index) => {
      return {
         day: [index + 1],
         kilogram: act.kilogram,
         calories: act.calories,
      }
   })
   return activityData
}

const PerformanceMockedData = () => {
   const userPerformanceMocked = mockedDataId(3).data

   const kinds = [
      'Intensité',
      'Vitesse',
      'Force',
      'Endurance',
      'Energie',
      'Cardio',
   ]
   const performanceData = userPerformanceMocked.map((perf, index) => {
      return {
         kind: kinds[index],
         value: perf.value,
      }
   })
   return performanceData
}

const keyDataMockedData = mockedDataId(0).keyData

const SessionsMockedData = () => {
   const userSessionsMocked = mockedDataId(2).sessions

   let days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

   const sessionData = userSessionsMocked.map((session, index) => ({
      ...session,
      sessionLength: session.sessionLength,
      day: days[index],
   }))
   return sessionData
}

const userMockedScore = mockedDataId(0).todayScore || mockedDataId(0).score
console.log('mocked', userMockedScore)
export {
   userMockedData,
   SessionsMockedData,
   keyDataMockedData,
   PerformanceMockedData,
   ActivityMockedData,
   userMockedScore,
}
