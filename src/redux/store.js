import { configureStore } from "@reduxjs/toolkit";

import surveyReducer from "./slices/SurveySlice";

const survey = configureStore({
  reducer: {
    surveyState: surveyReducer,
  },
});

export default survey;
