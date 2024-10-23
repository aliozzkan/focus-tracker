import { AppHeader } from "@/components/shareds/app-header";
import { AppSidebarV01 } from "@/components/shareds/app-header-v1/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

export default function MainLayout(props: PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebarV01 />
      <main className="h-[3000px] flex-grow">
        <AppHeader />
        <div className="p-10">{props.children}</div>
      </main>
    </SidebarProvider>
  );
}
