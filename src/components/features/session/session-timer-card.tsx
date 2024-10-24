/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { RadialChartGrid } from "@/components/charts/radial-chart-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import {
  REMANING_SESSIONS
} from "@/store/slices/current-todo-session.slice";
import {
  PauseIcon,
  PencilIcon,
  PlayIcon,
  TimerIcon,
  TimerResetIcon,
  XIcon,
} from "lucide-react";
import { useSessionTimer } from "./use-session-timer";

function SessionTimerCard() {
  const {
    changeRemainingSeconds,
    currentTime,
    isIdle,
    isPaused,
    isPlaying,
    passingSeconds,
    pauseTimer,
    remainingSeconds,
    resetTimer,
    startTimer,
  } = useSessionTimer();

  return (
    <div>
      <div>
        <Card className="h-full">
          <CardContent className="pt-4 text-center">
            <div>
              <Heading size="sm">Whats Your Focus?</Heading>
              <div className="relative">
                <PencilIcon className="absolute top-1/2 right-4 transform -translate-y-1/2 size-4" />
                <Input placeholder="Regular Todo" className="mt-2" />
              </div>
            </div>
            <RadialChartGrid
              remaning={remainingSeconds}
              value={passingSeconds}
            />
            <div className="mb-10">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="text-3xl font-semibold disabled:opacity-100"
                    variant="ghost"
                    disabled={!isIdle}
                  >
                    {currentTime}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>Times</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {REMANING_SESSIONS.map((item) => (
                    <DropdownMenuItem
                      key={item.label}
                      onClick={() => {
                        changeRemainingSeconds(item.value);
                      }}
                    >
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {isIdle && (
              <Button
                onClick={() => {
                  startTimer();
                }}
              >
                Start Focus <TimerIcon />
              </Button>
            )}
            {isPaused && (
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={() => {
                    startTimer();
                  }}
                >
                  Resume <PlayIcon />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    resetTimer();
                  }}
                >
                  Stop <XIcon />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    resetTimer();
                  }}
                >
                  Cancel <TimerResetIcon />
                </Button>
              </div>
            )}
            {isPlaying && (
              <Button
                variant="outline"
                onClick={() => {
                  pauseTimer();
                }}
              >
                Pause <PauseIcon />
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SessionTimerCard;
