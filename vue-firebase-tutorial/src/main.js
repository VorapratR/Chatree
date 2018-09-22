// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
var config = {
  apiKey: "AIzaSyAXxoHbyzPMU4eHhq77gu4p1cvPqG3ishI",
  authDomain: "my-project-webapp-b6ddb.firebaseapp.com",
  databaseURL: "https://my-project-webapp-b6ddb.firebaseio.com",
  projectId: "my-project-webapp-b6ddb",
  storageBucket: "my-project-webapp-b6ddb.appspot.com",
  messagingSenderId: "22239492242"
};
firebase.initializeApp(config);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
