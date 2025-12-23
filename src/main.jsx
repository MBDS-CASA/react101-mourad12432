import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Etudiants from './pages/Etudiants.jsx'
import Notes from './pages/Notes.jsx'
import Matieres from './pages/Matieres.jsx'
import APropos from './pages/APropos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="etudiants" element={<Etudiants />} />
          <Route path="notes" element={<Notes />} />
          <Route path="matieres" element={<Matieres />} />
          <Route path="apropos" element={<APropos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
