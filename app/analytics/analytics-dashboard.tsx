"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "@/app/analytics/overview";
import { RecentActivity } from "@/app/analytics/recent-activity";
import { TimeMetrics } from "@/app/analytics/time-metrics";

export function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-purple">
          Analytics
        </h2>
      </div>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger
            value="overview"
            className={`${
              activeTab === "overview"
                ? "bg-purple text-white"
                : "text-purple hover:bg-purple/10"
            } transition-colors`}
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="activity"
            className={`${
              activeTab === "activity"
                ? "bg-purple text-white"
                : "text-purple hover:bg-purple/10"
            } transition-colors`}
          >
            Activity
          </TabsTrigger>
          <TabsTrigger
            value="metrics"
            className={`${
              activeTab === "metrics"
                ? "bg-purple text-white"
                : "text-purple hover:bg-purple/10"
            } transition-colors`}
          >
            Time Metrics
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Overview />
        </TabsContent>
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-purple">Agent Activity Log</CardTitle>
              <CardDescription>
                Detailed log of recent agent actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentActivity />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="metrics" className="space-y-4">
          <TimeMetrics />
        </TabsContent>
      </Tabs>
    </div>
  );
}
