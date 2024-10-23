import { combineReducers, configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>; // korkma component üzerindeki state tipini belirtiyoruz
export type AppThunkDispatch = typeof store.dispatch; //
