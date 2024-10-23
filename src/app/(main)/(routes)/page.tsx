import { auth } from "@/auth";
import SessionTimer from "@/components/features/session/session-timer";
import { Heading } from "@/components/ui/heading";

export default async function Home() {
  const session = await auth();
  if (!session) {
    return <div>UnAuthorized</div>;
  }

  return (
    <div className="space-y-10">
      <Heading size="lg">Dashboard</Heading>
      <div className="grid grid-cols-3">
        <SessionTimer />
      </div>
    </div>
  );
}
