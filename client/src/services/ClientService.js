import http from '../http-common';

const getAll = () => {
    return http.get('/clients');
};

const create = (data) => {
    return http.post('/new', data);
}


const ClientService = {
    getAll,
    create
}

export default ClientService;