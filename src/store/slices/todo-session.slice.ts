import { createSlice, nanoid } from "@reduxjs/toolkit";

type TodoSessionStateType = {
  id: string;
  title: string;
  tag: string | null;

  sessionTimes: {
    remaining: number;
    value: number;
  }[];
};

const initialState: TodoSessionStateType[] = [
  {
    id: nanoid(),
    title: "",
    tag: null,
    sessionTimes: [],
  },
];

export const TodoSessionSlice = createSlice({
  name: "todo-session",
  initialState,
  reducers: {},
});
