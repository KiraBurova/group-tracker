import Api from './Api';

export default {
    index (credentials) {
        return Api().get('bands');
    },
    post (band) {
        return Api().post('bands', band);
    },
    show (bandId) {
        return Api().get(`bands/${bandId}`);
    },
    put (band) {
        return Api().put(`bands/${band.id}`, band);
    }
};
