import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome, UserName</h1>
      <div className="mt-4">
        <h4>Test Tenant Tracker</h4>
        <iframe
          title="PowerBI Report"
          width="75%"
          height="500px"
          src="https://app.powerbi.com/reportEmbed?reportId=a436db24-a94f-4b18-a71e-fd5888b92541&autoAuth=true&ctid=fbe4560f-c07e-4c03-9943-e49aa26f8c94"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
