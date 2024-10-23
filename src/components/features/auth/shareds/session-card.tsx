/* eslint-disable @next/next/no-img-element */
import { auth } from "@/auth";

export async function SessionCard() {
  const session = await auth();
  if (!session?.user) return null;

  return (
    <div className="flex justify-center items-center gap-4 px-4 py-2 border rounded">
      <img
        className="w-12 h-12 rounded-2xl border border-primary"
        src={session.user.image!}
        alt={session.user.name!}
      />
      <div className="flex flex-col items-start justify-start">
        <span className="font-medium text-xl">{session.user.name}</span>
        
      </div>
    </div>
  );
}
