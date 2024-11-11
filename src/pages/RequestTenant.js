import React, { useState } from 'react';

const RequestTenant = () => {
  const [licenseType, setLicenseType] = useState('');
  const [numLicenses, setNumLicenses] = useState(0);

  const handleLicenseChange = (event) => {
    setLicenseType(event.target.value);
  };

  const renderLicenseFields = () => {
    if (licenseType === 'Copilot Only') {
      return (
        <div>
          <label htmlFor="numLicenses">Number of Licenses:</label>
          <input
            type="number"
            className="form-control"
            id="numLicenses"
            value={numLicenses}
            onChange={(e) => setNumLicenses(e.target.value)}
          />
        </div>
      );
    } else if (licenseType === 'Viva Insights Only' || licenseType === 'Viva Insights with Copilot') {
      return (
        <div>
          <label htmlFor="numLicenses">Number of Licenses:</label>
          <input
            type="number"
            className="form-control"
            id="numLicenses"
            value={numLicenses}
            onChange={(e) => setNumLicenses(e.target.value)}
          />
        </div>
      );
    } else if (licenseType === 'M365 Business Premium') {
      return (
        <div>
          <label htmlFor="numLicenses">Number of Licenses:</label>
          <input
            type="number"
            className="form-control"
            id="numLicenses"
            value={numLicenses}
            onChange={(e) => setNumLicenses(e.target.value)}
          />
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Request New Tenant</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="mb-3">
          <label htmlFor="tenantEnv" className="form-label">Tenant Environment</label>
          <select className="form-control" id="tenantEnv">
            <option value="PROD">PROD</option>
            <option value="GCC">GCC</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="licenseType" className="form-label">License Type</label>
          <select
            className="form-control"
            id="licenseType"
            onChange={handleLicenseChange}
          >
            <option value="">Select License Type</option>
            <option value="Copilot Only">Copilot Only</option>
            <option value="Viva Insights Only">Viva Insights Only</option>
            <option value="Viva Insights with Copilot">Viva Insights with Copilot</option>
            <option value="M365 Business Premium">M365 Business Premium</option>
          </select>
        </div>

        {renderLicenseFields()}

        <div className="mb-3">
          <label htmlFor="additionalUsers" className="form-label">Additional Users to Create</label>
          <input type="number" className="form-control" id="additionalUsers" />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="dataHydration" />
          <label className="form-check-label" htmlFor="dataHydration">Data Hydration (True/False)</label>
        </div>

        <button type="submit" className="btn btn-primary">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestTenant;
