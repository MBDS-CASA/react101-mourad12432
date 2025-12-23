import studentsData from '../../data.json'
import './Matieres.css'

function Matieres() {
  const courseData = {}

  studentsData.forEach(item => {
    if (!courseData[item.course]) {
      courseData[item.course] = {
        students: [],
        grades: []
      }
    }
    courseData[item.course].students.push(item.student)
    courseData[item.course].grades.push(item.grade)
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
      minGrade: Math.min(...grades)
    }
  }).sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="matieres-page">
      <h1 className="page-title">Liste des Matières</h1>

      <div className="courses-summary">
        <p>Total de <strong>{courses.length}</strong> matières enseignées</p>
      </div>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="matiere-card">
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
    </div>
  )
}

export default Matieres
