import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import entities from '../data/entities.json'

const STORAGE_KEY = 'survey-results-counts'
const LAST_SUBMISSION_KEY = 'survey-last-submission-id'

const buildInitialCounts = () => {
  const emptyCounts = Object.fromEntries(entities.map((entity) => [String(entity.id), 0]))

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return emptyCounts
    }

    const parsed = JSON.parse(stored)
    return { ...emptyCounts, ...parsed }
  } catch {
    return emptyCounts
  }
}

const ResultadosPage = () => {
  const location = useLocation()
  const selectedEntityId = location.state?.selectedEntityId
  const submissionId = location.state?.submissionId

  const [counts, setCounts] = useState(buildInitialCounts)

  useEffect(() => {
    if (!selectedEntityId) {
      return
    }

    const submissionTag = String(submissionId ?? '')
    if (submissionTag) {
      const lastSavedSubmission = sessionStorage.getItem(LAST_SUBMISSION_KEY)
      if (lastSavedSubmission === submissionTag) {
        return
      }
      sessionStorage.setItem(LAST_SUBMISSION_KEY, submissionTag)
    }

    setCounts((previousCounts) => {
      const updatedCounts = {
        ...previousCounts,
        [selectedEntityId]: (previousCounts[selectedEntityId] ?? 0) + 1,
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCounts))
      return updatedCounts
    })
  }, [selectedEntityId, submissionId])

  const selectedEntity = useMemo(
    () => entities.find((entity) => String(entity.id) === String(selectedEntityId)),
    [selectedEntityId],
  )

  const totalVotes = Object.values(counts).reduce((sum, votes) => sum + votes, 0)

  return (
    <section className="survey-results">
      <h2>Resultados do Inquerito</h2>

      {selectedEntity ? (
        <p className="survey-results__selected">
          Resposta submetida: <strong>{selectedEntity.nome}</strong>
        </p>
      ) : (
        <p className="survey-results__selected">
          Nenhuma resposta foi submetida nesta visita. Os valores em baixo mostram o acumulado.
        </p>
      )}

      <p>Total de respostas acumuladas: {totalVotes}</p>

      <ul className="survey-results__list">
        {entities.map((entity) => {
          const votes = counts[String(entity.id)] ?? 0
          const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0

          return (
            <li key={entity.id}>
              <span>{entity.nome}</span>
              <span>{votes} votos ({percentage}%)</span>
            </li>
          )
        })}
      </ul>

      <Link className="page-link-btn" to="/inquerito">
        Responder novamente
      </Link>
    </section>
  )
}

export default ResultadosPage

