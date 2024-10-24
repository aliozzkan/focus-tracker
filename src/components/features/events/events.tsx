"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Logger } from "@/lib/logger";

function Events() {
  function handleClick() {
    Logger.logMessage({
      message: "Button Clicked on Events",
      level: "fatal",
      tag: "events-12",
    });
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Events</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={handleClick}>Click</Button>
      </CardContent>
    </Card>
  );
}

export default Events;
