import { createSlice } from "@reduxjs/toolkit";

const initState = {
  surveyData: [],
};

const surveySlice = createSlice({
  name: "survey",
  initialState: initState,
  reducers: {
    handleSubmit: (prev, { payload }) => {
      return {
        ...prev,
        surveyData: [...prev.surveyData, payload],
      };
    },
    removeRow: (prev, { payload }) => {
      return {
        ...prev,
        surveyData: prev.surveyData.filter((data) => {
          return data.nama !== payload;
        }),
      };
    },
  },
});

export const { handleSubmit, removeRow } = surveySlice.actions;

export default surveySlice.reducer;
