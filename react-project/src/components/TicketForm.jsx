import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ticketPrices = {
  standard: 25,
  premium: 50,
  vip: 100,
}

const initialCounts = {
  standard: 0,
  premium: 0,
  vip: 0,
}

const TicketForm = () => {
  const navigate = useNavigate()
  const [counts, setCounts] = useState(initialCounts)

  const totalValue = useMemo(
    () =>
      counts.standard * ticketPrices.standard +
      counts.premium * ticketPrices.premium +
      counts.vip * ticketPrices.vip,
    [counts],
  )

  const updateCount = (type, delta) => {
    setCounts((previous) => {
      const nextValue = Math.max(0, previous[type] + delta)
      return { ...previous, [type]: nextValue }
    })
  }

  const handleBuy = () => {
    if (totalValue === 0) {
      alert('Seleciona pelo menos um bilhete para comprar.')
      return
    }

    navigate('/sucesso-bilhetes', {
      state: {
        totalValue,
        counts,
      },
    })

    setCounts(initialCounts)
  }

  return (
    <section className="ticket-form" aria-labelledby="ticket-title">
      <h2 id="ticket-title">Bilheteira</h2>
      <p>Escolhe os bilhetes para assistir ao Deadlift Championship.</p>

      <div className="ticket-item">
        <span>Bilhete Standard (EUR25)</span>
        <button type="button" className="btnSmaller" onClick={() => updateCount('standard', -1)}>
          -
        </button>
        <span className="ticket-count">{counts.standard}</span>
        <button type="button" className="btnSmaller" onClick={() => updateCount('standard', 1)}>
          +
        </button>
      </div>

      <div className="ticket-item">
        <span>Bilhete Premium (EUR50)</span>
        <button type="button" className="btnSmaller" onClick={() => updateCount('premium', -1)}>
          -
        </button>
        <span className="ticket-count">{counts.premium}</span>
        <button type="button" className="btnSmaller" onClick={() => updateCount('premium', 1)}>
          +
        </button>
      </div>

      <div className="ticket-item">
        <span>Bilhete VIP (EUR100)</span>
        <button type="button" className="btnSmaller" onClick={() => updateCount('vip', -1)}>
          -
        </button>
        <span className="ticket-count">{counts.vip}</span>
        <button type="button" className="btnSmaller" onClick={() => updateCount('vip', 1)}>
          +
        </button>
      </div>

      <div className="ticket-summary">
        <strong>Total: {totalValue}EUR</strong>
        <button type="button" className="btnSmaller btnBuy" onClick={handleBuy}>
          Comprar
        </button>
      </div>
    </section>
  )
}

export default TicketForm

