import React from 'react';

const UpdateTenant = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <h1>Update Existing Tenant</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>

          <div className="mb-3">
            <label htmlFor="alias" className="form-label">Alias</label>
            <input type="text" className="form-control" id="alias" />
          </div>

          <div className="mb-3">
            <label htmlFor="updateRequest" className="form-label">Update Request</label>
            <textarea className="form-control" id="updateRequest" rows="3"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit Update Request</button>
        </form>
      </div>

      <div className="col-md-8">
        <h4>Power BI Report:</h4>
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

export default UpdateTenant;
