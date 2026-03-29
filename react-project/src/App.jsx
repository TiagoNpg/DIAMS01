import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import GaleriaPage from './pages/GaleriaPage'
import InqueritoPage from './pages/InqueritoPage'
import ResultadosPage from './pages/ResultadosPage'
import VoluntariadoPage from './pages/VoluntariadoPage.jsx'
import BilhetesPage from './pages/BilhetesPage.jsx'
import SuccessPage from './components/SuccessPage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/inquerito" element={<InqueritoPage />} />
        <Route path="/resultados" element={<ResultadosPage />} />
        <Route path="/voluntariado" element={<VoluntariadoPage />} />
        <Route path="/bilhetes" element={<BilhetesPage />} />
        <Route
          path="/sucesso-voluntariado"
          element={<SuccessPage message="Obrigado pela tua candidatura!" />}
        />
        <Route
          path="/sucesso-bilhetes"
          element={<SuccessPage message="Compra realizada com sucesso!" />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
