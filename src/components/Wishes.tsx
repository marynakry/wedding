import React from 'react'

export default function Wishes() {
  return (
    <section className="wishes">
      <h3 className="section-title">Пожелания</h3>
      <div className="wishes-copy">
        <p className="wishes-message">Самым ценным подарком для нас станет ваше присутствие в этот день</p>
        <img src="/src/assets/party.png" alt="" className="wishes-party" aria-hidden="true" />
        <p className="wishes-message">Если вы захотите поздравить нас еще и подарком, будем благодарны за вклад в бюджет нашей молодой семьи, который поможет воплотить наши мечты</p>
      </div>
    </section>
  )
}
