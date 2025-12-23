import { useState, useEffect } from 'react'
import './MainContent.css'

function MainContent() {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
  const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

  const jour = jours[dateTime.getDay()]
  const numeroJour = dateTime.getDate()
  const moisNom = mois[dateTime.getMonth()]
  const annee = dateTime.getFullYear()
  const heure = String(dateTime.getHours()).padStart(2, '0')
  const minute = String(dateTime.getMinutes()).padStart(2, '0')
  const seconde = String(dateTime.getSeconds()).padStart(2, '0')

  return (
    <div className="main-content">
      <p>Bonjour, on est le {jour} {numeroJour} {moisNom} {annee} et il est {heure}:{minute}:{seconde}</p>
    </div>
  )
}

export default MainContent
