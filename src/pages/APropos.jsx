import './APropos.css'

function APropos() {
  return (
    <div className="apropos-page">
      <h1 className="page-title">À Propos</h1>

      <div className="about-content">
        <div className="about-card">

          <h2>Développeur</h2>
          <p className="developer-name">Mourad Bounaim</p>
          <p className="description">
            Étudiant passionné par le développement web et les technologies modernes.
          </p>
        </div>

        <div className="about-card">
          <div className="card-icon">🎓</div>
          <h2>Formation</h2>
          <p className="course-name">Introduction à React</p>
          <p className="description">
            Cette application a été développée dans le cadre de l'apprentissage de React.
          </p>
        </div>

        <div className="about-card">
          <h2>Projet</h2>
          <p className="project-name">Système de Gestion des Étudiants</p>
          <p className="description">
            Une application web pour gérer les étudiants, leurs notes et les matières.
          </p>
        </div>

        <div className="about-card">
          <h2>Technologies Utilisées</h2>
          <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">React Router</span>
            <span className="tech-badge">CSS3</span>
            <span className="tech-badge">Vite</span>
          </div>
        </div>
      </div>

      <div className="footer-info">
        <p>© 2025 - Mourad.Bounaim</p>
        <p className="version">Version 1.0.0</p>
      </div>
    </div>
  )
}

export default APropos
