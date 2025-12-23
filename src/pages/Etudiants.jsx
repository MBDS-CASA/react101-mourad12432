import { useState } from 'react'
import studentsData from '../../data.json'
import './Etudiants.css'

function Etudiants() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('lastname')
  const [selectedStudent, setSelectedStudent] = useState(null)

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

  const handleStudentClick = (student) => {
    setSelectedStudent(student)
  }

  const closePopup = () => {
    setSelectedStudent(null)
  }

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
          <div
            key={item.unique_id}
            className="student-item"
            onClick={() => handleStudentClick(item)}
          >
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

      {selectedStudent && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>✕</button>

            <div className="popup-header">
              <h2>{selectedStudent.student.firstname} {selectedStudent.student.lastname}</h2>
              <span className={`grade-badge-large ${selectedStudent.grade >= 70 ? 'pass' : 'fail'}`}>
                {selectedStudent.grade}/100
              </span>
            </div>

            <div className="popup-body">
              <div className="info-section">
                <h3>Informations Personnelles</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Prénom</span>
                    <span className="info-value">{selectedStudent.student.firstname}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Nom</span>
                    <span className="info-value">{selectedStudent.student.lastname}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">ID Étudiant</span>
                    <span className="info-value">{selectedStudent.student.id}</span>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h3>Informations Académiques</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Cours</span>
                    <span className="info-value">{selectedStudent.course}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Date d'évaluation</span>
                    <span className="info-value">{selectedStudent.date}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Note obtenue</span>
                    <span className="info-value highlight">{selectedStudent.grade}/100</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Statut</span>
                    <span className={`info-value ${selectedStudent.grade >= 70 ? 'success' : 'danger'}`}>
                      {selectedStudent.grade >= 70 ? 'Réussi ✓' : 'Échoué ✗'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h3>Statistiques</h3>
                <div className="progress-section">
                  <div className="progress-label">
                    <span>Progression</span>
                    <span>{selectedStudent.grade}%</span>
                  </div>
                  <div className="progress-bar-popup">
                    <div
                      className="progress-fill-popup"
                      style={{ width: `${selectedStudent.grade}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Etudiants
