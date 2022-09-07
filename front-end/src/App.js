import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataContextProvider } from './data/fetch'
import SelectPage from './pages/SelectPage'
import Home from './pages/Home'

// all the routes for the app using react-router v6

const ReactRouter = () => {
   return (
      <DataContextProvider>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<SelectPage />} />
               <Route path="/user/:id" element={<Home />} />
            </Routes>
         </BrowserRouter>
      </DataContextProvider>
   )
}

export default ReactRouter
