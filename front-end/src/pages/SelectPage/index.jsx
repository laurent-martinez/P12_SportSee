import HorizontalNavbar from '../../components/HorizontalNavbar'
import Selection from '../../components/Selection'
import VerticalNavbar from '../../components/VerticalNavbar'
import './SelectPage.scss'

const SelectPage = () => {
   return (
      <>
         <div className="container">
            <HorizontalNavbar />
            <VerticalNavbar />
            <Selection />
         </div>
      </>
   )
}

export default SelectPage
