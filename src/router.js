import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Teams from './components/teams/Teams';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/teams', component: Teams }
    ]
});