import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataContextProvider } from './data/fetch'
import Home from './pages/Home'

// all the routes for the app using react-router v6

const ReactRouter = () => {
   return (
      <DataContextProvider>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
            </Routes>
         </BrowserRouter>
      </DataContextProvider>
   )
}

export default ReactRouter
