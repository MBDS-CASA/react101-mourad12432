import studentsData from '../../data.json'
import './Notes.css'

function Notes() {
  const allGrades = studentsData.map(item => item.grade)
  const averageGrade = (allGrades.reduce((a, b) => a + b, 0) / allGrades.length).toFixed(2)
  const maxGrade = Math.max(...allGrades)
  const minGrade = Math.min(...allGrades)

  const gradeByCourse = {}
  studentsData.forEach(item => {
    if (!gradeByCourse[item.course]) {
      gradeByCourse[item.course] = []
    }
    gradeByCourse[item.course].push(item.grade)
  })

  const courseStats = Object.keys(gradeByCourse).map(course => ({
    course,
    average: (gradeByCourse[course].reduce((a, b) => a + b, 0) / gradeByCourse[course].length).toFixed(2),
    count: gradeByCourse[course].length,
    max: Math.max(...gradeByCourse[course]),
    min: Math.min(...gradeByCourse[course])
  })).sort((a, b) => b.average - a.average)

  return (
    <div className="notes-page">
      <h1 className="page-title">Statistiques des Notes</h1>

      <div className="stats-overview">
        <div className="stat-card">
          <h3>Moyenne Générale</h3>
          <p className="stat-value">{averageGrade}/100</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <h3>Note Maximale</h3>
          <p className="stat-value">{maxGrade}/100</p>
        </div>
        <div className="stat-card">
          <h3>Note Minimale</h3>
          <p className="stat-value">{minGrade}/100</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <h3>Total Étudiants</h3>
          <p className="stat-value">{studentsData.length}</p>
        </div>
      </div>

      <h2 className="section-title">Statistiques par Cours</h2>
      <div className="course-stats">
        {courseStats.map((stat, index) => (
          <div key={index} className="course-card">
            <h3>{stat.course}</h3>
            <div className="course-info">
              <div className="info-item">
                <span className="label">Moyenne:</span>
                <span className="value">{stat.average}/100</span>
              </div>
              <div className="info-item">
                <span className="label">Étudiants:</span>
                <span className="value">{stat.count}</span>
              </div>
              <div className="info-item">
                <span className="label">Max:</span>
                <span className="value success">{stat.max}</span>
              </div>
              <div className="info-item">
                <span className="label">Min:</span>
                <span className="value danger">{stat.min}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notes
