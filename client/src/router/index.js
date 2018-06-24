import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Bands from '@/components/Bands';
import AddBand from '@/components/AddBand';
import Band from '@/components/Band';
import EditBand from '@/components/EditBand';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'root',
            component: App
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/bands',
            name: 'bands',
            component: Bands
        },
        {
            path: '/bands/add',
            name: 'bands-add',
            component: AddBand
        },
        {
            path: '/bands/:bandId',
            name: 'band',
            component: Band
        },
        {
            path: '/bands/:bandId/edit',
            name: 'band-edit',
            component: EditBand
        }
    ]
});
