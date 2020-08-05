import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos'
});

export const musicAPI = {
    getAlbumInfo() {
        return instance.get();
    }
};


