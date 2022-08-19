import './HorizontalNavbar.scss'
import React from 'react'
import Logo from '../Logo'

const HorizontalNavbar = () => {
   return (
      <div className="HorizontalNavbar">
         <div className="HorizontalNavbar_logo">
            <Logo />
         </div>
         <ul className="HorizontalNavbar_items">
            <li className="HorizontalNavbar_items_item">Accueil</li>
            <li className="HorizontalNavbar_items_item">Profil</li>
            <li className="HorizontalNavbar_items_item">Réglage</li>
            <li className="HorizontalNavbar_items_item">Communauté</li>
         </ul>
      </div>
   )
}

export default HorizontalNavbar
