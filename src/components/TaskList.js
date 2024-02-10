import TaskShow from "./TaskShow";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <div className="task-list">
      {tasks.map((task) => {
        return <TaskShow key={task.id} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
