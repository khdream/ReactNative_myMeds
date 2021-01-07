import {http} from '@services';
import {constant, common} from '@utils';

const getProfile = (access_token, onSuccess, onFail) => {
    try {
        let url = constant.Graph_api_getMe;
        let header = {
            Authorization : 'Bearer ' + access_token
        }
        http.doGet(url, header, onSuccess, onFail); 
    } 
    catch (error) {
        console.log(error)
        onFail(error);
    }
};

export default {
    getProfile, 
}; 
