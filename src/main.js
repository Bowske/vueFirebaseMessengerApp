import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { firestorePlugin } from 'vuefire';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPaperPlane,
  faAngry,
  faImage,
  faFilm,
  faPlusCircle,
  faInfoCircle,
  faCamera,
  faPhone,
  faSearch,
  faCircle,
  faStickyNote,
  faVideo,
  faCog,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from '@fortawesome/vue-fontawesome';

library.add(
  faPaperPlane,
  faAngry,
  faImage,
  faFilm,
  faPlusCircle,
  faInfoCircle,
  faSearch,
  faVideo,
  faCog,
  faUserCircle,
  faStickyNote,
  faCircle,
  faPhone,
  faCamera
);
Vue.use(firestorePlugin);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
