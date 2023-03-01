import axios from 'axios';

const client = axios.create();

/*
//APi 주소를 다른 곳으로 사용
client.defaults.baseURL = 'https://external-api-server.com'

//헤더 설정
client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

//인터셉터
axios.intercepter.response.use({\
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
})
*/
export default client;
