import React, { useState } from 'react';
import ClientDataService from '../services/ClientService';

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
    }
}