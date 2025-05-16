"use client";

import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase-config";

export default function UpdateTaskComponent({ taskId, triggerRefresh }) {
  const [newTaskName, setNewTaskName] = useState("");

  const updateTask = async (e) => {
    e.preventDefault();
    if (newTaskName.trim()) {
      const getCollectionData = doc(db, "tasks", taskId);
      await updateDoc(getCollectionData, { name: newTaskName });
      setNewTaskName("");
      triggerRefresh();
    }
  };

  return (
    <>
      <form onSubmit={updateTask}>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Enter new task name"
        />
        <button type="submit">Update Task</button>
      </form>
    </>
  );
}
