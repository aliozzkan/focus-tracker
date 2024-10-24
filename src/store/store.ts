import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currentTodoSessionReducer } from "./slices/current-todo-session.slice";
const rootReducer = combineReducers({
  currentTodoSession: currentTodoSessionReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
