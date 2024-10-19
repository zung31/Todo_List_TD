import { createRouter, createWebHistory } from 'vue-router';
import List from '../components/List.vue';
import AppWrapper from '../components/AppWraper.vue';
import SuperheroDetail from '../components/SuperheroDetail.vue';
import Detail from '../components/Detail.vue';
import SuperpowerMatcher from '../components/SuperpowerMatcher.vue';
import Auteur from '../components/Auteur.vue';

const routes = [
    { path: '/', component: AppWrapper, name: 'home' },
    { path: '/list-superheros', component: List, name: 'list' },
    { path: '/detail/:id', component: SuperheroDetail, name: 'detail' },
    { path: '/detail', component: Detail, name: 'details' },
    { path: '/superpower-matcher', component: SuperpowerMatcher, name: 'superpower-matcher' },
    { path: '/auteur', component: Auteur, name: 'auteur' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;