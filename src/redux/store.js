import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistCombineReducers,
  persistReducer,
} from "redux-persist";

import surveyReducer from "./slices/SurveySlice";
import todoReducer from "./slices/TodoSlice";

const storage = {
  getItem: (key) => {
    return Promise.resolve(window.localStorage.getItem(key));
  },
  setItem: (key, value) => {
    return Promise.resolve(window.localStorage.setItem(key, value));
  },
  removeItem: (key) => {
    return Promise.resolve(window.localStorage.removeItem(key));
  },
};

const persistSurveyConfig = {
  key: "survey",
  storage,
  whitelist: ["survey"]
}

const persistTodoConfig = {
  key: "todo",
  storage,
  whitelist: ["todo"],
};

const store = configureStore({
  reducer: persistCombineReducers(persistSurveyConfig, {
    surveyState: surveyReducer,
    todoState: persistReducer(persistTodoConfig, todoReducer),
  }),
});

export const persistor = persistStore(store);
export default store;
