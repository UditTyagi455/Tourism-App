/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store';
import { initializeApp } from '@react-native-firebase/app';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmCjYgMaBFazFgPMiycleZLoeeLZROd7s",
  authDomain: "localhost",
  projectId: 'tourism-ap',
  storageBucket: "tourism-ap.appspot.com",
  appId: '1:902284174007:ios:bfc89accd3eb425f25a332',
  messagingSenderId: "902284174007",
  databaseURL: "https://console.firebase.google.com/project/tourism-ap/database/tourism-ap-default-rtdb/data/~2F"
};

const AppStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => AppStore);
