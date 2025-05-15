'use client';

import React, { useState } from "react";
import TasksComponent from "@/components/fetch-data";
import CreateTask from "@/components/create-data";

export default function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const triggerRefresh = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <>
      <TasksComponent refreshTrigger={refreshTrigger} />
      <CreateTask triggerRefresh={triggerRefresh} />
    </>
  );
}
