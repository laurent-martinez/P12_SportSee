import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataContextProvider } from './data/fetch'
import Home from './pages/Home'
import './styles/index.scss'

// all the routes for the app using react-router v6

const ReactRouter = () => {
   return (
      <div className="App">
         <DataContextProvider>
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Home />} />
               </Routes>
            </BrowserRouter>
         </DataContextProvider>
      </div>
   )
}

export default ReactRouter
