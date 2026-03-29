import { useEffect, useMemo, useState } from 'react'

const getTimeLeft = (targetDate) => {
  const now = Date.now()
  const distance = targetDate.getTime() - now

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true }
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    isFinished: false,
  }
}

const Countdown = ({ eventDate }) => {
  const targetDate = useMemo(() => new Date(eventDate), [eventDate])
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    if (Number.isNaN(targetDate.getTime())) {
      return undefined
    }

    setTimeLeft(getTimeLeft(targetDate))

    const timerId = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)

    return () => {
      window.clearInterval(timerId)
    }
  }, [targetDate])

  if (Number.isNaN(targetDate.getTime())) {
    return <h2>Data do evento invalida.</h2>
  }

  if (timeLeft.isFinished) {
    return <h2>O evento ja comecou!</h2>
  }

  return (
    <h2>
      Faltam {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      {' '}para o evento!
    </h2>
  )
}

export default Countdown

