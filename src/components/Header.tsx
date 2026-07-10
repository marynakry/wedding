import React from 'react'
import headerImage from '../assets/headerFinal.png'

export default function Header() {
  return (
    <header className="inv-header">
      <img src={headerImage} alt="Wedding invitation header" className="hero-image" />
    </header>
  )
}
