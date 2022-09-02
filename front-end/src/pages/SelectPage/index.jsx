import HorizontalNavbar from '../../components/HorizontalNavbar'
import VerticalNavbar from '../../components/VerticalNavbar'
import './Home.scss'

const Home = () => {
   return (
      <>
         <div className="container">
            <HorizontalNavbar />
            <VerticalNavbar />
         </div>
      </>
   )
}

export default Home
