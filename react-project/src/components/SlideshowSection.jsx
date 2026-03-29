import { useEffect, useState } from 'react'
import heroImage from '../assets/hero.png'
import imageImage from '../assets/image.png'

const slides = [
  {
    src: heroImage,
    alt: 'Atleta em prova de deadlift',
    caption: 'A forca em competicao',
  },
  {
    src: imageImage,
    alt: 'Treino de levantamento de peso',
    caption: 'Preparacao para bater recordes',
  },
  {
    src: 'https://images.wallpapersden.com/image/download/bodybuilder-silhouette_bGVmZ22UmZqaraWkpJRnbWxnrWZsbGc.jpg',
    alt: 'Silhueta de atleta',
    caption: 'O ambiente do campeonato',
  },
]

const SlideshowSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % slides.length)
    }, 5000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? slides.length - 1 : previous - 1,
    )
  }

  const goToNext = () => {
    setCurrentIndex((previous) => (previous + 1) % slides.length)
  }

  const activeSlide = slides[currentIndex]

  return (
    <section>
      <h2>Slideshow</h2>
      <div className="slideshow-container">
        <button
          type="button"
          className="prev"
          aria-label="Anterior"
          onClick={goToPrevious}
        >
          &#10094;
        </button>

        <figure className="slide-frame">
          <span className="slide-frame__counter">
            {currentIndex + 1} / {slides.length}
          </span>
          <img src={activeSlide.src} alt={activeSlide.alt} className="slide-frame__image" />
          <figcaption>{activeSlide.caption}</figcaption>
        </figure>

        <button
          type="button"
          className="next"
          aria-label="Seguinte"
          onClick={goToNext}
        >
          &#10095;
        </button>
      </div>
      <div className="dots" aria-label="Escolher slide">
        {slides.map((slide, index) => (
          <button
            key={slide.alt}
            type="button"
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default SlideshowSection
