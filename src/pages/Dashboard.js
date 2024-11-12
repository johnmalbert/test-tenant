import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="mt-4">
        <div className="header-container">
          <h4>Tenant Management Dashboard</h4>
          <span className="welcome-text">Welcome, UserName</span>
        </div>
        <h5>
          Use this portal as a tool for test tenant creation and maintenance. If
          you have any questions, please reach out to the Launch team
          (insights-fulfillment@microsoft.com)
        </h5>
        <iframe
          title="PowerBI Report"
          width="100%"
          height="500px"
          src="https://app.powerbi.com/reportEmbed?reportId=a436db24-a94f-4b18-a71e-fd5888b92541&autoAuth=true&ctid=fbe4560f-c07e-4c03-9943-e49aa26f8c94"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
