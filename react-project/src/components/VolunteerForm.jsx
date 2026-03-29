import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const hourOptions = [
  '8:00',
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
]

const taskOptions = ['Limpeza', 'Montagens', 'Arrumacoes', 'Organizacao']

const VolunteerForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  })
  const [selectedHours, setSelectedHours] = useState([])
  const [selectedTasks, setSelectedTasks] = useState([])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const toggleValue = (value, setter) => {
    setter((previous) =>
      previous.includes(value)
        ? previous.filter((item) => item !== value)
        : [...previous, value],
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (selectedHours.length === 0 || selectedTasks.length === 0) {
      alert('Seleciona pelo menos um horario e uma tarefa.')
      return
    }

    navigate('/sucesso-voluntariado', {
      state: {
        name: formData.name,
        selectedHours,
        selectedTasks,
      },
    })
  }

  return (
    <section className="volunteer-form" aria-labelledby="volunteer-title">
      <h2 id="volunteer-title">Formulario de Voluntariado</h2>

      <form className="survey__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Nome"
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          placeholder="Telemovel"
          onChange={handleInputChange}
          required
        />

        <div>
          <h3>Horas disponiveis</h3>
          <div className="toggle-grid">
            {hourOptions.map((hour) => (
              <button
                key={hour}
                type="button"
                className={`toggle-btn ${selectedHours.includes(hour) ? 'active' : ''}`}
                onClick={() => toggleValue(hour, setSelectedHours)}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3>Tarefas disponiveis</h3>
          <div className="toggle-grid">
            {taskOptions.map((task) => (
              <button
                key={task}
                type="button"
                className={`toggle-btn ${selectedTasks.includes(task) ? 'active' : ''}`}
                onClick={() => toggleValue(task, setSelectedTasks)}
              >
                {task}
              </button>
            ))}
          </div>
        </div>

        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          placeholder="Comentario"
          rows={4}
        />

        <button type="submit">Inscrever-se</button>
      </form>
    </section>
  )
}

export default VolunteerForm

