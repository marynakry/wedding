import React from 'react'
import partyImage from '../assets/party.png'

type Props = {
  title: string
  message1: string
  message2: string
}

export default function Wishes({ title, message1, message2 }: Props) {
  return (
    <section className="wishes">
      <h3 className="section-title">{title}</h3>
      <div className="wishes-copy">
        <p className="wishes-message">{message1}</p>
        <img src={partyImage} alt="" className="wishes-party" aria-hidden="true" />
        <p className="wishes-message">{message2}</p>
      </div>
    </section>
  )
}
