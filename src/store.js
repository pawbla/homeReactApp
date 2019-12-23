import { createStore } from 'redux';
import reducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: storage,
    // Whitelist (Save Specific Reducers)
    whitelist: [
      'loggedUser'
    ],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [
    ],
  };

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);

let persistor = persistStore(store);

export {
    store,
    persistor
};