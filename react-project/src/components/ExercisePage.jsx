import Header from './Header'
import EntitiesGallery from './EntitiesGallery'
import SurveyForm from './SurveyForm'

const ExercisePage = () => {
  return (
    <>
      <Header />

      <main className="exercise-page">
        <div className="page-link-row">
          <a className="page-link-btn" href="#home">
            Voltar para a pagina principal
          </a>
        </div>

        <h1>Deadlift Championship</h1>
        <EntitiesGallery />
        <SurveyForm />
      </main>
    </>
  )
}

export default ExercisePage

