import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome, UserName</h1>
      <div className="mt-4">
        <h4>Test Tenant Tracker</h4>
        <iframe
          title="PowerBI Report"
          width="100%"
          height="500px"
          src="https://app.powerbi.com/reportEmbed?reportId=2a73b019-d20a-437d-a278-7356eba94a1e&autoAuth=true&ctid=fbe4560f-c07e-4c03-9943-e49aa26f8c94"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
