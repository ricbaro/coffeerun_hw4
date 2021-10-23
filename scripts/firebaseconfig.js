(function (window) {
    'use strict';
    var App = window.App || {};

    var FirebaseConfig = {
      apiKey: "AIzaSyAPdfZxYyF_CQ4GQU1jrvDiE2aKazlT430",
      authDomain: "coffeerun-62752.firebaseapp.com",
      projectId: "coffeerun-62752",
      storageBucket: "coffeerun-62752.appspot.com",
      messagingSenderId: "18849616480",
      appId: "1:18849616480:web:6a235ae65b7cd91d8aa905",
      measurementId: "G-V1QC8PQTQ8"
    };

    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);

    window.App = App;

})(window);

  
