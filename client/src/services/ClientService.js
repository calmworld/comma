import http from '../http-common';

const getAll = () => {
    return http.get('/clients');
};

const create = (data) => {
    return http.post('/clients', data);
}


const ClientService = {
    getAll,
    create
}

export default ClientService;