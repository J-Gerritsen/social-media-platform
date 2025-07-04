"use client";

import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase-config";
import DeleteTaskComponent from "./delete-data";
import UpdateTaskComponent from "./update-data";

export default function TasksComponent({ refreshTrigger }) {
  const [taskList, setTaskList] = useState([]);

  const fetchTasks = async () => {
    try {
      const getCollectionData = collection(db, "tasks");
      const data = await getDocs(getCollectionData);
      setTaskList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [refreshTrigger]);

  return (
    <>
      <div>
        <h1>Task List</h1>
        <ul>
          {taskList.map((task) => (
            <li key={task.id}>
              {task.name}
              <DeleteTaskComponent taskId={task.id} onDelete={fetchTasks} />
              <UpdateTaskComponent
                taskId={task.id}
                triggerRefresh={fetchTasks}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
