import React from 'react'
import headerImageRu from '../assets/headerFinal.png'
import headerImageEn from '../assets/eng-header.png'
import type { Locale } from '../content'

type Props = {
  locale: Locale
}

export default function Header({ locale }: Props) {
  const headerImage = locale === 'ru' ? headerImageRu : headerImageEn

  return (
    <header className="inv-header">
      <img src={headerImage} alt="Wedding invitation header" className="hero-image" />
    </header>
  )
}
