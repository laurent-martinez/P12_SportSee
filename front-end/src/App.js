import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// all the routes for the app using react-router v6

const ReactRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </BrowserRouter>
   )
}

export default ReactRouter
