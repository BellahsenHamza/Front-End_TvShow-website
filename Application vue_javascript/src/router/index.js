import About from '@/views/About.vue'
import DetailsEpisode from '@/views/DetailsEpisode.vue'
import DetailsTvShow from '@/views/DetailsTvShow.vue'
import EpisodeList from '@/views/EpisodeList.vue'
import FavoriteShows from '@/views/FavoriteShows.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
import SignUp from '@/views/SignUp.vue'
import ViewEpisode from '@/views/ViewEpisode.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/DetailsTvShow/:TvShowId',
        name: 'DetailsTvShow',
        component: DetailsTvShow,
        props: true
    },
    {
        path: '/EpisodeList/:SeasonId',
        name: 'EpisodeList',
        component: EpisodeList,
        props: true
    },
    {
        path: '/DetailsEpisode/:EpisodeId',
        name: 'DetailsEpisode',
        component: DetailsEpisode,
        props: true
    },
    {
        path: '/ViewEpisode/:EpisodeId',
        name: 'ViewEpisode',
        component: ViewEpisode,
        props: true
    },
    {
        path: '/FavoriteShows',
        name: 'FavoriteShows',
        component: FavoriteShows,
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: Profile,
    },
];

const router = new VueRouter({
    routes
});

export default router;