import React from 'react'

type Props = {
  title: string
  intro: string
  note: string
  inspirationButton: string
  colors: string[]
}

export default function DressCode({ title, intro, note, inspirationButton, colors }: Props) {
  const inspirationHref = `${import.meta.env.BASE_URL}dress-code-inspo/`

  return (
    <section className="dresscode">
      <h3 className="section-title">{title}</h3>
      <p className="intro-subtitle">{intro}</p>
      {note ? <p className="intro-subtitle">{note}</p> : null}
      <div className="swatches">
        {colors.map((c, i) => (
          <div key={i} className="swatch" style={{ background: c }} />
        ))}
      </div>
      <a className="location-link dresscode-inspiration-link" href={inspirationHref} target="_blank" rel="noreferrer">
        {inspirationButton}
      </a>
    </section>
  )
}
