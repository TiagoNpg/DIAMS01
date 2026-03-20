import { useEffect, useState } from 'react'
import Header from './components/Header'
import EventIntro from './components/EventIntro'
import ProgramSection from './components/ProgramSection'
import SlideshowSection from './components/SlideshowSection'
import NewsSection from './components/NewsSection'
import RelatedEvents from './components/RelatedEvents'
import Footer from './components/Footer'
import ExercisePage from './components/ExercisePage'
import './App.css'

const getCurrentPage = () =>
  window.location.hash === '#entidades' ? 'entidades' : 'home'

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getCurrentPage())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (currentPage === 'entidades') {
    return <ExercisePage />
  }

  return (
    <>
      <Header />

      <main className="page-content">
        <div className="page-link-row">
          <a className="page-link-btn" href="#entidades">
            Ver galeria e inquerito
          </a>
        </div>

        <EventIntro />
        <hr />
        <ProgramSection />
        <hr />
        <SlideshowSection />
        <hr />
        <NewsSection />
        <hr />
        <RelatedEvents />
        <Footer />
      </main>
    </>
  )
}

export default App
