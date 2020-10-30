import Vue from 'vue';
import persistentState from 'vue-persistent-state';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let initialState = {
    access_token: null
};

Vue.use(persistentState, initialState);

new Vue({
    data: function () {
        return {
            srvURL : "http://tvshowapi.sv55.cmaisonneuve.qc.ca"
        }
    },
    router,
    render: function (h) {
        return h(App);
    }
}).$mount('#app');
