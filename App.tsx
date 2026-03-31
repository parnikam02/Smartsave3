
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import WalletPage from './pages/Wallet';
import AddTransaction from './pages/AddTransaction';
import Advisor from './pages/Advisor';
import Lifestyle from './pages/Lifestyle';
import Bills from './pages/Bills';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import AdminDashboard from './pages/AdminDashboard';
import { seedUsers, getCurrentUser } from './services/storageService';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const user = getCurrentUser();
    const location = useLocation();

    if (!user || !user.isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Layout>{children}</Layout>;
};

const App: React.FC = () => {
  useEffect(() => {
    seedUsers();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<AdminDashboard />} />
        
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
        <Route path="/wallet" element={<ProtectedRoute><WalletPage /></ProtectedRoute>} />
        <Route path="/add" element={<ProtectedRoute><AddTransaction /></ProtectedRoute>} />
        <Route path="/advisor" element={<ProtectedRoute><Advisor /></ProtectedRoute>} />
        <Route path="/lifestyle" element={<ProtectedRoute><Lifestyle /></ProtectedRoute>} />
        <Route path="/bills" element={<ProtectedRoute><Bills /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
