import axios from 'axios';

export const API = {
    GET: async(url: string) => {
        const response = await axios.get(url);
        return response;
    }
};
