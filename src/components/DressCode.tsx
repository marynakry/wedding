import React from 'react'

type Props = {
  title: string
  intro: string
  note: string
  examplesTitle: string
  womenButton: string
  menButton: string
  colors: string[]
}

export default function DressCode({ title, intro, note, examplesTitle, womenButton, menButton, colors }: Props) {
  const ladyLooksHref = `${import.meta.env.BASE_URL}dress-code-lady/`
  const gentlemanLooksHref = `${import.meta.env.BASE_URL}dress-code-gentleman/`

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
      <p className="intro-subtitle dresscode-examples">{examplesTitle}</p>
      <div className="dresscode-links">
        <a
          className="location-link"
          href={ladyLooksHref}
          target="_blank"
          rel="noreferrer"
        >
          {womenButton}
        </a>
        <a
          className="location-link"
          href={gentlemanLooksHref}
          target="_blank"
          rel="noreferrer"
        >
          {menButton}
        </a>
      </div>
    </section>
  )
}
