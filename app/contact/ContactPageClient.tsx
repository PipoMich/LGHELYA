'use client'

import { useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import CustomSelect from '@/app/components/CustomSelect'
import styles from './page.module.css'

export default function ContactPageClient() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]     = useState(false)
  const [loading, setLoad]  = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoad(true)

    try {
      const response = await fetch('https://formsubmit.co/ajax/tatmimahdi@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || 'General Enquiry',
          message: form.message,
          _subject: `New Contact Request: ${form.subject || 'General Enquiry'} from ${form.name}`
        })
      })

      if (response.ok) {
        setSent(true)
      } else {
        console.error('Delivery bounced from server')
        alert('We failed to send your message. Please reach out to us manually!')
      }
    } catch (error) {
      console.error('Fetch crashed:', error)
    } finally {
      setLoad(false)
    }
  }

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* ── Header ── */}
        <section className={styles.header}>
          <div className={styles.headerInner}>
            <p className="section-label">Get in touch</p>
            <h1 className={styles.title}>LET'S TALK</h1>
            <p className={styles.sub}>Questions, collabs, press — we read everything.</p>
          </div>
        </section>

        {/* ── Body ── */}
        <div className={styles.body}>
          {/* Left — Info */}
          <div className={styles.infoCol}>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>EMAIL</p>
              <a href="mailto:tatmimahdi@gmail.com" className={styles.infoValue}>hello@LGHELYA.com</a>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>INSTAGRAM</p>
              <a href="#" className={styles.infoValue}>@LGHELYA.official</a>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>PRESS ENQUIRIES</p>
              <a href="mailto:tatmimahdi@gmail.com" className={styles.infoValue}>press@LGHELYA.com</a>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>HOURS</p>
              <p className={styles.infoValue}>Mon – Fri, 9am – 6pm CET</p>
            </div>
            <div className={styles.infoAccent}>
              <span>LGHELYA</span>
              <span>EST. 2019</span>
            </div>
          </div>

          {/* Right — Form */}
          <div className={styles.formCol}>
            {sent ? (
              <div className={styles.successBox} role="alert">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                  stroke="var(--brand-orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <h2 className={styles.successTitle}>MESSAGE SENT</h2>
                <p className={styles.successSub}>We'll get back to you within 24 hours.</p>
                <button className="btn-outline" onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">NAME *</label>
                    <input
                      id="name" name="name" type="text" required
                      className={styles.input} placeholder="Your name"
                      value={form.name} onChange={onChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">EMAIL *</label>
                    <input
                      id="email" name="email" type="email" required
                      className={styles.input} placeholder="your@email.com"
                      value={form.email} onChange={onChange}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="subject">SUBJECT *</label>
                  <CustomSelect
                    id="subject"
                    required
                    className={styles.selectContainer}
                    value={form.subject}
                    onChange={(val) => setForm(f => ({ ...f, subject: val }))}
                    placeholder="Select a topic…"
                    options={[
                      { label: 'Order Issue', value: 'Order Issue' },
                      { label: 'Returns & Exchanges', value: 'Returns & Exchanges' },
                      { label: 'Collaboration', value: 'Collaboration' },
                      { label: 'Press', value: 'Press' },
                      { label: 'General Enquiry', value: 'General Enquiry' }
                    ]}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">MESSAGE *</label>
                  <textarea
                    id="message" name="message" required
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Tell us what's on your mind…"
                    rows={6}
                    value={form.message} onChange={onChange}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn-primary ${styles.submitBtn}`}
                  id="contact-submit-btn"
                  disabled={loading}
                >
                  {loading ? 'SENDING…' : 'SEND MESSAGE →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
