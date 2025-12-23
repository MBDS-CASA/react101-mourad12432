import Header from '../Header'
import MainContent from '../MainContent'
import StudentCard from '../StudentCard'

function Home() {
  return (
    <>
      <Header />
      <MainContent />
      <StudentCard />
      <div className="card">
        <p>
          Bienvenue sur la page d'accueil ! Utilisez le menu pour naviguer.
        </p>
      </div>
    </>
  )
}

export default Home
