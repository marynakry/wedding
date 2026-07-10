import React from 'react'
import guestImage from '../assets/guest.png'
import ringImage from '../assets/ring.png'
import foodImage from '../assets/food.png'
import cakeImage from '../assets/cake.png'

type Item = { time: string; title: string }
type Props = { items: Item[] }

const Icon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="10" stroke="#f2c" strokeWidth="1" />
  </svg>
)

export default function Program({ items }: Props) {
  return (
    <section className="program">
      <h3 className="section-title">Программа дня</h3>
      <div className="timeline">
        {items.map((it, idx) => (
          <div key={idx} className="timeline-item">
            <div className="icon">
              {idx === 0 ? (
                <img src={guestImage} alt="Guest" className="timeline-icon" />
              ) : idx === 1 ? (
                <img src={ringImage} alt="Ring" className="timeline-icon" />
              ) : idx === 2 ? (
                <img src={foodImage} alt="Food" className="timeline-icon" />
              ) : idx === 3 ? (
                <img src={cakeImage} alt="Cake" className="timeline-icon" />
              ) : (
                <Icon />
              )}
            </div>
            <div className="time">{it.time}</div>
            <div className="title">{it.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
