import React from 'react'

type Props = { name: string; address: string; buttonText: string }

export default function Venue({ name, address, buttonText }: Props) {
  return (
    <section className="venue">
      <div className="venue-left">
        <strong>{name}</strong>
        <div className="address">{address}</div>
      </div>
      <div>
        <button className="btn-outline">{buttonText}</button>
      </div>
    </section>
  )
}
