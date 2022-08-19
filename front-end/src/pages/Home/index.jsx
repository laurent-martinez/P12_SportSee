import HorizontalNavbar from '../../components/HorizontalNavbar'
import MainContent from '../../components/MainContent'
import VerticalNavbar from '../../components/VerticalNavbar'
import './Home.scss'

const Home = () => {
   return (
      <>
         <div className="container">
            <HorizontalNavbar />
            <VerticalNavbar />
            <MainContent />
         </div>
      </>
   )
}

export default Home
