import { useState, useEffect } from 'react'
import studentsData from '../data.json'
import './StudentCard.css'

function StudentCard() {
  const [randomStudent, setRandomStudent] = useState(null)

  const getRandomStudent = () => {
    const randomIndex = Math.floor(Math.random() * studentsData.length)
    return studentsData[randomIndex]
  }

  useEffect(() => {
    setRandomStudent(getRandomStudent())
  }, [])

  const handleNewStudent = () => {
    setRandomStudent(getRandomStudent())
  }

  if (!randomStudent) {
    return <div>Chargement...</div>
  }

  return (
    <div className="student-card">
      <h3>Étudiant aléatoire</h3>
      <div className="student-info">
        <p><strong>Nom:</strong> {randomStudent.student.firstname} {randomStudent.student.lastname}</p>
        <p><strong>ID Étudiant:</strong> {randomStudent.student.id}</p>
        <p><strong>Cours:</strong> {randomStudent.course}</p>
        <p><strong>Date:</strong> {randomStudent.date}</p>
        <p><strong>Note:</strong> {randomStudent.grade}/100</p>
      </div>
      <button onClick={handleNewStudent} className="random-button">
        Afficher un autre étudiant
      </button>
    </div>
  )
}

export default StudentCard
