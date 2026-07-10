import React from 'react'
import Header from './components/Header'
import dateImage from './assets/date.png'
import engDateImage from './assets/eng-date.png'
import dividerImage from './assets/divider.png'
import vilaImage from './assets/vila.png'
import sep3Image from './assets/sep3.png'
import sep4Image from './assets/sep4.png'
import sep5Image from './assets/sep5.png'
import sep2Image from './assets/sep2.png'
import dogImage from './assets/dog2.png'
import Program from './components/Program'
import DressCode from './components/DressCode'
import Wishes from './components/Wishes'
import RSVP from './components/RSVP'
import './styles.css'
import { contentByLocale, type Locale } from './content'

type Props = {
  locale: Locale
}

export default function App({ locale }: Props): JSX.Element {
  const content = contentByLocale[locale]
  const currentDateImage = locale === 'ru' ? dateImage : engDateImage

  return (
    <div className="page">
      <div className="card invite-card">
        <Header locale={locale} />
        <section className="intro-section">
          <h2 className="intro-title">{content.intro.title}</h2>
          <div className="intro-subtitle-group">
            <p className="intro-subtitle">{content.intro.line1}</p>
            <p className="intro-subtitle">
              {content.intro.line2}
            </p>
          </div>
        </section>
        <section className="date-section">
          <img src={currentDateImage} alt="Wedding date" className="date-image" />
        </section>
        <img src={dividerImage} alt="Divider" className="section-divider" />
        <section className="intro-section location-section">
          <h2 className="intro-title section-title">{content.venue.sectionTitle}</h2>
          <div className="location-grid">
            <div className="location-image-wrap">
              <img src={vilaImage} alt="Vila Lanna" className="location-image" />
            </div>
            <div className="location-text">
              <p className="intro-subtitle location-line">{content.venue.name}</p>
              <p className="intro-subtitle location-line">{content.venue.address}</p>
              <a className="location-link" href="https://maps.app.goo.gl/zjprHDCDtPr57r3p7" target="_blank" rel="noreferrer">
                {content.venue.buttonText}
              </a>
            </div>
          </div>
        </section>
        <img src={sep3Image} alt="Section divider" className="section-separator after-location-separator" />
        <Program sectionTitle={content.program.sectionTitle} items={content.program.items} />
        <img src={sep4Image} alt="Section divider" className="section-separator sep4" />
        <DressCode title={content.dressCode.title} intro={content.dressCode.intro} note={content.dressCode.note} colors={content.dressCode.colors} />
        <img src={sep5Image} alt="Section divider" className="section-separator" />
        <Wishes title={content.wishes.title} message1={content.wishes.message1} message2={content.wishes.message2} />
        <img src={sep2Image} alt="Section divider" className="section-separator sep2" />
        <RSVP copy={content.rsvp} />
        <img src={dogImage} alt="Dog" className="ending-dog" />
      </div>
    </div>
  )
}
