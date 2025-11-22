/** @format */

import { configureStore } from "@reduxjs/toolkit";
import changeLanguageReducer from "../features/language/languageSlice";
import windowReducer from "../features/windows/windowSlice";

export const store = configureStore({
	reducer: {
		language: changeLanguageReducer,
		windows: windowReducer,
	},
});
