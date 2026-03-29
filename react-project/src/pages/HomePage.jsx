import EventIntro from '../components/EventIntro'
import ProgramSection from '../components/ProgramSection'
import SlideshowSection from '../components/SlideshowSection'
import NewsSection from '../components/NewsSection'
import RelatedEvents from '../components/RelatedEvents'

const HomePage = () => {
  return (
    <>
      <EventIntro />
      <hr />
      <ProgramSection />
      <hr />
      <SlideshowSection />
      <hr />
      <NewsSection />
      <hr />
      <RelatedEvents />
    </>
  )
}

export default HomePage

