import React, { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xykqrooo'

type RSVPContent = {
  title: string
  introBeforeDate: string
  deadline: string
  nameLabel: string
  attendanceLegend: string
  attendanceYes: string
  attendanceNo: string
  mainCourseLegend: string
  courseSalmon: string
  courseBeef: string
  courseVegetarian: string
  submitIdle: string
  submitLoading: string
  successMessage: string
  errorMessage: string
  ending: string
}

type Props = {
  copy: RSVPContent
}

export default function RSVP({ copy }: Props) {
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
      setSubmitMessage(copy.successMessage)
    } catch {
      setSubmitError(true)
      setSubmitMessage(copy.errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="rsvp-section">
      <h3 className="section-title">{copy.title}</h3>
      <p className="intro-subtitle">
        {copy.introBeforeDate} <strong>{copy.deadline}</strong>
      </p>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <div className="rsvp-field">
          <label htmlFor="guest-name" className="rsvp-label">{copy.nameLabel}</label>
          <input id="guest-name" name="guestName" type="text" className="rsvp-input" required />
        </div>

        <fieldset className="rsvp-fieldset">
          <legend className="rsvp-label">{copy.attendanceLegend}</legend>
          <label className="rsvp-option">
            <input type="radio" name="attendance" value="yes" required />
            <span>{copy.attendanceYes}</span>
          </label>
          <label className="rsvp-option">
            <input type="radio" name="attendance" value="no" required />
            <span>{copy.attendanceNo}</span>
          </label>
        </fieldset>

        <fieldset className="rsvp-fieldset">
          <legend className="rsvp-label">{copy.mainCourseLegend}</legend>
          <label className="rsvp-option">
            <input type="radio" name="mainCourse" value="salmon" required />
            <span>{copy.courseSalmon}</span>
          </label>
          <label className="rsvp-option">
            <input type="radio" name="mainCourse" value="beef" required />
            <span>{copy.courseBeef}</span>
          </label>
          <label className="rsvp-option">
            <input type="radio" name="mainCourse" value="vegetarian" required />
            <span>{copy.courseVegetarian}</span>
          </label>
        </fieldset>

        <button type="submit" className="location-link rsvp-submit" disabled={isSubmitting}>
          {isSubmitting ? copy.submitLoading : copy.submitIdle}
        </button>
        {submitMessage ? (
          <p className={`rsvp-status ${submitError ? 'rsvp-status-error' : 'rsvp-status-success'}`} role="status">
            {submitMessage}
          </p>
        ) : null}
      </form>
      <p className="intro-subtitle rsvp-ending">{copy.ending}</p>
    </section>
  )
}
