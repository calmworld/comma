import React, { useState } from 'react';
import ClientDataService from '../services/ClientService';
import { Link } from "react-router-dom";

const AddClient = () => {
    const initialClientState = {
        date: "",
        client: "",
        project: "",
        project_code: "",
        hours: 0,
        billable: false,
        first_name: "", 
        last_name: "", 
        billable_rate: 0
    };

    const [client, setClient] = useState(initialClientState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setClient({ ...client, [name]: value });
    };

    const saveClient = () => {
        var data = {
            date: client.date,
            client: client.client,
            project: client.project,
            project_code: client.project_code,
            hours: client.hours,
            billable: client.billable,
            first_name: client.first_name, 
            last_name: client.last_name, 
            billable_rate: client.billable_rate
        };

        ClientDataService.create(data)
            .then(response => {
                setClient({
                    date: response.data.date,
                    client: response.data.client,
                    project: response.data.project,
                    project_code: response.data.project_code,
                    hours: response.data.hours,
                    billable: response.data.billable,
                    first_name: response.data.first_name, 
                    last_name: response.data.last_name, 
                    billable_rate: response.data.billable_rate
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const newClient = () => {
        setClient(initialClientState);
        setSubmitted(false);
    };
    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>Submission Successful!</h4>
                    <button className="btn btn-success" onClick={newClient}>
                        Add Another Client
                    </button><br/>
                    <br />
                    <Link to={"/clients"} className="btn btn-primary">
                        Return to All Clients
                    </Link>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input
                            type="text"
                            className="form-control"
                            id="date"
                            value={client.date}
                            onChange={handleInputChange}
                            name="date"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="client">Client</label>
                        <input
                            type="text"
                            className="form-control"
                            id="client"
                            value={client.client}
                            onChange={handleInputChange}
                            name="client"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="project">Project</label>
                        <input
                            type="text"
                            className="form-control"
                            id="project"
                            value={client.project}
                            onChange={handleInputChange}
                            name="project"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="project_code">Project Code</label>
                        <input
                            type="text"
                            className="form-control"
                            id="project_code"
                            value={client.project_code}
                            onChange={handleInputChange}
                            name="project_code"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hours">Hours</label>
                        <input
                            type="text"
                            className="form-control"
                            id="hours"
                            value={client.hours}
                            onChange={handleInputChange}
                            name="hours"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bilable">Billable</label>
                        <input
                            type="text"
                            className="form-control"
                            id="bilable"
                            value={client.bilable}
                            onChange={handleInputChange}
                            name="bilable"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="first_name"
                            value={client.first_name}
                            onChange={handleInputChange}
                            name="first_name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            value={client.last_name}
                            onChange={handleInputChange}
                            name="last_name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="billable_rate">Billable Rate</label>
                        <input
                            type="text"
                            className="form-control"
                            id="billable_rate"
                            value={client.billable_rate}
                            onChange={handleInputChange}
                            name="billable_rate"
                        />
                    </div>

                    <button onClick={saveClient} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddClient;