import Logo from '../../components/Logo'
import './Error.scss'
import { useNavigate } from 'react-router-dom'

const Error = () => {
   const navigate = useNavigate()
   const navigateHome = () => {
      navigate('/')
   }
   return (
      <>
         <div className="errorPage">
            <Logo />
            <h1 className="errorPage_title">
               La page que vous demandez n'existe pas
            </h1>
         </div>
         <button className="backHome" onClick={navigateHome}>
            Retourner à la page d'accueil
         </button>
      </>
   )
}

export default Error
