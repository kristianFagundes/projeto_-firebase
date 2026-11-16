import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tela from './Tela';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router';
import Config from './views/Config';
import { AuthProvider } from './AuthContext';
import Login from './views/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    {/* AuthProvider envolvendo a aplicação permite que os componentes da aplicação consultem o estado de autenticação por meio do useAuth(). 
       */}

    <BrowserRouter>
      <React.StrictMode>
        {/* O React.StrictMode é uma ferramenta de desenvolvimento usada para identificar potenciais problemas, bugs e más práticas em componentes de uma aplicação React. */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Tela />} />
          <Route path="/insert" element={<Config isEditting={false} />} />
          <Route path="/config/:id" element={<Config isEditting={true} />} />

        </Routes>
      </React.StrictMode>
    </BrowserRouter>

  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
