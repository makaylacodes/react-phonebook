import axios from 'axios';

const baseUrl = "https://fs-open-backend.onrender.com/api/persons";

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
};

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject);
    return request.then(response => response.data);
};

const deleteOne = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => console.log("Successfully deleted"));
};
 
const updateOne = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then(response => response.data);
};

export default { getAll, create, deleteOne, updateOne};