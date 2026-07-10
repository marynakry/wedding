import React from 'react'

type Props = { colors: string[]; text: string }

export default function DressCode({ colors, text }: Props) {
  return (
    <section className="dresscode">
      <h3 className="section-title">Дресс-код</h3>
      <p className="intro-subtitle">Мы хотим, чтобы этот день был наполнен легкостью и теплом. Будем рады, если вы поддержите атмосферу нашего праздника, выбрав образ в оттенках нашей цветовой палитры</p>
      <p className="intro-subtitle">{text}</p>
      <div className="swatches">
        {colors.map((c, i) => (
          <div key={i} className="swatch" style={{ background: c }} />
        ))}
      </div>

    </section>
  )
}
