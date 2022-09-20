import Logo from '../../components/Logo'
import './Error.scss'

const Error = () => {
   return (
      <>
         <div className="errorPage">
            <Logo />
            <h1 className="errorPage_title">
               La page que vous demandez n'existe pas
            </h1>
         </div>
         <button></button>
      </>
   )
}

export default Error
