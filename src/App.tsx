import React from 'react';
import './App.css';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './services/contexts/AuthContext';
import { DashProvider } from './services/contexts/DashContext';

const App:React.FC = () => {
  return (
    <AuthProvider>
      <DashProvider>
        <AppRouter />
      </DashProvider>
    </AuthProvider>
  );
}

export default App;
