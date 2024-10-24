/* eslint-disable react-hooks/exhaustive-deps */
import {
  currentTodoSessionActions,
  CurrentTodoSessionStateType,
} from "@/store/slices/current-todo-session.slice";
import { IRootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useSessionTimer = () => {
  const { intervalState, passingSeconds, remainingSeconds } = useSelector<
    IRootState,
    CurrentTodoSessionStateType
  >((store) => store.currentTodoSession);

  const dispatch = useDispatch();

  const time = remainingSeconds - passingSeconds;
  const mins = Math.floor(time / 60);
  const currentTime = `${mins}:${time % 60 < 10 ? `0${time % 60}` : time % 60}`;

  function startTimer() {
    const interval = setInterval(() => {
      dispatch(currentTodoSessionActions.updatePassingSeconds());
    }, 1000);
    dispatch(currentTodoSessionActions.setTimerInterval(interval));
  }

  function pauseTimer() {
    dispatch(currentTodoSessionActions.pauseTimer());
  }

  function resetTimer() {
    dispatch(currentTodoSessionActions.resetTimer());
  }

  function changeRemainingSeconds(value: number) {
    dispatch(currentTodoSessionActions.setRemainingSeconds(value));
  }

  useEffect(() => {
    if (passingSeconds >= remainingSeconds) {
      clearInterval(intervalState);
      dispatch(currentTodoSessionActions.clearIntervalState());
    }
  }, [passingSeconds]);

  const isPlaying = !!intervalState;
  const isIdle = !isPlaying && passingSeconds === 0;
  const isPaused = !isPlaying && !isIdle;

  useEffect(() => {
    if (isPlaying) {
      document.title = `(${currentTime}) Focus Sessions`;
    }
    if (isIdle) {
      document.title = "Focus Sessions";
    }
    if (isPaused) {
      document.title = `Paused - Focus Sessions`;
    }
  }, [isPlaying, isIdle, isPaused, currentTime]);

  return {
    passingSeconds,
    remainingSeconds,
    startTimer,
    pauseTimer,
    resetTimer,
    changeRemainingSeconds,
    isPlaying,
    isIdle,
    isPaused,
    currentTime,
  };
};
