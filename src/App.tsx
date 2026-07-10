import React from 'react'
import Header from './components/Header'
import dateImage from './assets/date.png'
import dividerImage from './assets/divider.png'
import vilaImage from './assets/vila.png'
import sep5Image from './assets/sep5.png'
import sep2Image from './assets/sep2.png'
import dogImage from './assets/dog2.png'
import Program from './components/Program'
import DressCode from './components/DressCode'
import Wishes from './components/Wishes'
import RSVP from './components/RSVP'
import './styles.css'
import { content } from './content'

export default function App(): JSX.Element {
  return (
    <div className="page">
      <div className="card invite-card">
        <Header />
        <section className="intro-section">
          <h2 className="intro-title">Дорогие друзья и родные</h2>
          <div className="intro-subtitle-group">
            <p className="intro-subtitle">Мы будем счастливы разделить с вами один из самых важных дней нашей жизни.</p>
            <p className="intro-subtitle">
              Приглашаем вас стать частью этого особенного момента и отпраздновать начало нашей семейной истории
            </p>
          </div>
        </section>
        <section className="date-section">
          <img src={dateImage} alt="Wedding date" className="date-image" />
        </section>
        <img src={dividerImage} alt="Divider" className="section-divider" />
        <section className="intro-section location-section">
          <h2 className="intro-title section-title">Место проведения</h2>
          <div className="location-grid">
            <div className="location-image-wrap">
              <img src={vilaImage} alt="Vila Lanna" className="location-image" />
            </div>
            <div className="location-text">
              <p className="intro-subtitle location-line">Vila Lanna</p>
              <p className="intro-subtitle location-line">V Sadech 1/1, Prague</p>
              <a className="location-link" href="https://maps.app.goo.gl/zjprHDCDtPr57r3p7" target="_blank" rel="noreferrer">
                Посмотреть на карте
              </a>
            </div>
          </div>
        </section>
        <img src="/src/assets/sep3.png" alt="Section divider" className="section-separator" />
        <Program items={content.program} />
        <img src="/src/assets/sep4.png" alt="Section divider" className="section-separator sep4" />
        <DressCode colors={content.dressCode.colors} text={content.dressCode.text} />
        <img src={sep5Image} alt="Section divider" className="section-separator" />
        <Wishes />
        <img src={sep2Image} alt="Section divider" className="section-separator sep2" />
        <RSVP />
        <img src={dogImage} alt="Dog" className="ending-dog" />
      </div>
    </div>
  )
}
