import axios from 'axios';

function getBaseUrl(url) {
    if (url == 'login' || url == 'signup' || url == 'forgot-password' 
                       || url == 'reset-password') {
        return url;
    }
    return 'api/' + url;

}

export function returnApiCallPromise(method, url, object = null, config = null) {
    setAuthorizationToken(url);
    switch (method) {
        case global.GET:
            return axios.get(getBaseUrl(url));
        case global.POST: {
            return axios.post(getBaseUrl(url), object, config);
        } case global.PUT:
            return axios.put(getBaseUrl(url), object, config);

    }
}
