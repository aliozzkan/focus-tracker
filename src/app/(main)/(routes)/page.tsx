import { auth } from "@/auth";
import Events from "@/components/features/events/events";
import SessionTimerCard from "@/components/features/session/session-timer-card";
import { Heading } from "@/components/ui/heading";

export default async function Home() {
  const session = await auth();
  if (!session) {
    return <div>UnAuthorized</div>;
  }

  return (
    <div className="space-y-10">
      <Heading size="lg">Dashboard</Heading>
      <div className="grid grid-cols-3 gap-4">
        <SessionTimerCard />
        <Events />
      </div>
    </div>
  );
}
