import TasksComponent from "@/components/fetch-data";
import CreateTask from "@/components/create-data";

export default function Home() {
  return (
    <>
      <TasksComponent />
      <CreateTask />
    </>
  );
}
