const SlideshowSection = () => {
  return (
    <section>
      <h2>Slideshow</h2>
      <div className="slideshow-container">
        <button type="button" className="prev" aria-label="Anterior">
          &#10094;
        </button>
        <button type="button" className="next" aria-label="Seguinte">
          &#10095;
        </button>
      </div>
      <div className="dots" aria-hidden="true">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  )
}

export default SlideshowSection
