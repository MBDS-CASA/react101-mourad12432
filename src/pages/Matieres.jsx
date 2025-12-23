import { useState } from 'react'
import studentsData from '../../data.json'
import './Matieres.css'

function Matieres() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const courseData = {}

  studentsData.forEach(item => {
    if (!courseData[item.course]) {
      courseData[item.course] = {
        students: [],
        grades: [],
        studentDetails: []
      }
    }
    courseData[item.course].students.push(item.student)
    courseData[item.course].grades.push(item.grade)
    courseData[item.course].studentDetails.push({
      ...item.student,
      grade: item.grade,
      date: item.date
    })
  })

  const courses = Object.keys(courseData).map(courseName => {
    const grades = courseData[courseName].grades
    const students = courseData[courseName].students
    const average = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2)
    const passRate = ((grades.filter(g => g >= 50).length / grades.length) * 100).toFixed(1)

    return {
      name: courseName,
      studentCount: students.length,
      average,
      passRate,
      maxGrade: Math.max(...grades),
      minGrade: Math.min(...grades),
      studentDetails: courseData[courseName].studentDetails
    }
  }).sort((a, b) => a.name.localeCompare(b.name))

  const handleCourseClick = (course) => {
    setSelectedCourse(course)
  }

  const closePopup = () => {
    setSelectedCourse(null)
  }

  return (
    <div className="matieres-page">
      <h1 className="page-title">Liste des Matières</h1>

      <div className="courses-summary">
        <p>Total de <strong>{courses.length}</strong> matières enseignées</p>
      </div>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div
            key={index}
            className="matiere-card"
            onClick={() => handleCourseClick(course)}
          >
            <div className="matiere-header">
              <h2>{course.name}</h2>
              <span className="student-badge">{course.studentCount} étudiants</span>
            </div>

            <div className="matiere-stats">
              <div className="stat-row">
                <span className="stat-label">Moyenne</span>
                <span className="stat-value highlight">{course.average}/100</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Taux de réussite</span>
                <span className="stat-value success">{course.passRate}%</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Note max</span>
                <span className="stat-value">{course.maxGrade}/100</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Note min</span>
                <span className="stat-value">{course.minGrade}/100</span>
              </div>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${course.passRate}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>✕</button>

            <div className="popup-header">
              <h2>{selectedCourse.name}</h2>
              <span className="student-badge-large">
                {selectedCourse.studentCount} étudiants
              </span>
            </div>

            <div className="popup-body">
              <div className="info-section">
                <h3>Statistiques Générales</h3>
                <div className="stats-grid">
                  <div className="stat-card-popup">
                    <span className="stat-label-popup">Moyenne</span>
                    <span className="stat-value-popup highlight">{selectedCourse.average}/100</span>
                  </div>
                  <div className="stat-card-popup">
                    <span className="stat-label-popup">Taux de réussite</span>
                    <span className="stat-value-popup success">{selectedCourse.passRate}%</span>
                  </div>
                  <div className="stat-card-popup">
                    <span className="stat-label-popup">Note Max</span>
                    <span className="stat-value-popup">{selectedCourse.maxGrade}/100</span>
                  </div>
                  <div className="stat-card-popup">
                    <span className="stat-label-popup">Note Min</span>
                    <span className="stat-value-popup">{selectedCourse.minGrade}/100</span>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h3>Liste des Étudiants ({selectedCourse.studentCount})</h3>
                <div className="students-list">
                  {selectedCourse.studentDetails
                    .sort((a, b) => b.grade - a.grade)
                    .map((student, idx) => (
                      <div key={idx} className="student-row">
                        <div className="student-info-popup">
                          <span className="student-name">
                            {student.firstname} {student.lastname}
                          </span>
                          <span className="student-id">ID: {student.id}</span>
                        </div>
                        <div className="student-grade-info">
                          <span className="student-date">{student.date}</span>
                          <span className={`grade-badge-small ${student.grade >= 50 ? 'pass' : 'fail'}`}>
                            {student.grade}/100
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Matieres
