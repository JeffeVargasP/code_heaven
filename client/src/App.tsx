import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CadastroPage } from './presentation/cadastro/components/cadastro';
import { LoginPage } from './presentation/login/components/login';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}