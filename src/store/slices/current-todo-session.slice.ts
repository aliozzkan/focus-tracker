import { createSlice } from "@reduxjs/toolkit";

export const REMANING_SESSIONS = [
  {
    label: "25 minutes",
    value: 60 * 25,
  },
  {
    label: "45 minutes",
    value: 60 * 45,
  },
  {
    label: "60 minutes",
    value: 60 * 60,
  },
];

export type CurrentTodoSessionStateType = {
  remainingSeconds: number;
  passingSeconds: number;
  intervalState: NodeJS.Timeout | undefined;
};

export const initialState: CurrentTodoSessionStateType = {
  remainingSeconds: REMANING_SESSIONS[0].value,
  passingSeconds: 0,
  intervalState: undefined,
};

const currentTodoSessionSlice = createSlice({
  name: "current-todo-session",
  initialState,
  reducers: {
    updatePassingSeconds: (state) => {
      state.passingSeconds += 1;
    },
    setTimerInterval: (state, action) => {
      state.intervalState = action.payload;
    },
    pauseTimer: (state) => {
      clearInterval(state.intervalState);
      state.intervalState = undefined;
    },
    resetTimer: (state) => {
      clearInterval(state.intervalState);
      state.intervalState = undefined;
      state.passingSeconds = 0;
    },
    clearIntervalState: (state) => {
      state.intervalState = undefined;
    },
    setRemainingSeconds: (state, action) => {
      state.remainingSeconds = action.payload;
    },
  },
});

export const currentTodoSessionReducer = currentTodoSessionSlice.reducer;
export const currentTodoSessionActions = currentTodoSessionSlice.actions;
