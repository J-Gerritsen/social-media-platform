"use client";

import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase-config";
import { uploadFile } from "./upload-file";

export default function CreateTask({ triggerRefresh }) {
  const [taskName, setTaskName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const createTask = async (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      const getCollectionData = collection(db, "tasks");
      await addDoc(getCollectionData, { name: taskName });
      setTaskName("");
      triggerRefresh();
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("select a file");
      return;
    }
    await uploadFile(selectedFile);
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
      <input
        type="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
    <button onClick={handleUpload}>Upload</button>
    </>
  );
}
