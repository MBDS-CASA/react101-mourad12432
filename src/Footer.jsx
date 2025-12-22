import './Footer.css'

function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {annee} - Mourad.Bounaim, Tous droits réservés.</p>
    </footer>
  )
}

export default Footer
