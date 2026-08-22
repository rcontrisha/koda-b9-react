import { configureStore } from "@reduxjs/toolkit";

import surveyReducer from "./slices/SurveySlice";
import todoReducer from "./slices/TodoSlice"

const survey = configureStore({
  reducer: {
    surveyState: surveyReducer,
    todoState: todoReducer
  },
});

export default survey;
