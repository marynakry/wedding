import React from 'react'

type Props = { title: string; intro: string; note: string; colors: string[] }

export default function DressCode({ title, intro, note, colors }: Props) {
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
    </section>
  )
}
