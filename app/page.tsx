import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import Ticker           from './components/Ticker'
import About            from './components/About'
import FutureCulture    from './components/FutureCulture'
import CharacterGrid    from './components/CharacterGrid'
import NewRelease       from './components/NewRelease'
import EmpowermentBanner from './components/EmpowermentBanner'
import Footer           from './components/Footer'
import ScrollReveal     from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      {/* Interactive client utilities */}
      <ScrollReveal />

      {/* A — Navigation */}
      <Navbar />

      <main id="main-content">
        {/* B — Hero */}
        <Hero />

        {/* C — Diagonal Ticker */}
        <Ticker />

        {/* D — About / Brand Story */}
        <About />

        {/* E — Future Meets Culture */}
        <FutureCulture />

        {/* G — New Release Product Grid */}
        <NewRelease />

        {/* H — Empowerment Banner */}
        <EmpowermentBanner />
        
        {/* F — Reveal Your True Character */}
        <CharacterGrid />

      </main>

      {/* I — Footer */}
      <Footer />
    </>
  )
}
