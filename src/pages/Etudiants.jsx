import { useState } from 'react'
import studentsData from '../../data.json'
import './Etudiants.css'

function Etudiants() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('lastname')

  const filteredStudents = studentsData.filter(item => {
    const fullName = `${item.student.firstname} ${item.student.lastname}`.toLowerCase()
    const course = item.course.toLowerCase()
    return fullName.includes(searchTerm.toLowerCase()) || course.includes(searchTerm.toLowerCase())
  })

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === 'lastname') {
      return a.student.lastname.localeCompare(b.student.lastname)
    } else if (sortBy === 'grade') {
      return b.grade - a.grade
    } else if (sortBy === 'course') {
      return a.course.localeCompare(b.course)
    }
    return 0
  })

  return (
    <div className="etudiants-page">
      <h1 className="page-title">Liste des Étudiants</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Rechercher un étudiant ou cours..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
          <option value="lastname">Trier par Nom</option>
          <option value="grade">Trier par Note</option>
          <option value="course">Trier par Cours</option>
        </select>
      </div>

      <div className="students-count">
        {sortedStudents.length} étudiant(s) trouvé(s)
      </div>

      <div className="students-grid">
        {sortedStudents.map((item) => (
          <div key={item.unique_id} className="student-item">
            <div className="student-header">
              <h3>{item.student.firstname} {item.student.lastname}</h3>
              <span className={`grade-badge ${item.grade >= 70 ? 'pass' : 'fail'}`}>
                {item.grade}/100
              </span>
            </div>
            <div className="student-details">
              <p><strong>ID:</strong> {item.student.id}</p>
              <p><strong>Cours:</strong> {item.course}</p>
              <p><strong>Date:</strong> {item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Etudiants
