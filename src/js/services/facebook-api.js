import axios from 'axios';

const getAll = (page_id, params) => {
    return axios.get(`https://graph.facebook.com/${page_id}`, {
        params
    });
}

const update = (page_id, token, params) => {
    return axios.post(`https://graph.facebook.com/${page_id}`, null, { params })
}

export const facebookApi = {
    getAll,
    update
}
