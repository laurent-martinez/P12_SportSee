import './HorizontalNavbar.scss'
import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

/**
 * @component the main nav bar component who render html using the context to collect specific data
 * @returns {HTMLEment} the html of the bar chart activity component
 */
const HorizontalNavbar = () => {
   return (
      <div className="HorizontalNavbar">
         <div className="HorizontalNavbar_logo">
            <Logo />
         </div>
         <ul className="HorizontalNavbar_items">
            <li className="HorizontalNavbar_items_item">
               <Link to="#">Accueil</Link>
            </li>
            <li className="HorizontalNavbar_items_item">
               <Link to="#">Profil</Link>
            </li>
            <li className="HorizontalNavbar_items_item">
               <Link to="#">Réglages</Link>
            </li>
            <li className="HorizontalNavbar_items_item">
               <Link to="#">Communauté</Link>
            </li>
         </ul>
      </div>
   )
}

export default HorizontalNavbar
