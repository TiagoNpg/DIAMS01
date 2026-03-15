import Header from './components/Header'
import EventIntro from './components/EventIntro'
import ProgramSection from './components/ProgramSection'
import SlideshowSection from './components/SlideshowSection'
import NewsSection from './components/NewsSection'
import RelatedEvents from './components/RelatedEvents'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main className="page-content">
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
