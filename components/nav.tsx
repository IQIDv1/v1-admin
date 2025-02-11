"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";

export interface Link {
  title: string;
  notificationCount?: number;
  icon: LucideIcon;
  href: string;
}

interface NavProps {
  isCollapsed: boolean;
  links: Link[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const pathname = usePathname();

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) => {
          const variant = pathname === link.href ? "default" : "ghost";
          if (isCollapsed) {
            return (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      buttonVariants({
                        variant,
                        size: "icon",
                      }),
                      "h-9 w-9",
                      variant === "default" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                      variant === "default" &&
                        "bg-background text-purple hover:bg-purple hover:text-white"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.title}
                  {link.notificationCount && (
                    <span className="ml-auto text-muted-foreground">
                      {link.notificationCount}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            );
          }
          return (
            <Link
              key={index}
              href={link.href}
              className={cn(
                buttonVariants({ variant, size: "sm" }),
                variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                variant === "default" &&
                  "bg-background text-purple hover:bg-purple hover:text-white",
                "justify-start"
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.notificationCount && (
                <span
                  className={cn(
                    "ml-auto",
                    variant === "default" && "text-background dark:text-white"
                  )}
                >
                  {link.notificationCount}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
