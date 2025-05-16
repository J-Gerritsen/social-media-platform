"use client";

import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase-config";

export default function DeleteTaskComponent({ taskId, onDelete }) {
  const deleteTask = async () => {
    try {
      const postDoc = doc(db, "tasks", taskId);
      await deleteDoc(postDoc);
      onDelete();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return <button onClick={deleteTask}>Delete</button>;
}
