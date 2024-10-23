import { SidebarTrigger } from "../ui/sidebar";
import { ModeToggle } from "./mode-toggle";

export function AppHeader() {
  return (
    <header className="w-full border-b p-6 sticky top-0 bg-sidebar">
      <div className="flex gap-2">
        <SidebarTrigger />
        <ModeToggle />
      </div>
    </header>
  );
}
