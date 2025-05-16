"use client";

import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase-config";

export default function CreateTask({ triggerRefresh }) {
  const [taskName, setTaskName] = useState("");

  const createTask = async (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      const getCollectionData = collection(db, "tasks");
      await addDoc(getCollectionData, { name: taskName });
      setTaskName("");
      triggerRefresh();
    }
  };

  return (
    <>
      <form onSubmit={createTask}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
        />
        <button type="submit">Create Task</button>
      </form>
    </>
  );
}
