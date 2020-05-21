import { applyMiddleware, createStore } from "redux";
import combinedReducers from "./reducers";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const logger = createLogger();
const middlewares = [logger];

const persistConfig = {
  key: "numbers_app",
  storage
}

const persistedReducer = persistReducer(persistConfig, combinedReducers);
const store = createStore(persistedReducer,
  applyMiddleware(...middlewares)
);
const persistor = persistStore(store);

export { default as actions } from "./actions";
export { persistor };

export default store;