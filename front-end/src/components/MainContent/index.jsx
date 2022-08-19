import React from 'react'
import { useFetchUser } from '../../data/fetch'
import './MainContent.scss'
const MainContent = () => {
   const test = useFetchUser()
   console.log(test.userInfos.firstName)
   return (
      <div className="MainContent">
         <h1 className="MainContent_title">
            Bonjour {test.userInfos.firstName}
         </h1>
      </div>
   )
}

export default MainContent
