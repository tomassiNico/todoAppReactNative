import axios from 'axios';

export const fetchTodosData = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
}