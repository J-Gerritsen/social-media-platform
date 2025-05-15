'use client';

import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase-config";

export default function CreateTask() {
  const [taskName, setTaskName] = useState("");

  const createTask = async (e) => {
    e.preventDefault();
    const getCollectionData = collection(db, "tasks");
    await addDoc(getCollectionData, { name: taskName });
    setTaskName("");
  };

  return (
    <form onSubmit={createTask}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <button type="submit">Create Task</button>
    </form>
  );
}