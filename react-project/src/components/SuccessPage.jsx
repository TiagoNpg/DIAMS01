import { Link, useLocation } from 'react-router-dom'

const SuccessPage = ({ message }) => {
  const location = useLocation()
  const name = location.state?.name
  const totalValue = location.state?.totalValue

  return (
    <section className="success-page">
      <h2>{message}</h2>
      {name ? <p>Obrigado, {name}. Recebemos a tua informacao.</p> : null}
      {typeof totalValue === 'number' ? <p>Total pago: {totalValue}EUR</p> : null}
      <p>Em breve iremos partilhar mais detalhes por email.</p>
      <Link className="page-link-btn" to="/">
        Voltar para a homepage
      </Link>
    </section>
  )
}

export default SuccessPage

