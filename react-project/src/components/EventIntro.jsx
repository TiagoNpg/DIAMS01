import heroImg from '../assets/image.png'
import { Link } from 'react-router-dom'
import Countdown from './Countdown'

const EventIntro = () => {
  return (
    <section className="event-intro">
      <figure>
        <img src={heroImg} alt="Atleta de levantamento de peso" />
        <figcaption>PRECISAMOS DE TII BIG DAWG</figcaption>
      </figure>

      <p>
        Concurso para <strong>levantadores de peso</strong>, precisamos de voluntários para limpar,
        levar os pesos até ao recinto e a oportunidade de competir ao lado destes monstros! <br />
        O evento vai se realizar dia <strong>25 de junho</strong>. <br />
        Não percas esta oportunidade para ver os melhores levantadores de peso do mundo a competir!
      </p>

      <Countdown eventDate="2026-06-25T09:00:00" />

      <nav>
        <Link to="/inquerito">Responder ao Inquerito</Link>
        <Link to="/voluntariado">Candidatar-me como Voluntario</Link>
        <Link to="/bilhetes">Comprar Bilhetes</Link>
      </nav>
    </section>
  )
}

export default EventIntro
