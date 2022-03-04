import React from 'react';
import './App.css';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './services/contexts/AuthContext';

const App:React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
