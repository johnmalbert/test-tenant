import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import RequestTenant from './pages/RequestTenant';
import UpdateTenant from './pages/UpdateTenant';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" style={{ marginLeft: '10px' }}  href="/">(POC) Tenant Management (POC)</a>
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">Dashboard</a>
            <a className="nav-item nav-link" href="/request-tenant">Request New Tenant</a>
            <a className="nav-item nav-link" href="/update-tenant">Update Existing Tenant</a>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/request-tenant" element={<RequestTenant />} />
            <Route path="/update-tenant" element={<UpdateTenant />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
