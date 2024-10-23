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
import { PauseIcon, PencilIcon, PlayIcon, TimerIcon, TimerResetIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

const REAMINING_SECONDS = [
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

function SessionTimer() {
  const [remainingSecondsState, setRemainingSecondsState] = useState(
    REAMINING_SECONDS[0].value
  );
  const [passingSecondsState, setPassingSecondsState] = useState(0);
  const [intervalState, setIntervalState] = useState<NodeJS.Timeout>();

  function updatePassingSeconds() {
    setPassingSecondsState((prev) => prev + 1);
  }

  function startTimer() {
    const interval = setInterval(updatePassingSeconds, 1000);
    setIntervalState(interval);
    return interval;
  }

  function pauseTimer() {
    clearInterval(intervalState);
    setIntervalState(undefined);
  }

  function resetTimer() {
    clearInterval(intervalState);
    setIntervalState(undefined);
    setPassingSecondsState(0);
  }

  const time = remainingSecondsState - passingSecondsState;
  const mins = Math.floor(time / 60);

  useEffect(() => {
    if (passingSecondsState >= remainingSecondsState) {
      clearInterval(intervalState);
      setIntervalState(undefined);
    }
  }, [passingSecondsState]);

  const isPlaying = !!intervalState;
  const isIdle = !isPlaying && passingSecondsState === 0;
  const isPaused = !isPlaying && !isIdle;

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
              remaning={remainingSecondsState}
              value={passingSecondsState}
            />
            <div className="mb-10">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="text-3xl font-semibold disabled:opacity-100"
                    variant="ghost"
                    disabled={!isIdle}
                  >
                    {mins}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>Times</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {REAMINING_SECONDS.map((item) => (
                    <DropdownMenuItem
                      key={item.label}
                      onClick={() => {
                        setRemainingSecondsState(item.value);
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

export default SessionTimer;
