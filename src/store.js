import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';

const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: storage,
    // Whitelist (Save Specific Reducers)
    whitelist: [
      'fetchedData',
      'loggedUser'
    ],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [
      'isProgressBar', 
      'isUserRegistered'
    ],
  };

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(ReduxThunk)
)

let persistor = persistStore(store);

export {
    store,
    persistor
};