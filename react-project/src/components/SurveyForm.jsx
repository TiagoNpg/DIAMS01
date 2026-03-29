import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import entities from '../data/entities.json'

const SurveyForm = () => {
  const [selectedEntityId, setSelectedEntityId] = useState('')
  const navigate = useNavigate()

  const handleOptionChange = (event) => {
    setSelectedEntityId(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!selectedEntityId) {
      alert('Selecione uma opcao antes de submeter.')
      return
    }

    navigate('/resultados', {
      state: {
        selectedEntityId,
        submissionId: `${Date.now()}-${selectedEntityId}`,
      },
    })
  }

  return (
    <section className="survey" aria-labelledby="survey-title">
      <h2 id="survey-title">Inquerito</h2>
      <form className="survey__form" onSubmit={handleSubmit}>
        <p>Qual entidade participante e a tua favorita?</p>

        {entities.map((entity) => (
          <label key={entity.id} className="survey__option">
            <input
              type="radio"
              name="favorite-entity"
              value={entity.id}
              checked={selectedEntityId === String(entity.id)}
              onChange={handleOptionChange}
            />
            {entity.nome}
          </label>
        ))}

        <button type="submit">Submeter</button>
      </form>
    </section>
  )
}

export default SurveyForm

