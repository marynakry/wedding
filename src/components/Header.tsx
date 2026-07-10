import React from 'react'
import headerImageRu from '../assets/headerFinal.png'
import headerImageEn from '../assets/eng-header.png'
import type { Locale } from '../content'

type Props = {
  locale: Locale
  names: string
}

export default function Header({ locale, names }: Props) {
  const headerImage = locale === 'en' ? headerImageEn : headerImageRu

  return (
    <header className="inv-header">
      <img src={headerImage} alt="Wedding invitation header" className="hero-image" />
      {locale === 'en' ? <p className="header-names">{names}</p> : null}
    </header>
  )
}
