"use client";

import { useState } from "react";
import {
  Bell,
  LayoutDashboard,
  Mail,
  Settings,
  PieChart,
  Plug,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Link, Nav } from "@/components/nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import type React from "react";

const BRAND_NAME = "IQID";

interface DashboardShellProps {
  children: React.ReactNode;
}

const INIT_LINKS_STATE: Link[] = [
  {
    title: "Interactions",
    icon: Mail,
    href: "/",
  },
  {
    title: "Analytics",
    icon: PieChart,
    href: "/analytics",
  },
  // {
  //   title: "Integrations",
  //   notificationCount: 4,
  //   icon: Plug,
  //   href: "/integrations",
  // },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function DashboardShell({ children }: DashboardShellProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [links] = useState<Link[]>(INIT_LINKS_STATE);

  

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full min-h-[100vh] max-h-[100vh] items-stretch"
      >
        <ResizablePanel
          defaultSize={20}
          collapsible={true}
          minSize={10}
          maxSize={20}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
          className={cn(
            "flex flex-col bg-background",
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <div className="flex h-[52px] items-center justify-center">
            <span
              className={cn(
                "text-xl font-bold text-purple cursor-default",
                isCollapsed ? "hidden" : "block"
              )}
            >
              {BRAND_NAME}
            </span>
          </div>
          <Nav isCollapsed={isCollapsed} links={links} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <div className="flex h-full flex-col">
            {/* <header className="flex h-[52px] items-center justify-between border-b px-6">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold text-purple">Dashboard</h1>
              </div>
              <div className="flex items-center gap-4">
                <button className="relative">
                  <Bell className="h-5 w-5 text-muted-foreground hover:text-purple" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple text-[10px] font-medium text-white">
                    3
                  </span>
                </button>
              </div>
            </header> */}
            <main className="flex-1 overflow-auto">
              <div className="container mx-auto p-6">{children}</div>
            </main>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
