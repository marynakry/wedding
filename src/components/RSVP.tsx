import React, { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xykqrooo'

export default function RSVP() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setSubmitMessage('')
    setSubmitError(false)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      })

      if (!response.ok) {
        throw new Error('Form submit failed')
      }

      form.reset()
      setSubmitMessage('Спасибо! Ответ успешно отправлен.')
    } catch {
      setSubmitError(true)
      setSubmitMessage('Не удалось отправить форму. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="rsvp-section">
      <h3 className="section-title">Анкета</h3>
      <p className="intro-subtitle">
        Будем благодарны, если вы подтвердите свое присутствие и заполните небольшую анкету до <strong>15.08.2026</strong>
      </p>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <div className="rsvp-field">
          <label htmlFor="guest-name" className="rsvp-label">Ваше имя и фамилия</label>
          <input id="guest-name" name="guestName" type="text" className="rsvp-input" required />
        </div>

        <fieldset className="rsvp-fieldset">
          <legend className="rsvp-label">Будете ли вы на нашем свадебном торжестве?</legend>
          <label className="rsvp-option">
            <input type="radio" name="attendance" value="yes" required />
            <span>Обязательно буду</span>
          </label>
          <label className="rsvp-option">
            <input type="radio" name="attendance" value="no" required />
            <span>К сожалению, не получится</span>
          </label>
        </fieldset>

        <fieldset className="rsvp-fieldset">
          <legend className="rsvp-label">Какое основное блюдо вы предпочитаете?</legend>
          <label className="rsvp-option">
            <input type="radio" name="mainCourse" value="salmon" required />
            <span>Лосось</span>
          </label>
          <label className="rsvp-option">
            <input type="radio" name="mainCourse" value="beef" required />
            <span>Говядина</span>
          </label>
          <label className="rsvp-option">
            <input type="radio" name="mainCourse" value="vegetarian" required />
            <span>Вегетарианское блюдо</span>
          </label>
        </fieldset>

        <button type="submit" className="location-link rsvp-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Отправка...' : 'Отправить'}
        </button>
        {submitMessage ? (
          <p className={`rsvp-status ${submitError ? 'rsvp-status-error' : 'rsvp-status-success'}`} role="status">
            {submitMessage}
          </p>
        ) : null}
      </form>
      <p className="intro-subtitle rsvp-ending">С нетерпением ждем нашей встречи и будем счастливы отпраздновать этот день вместе с вами!</p>
    </section>
  )
}
