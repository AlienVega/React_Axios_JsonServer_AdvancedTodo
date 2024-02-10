import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskformUpdate, onUpdate }) {
  const { createTask } = useContext(TasksContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, settaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    settaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      //   onCreate(title, taskDesc);
      createTask(title, taskDesc);
    }
    setTitle("");
    settaskDesc("");
  };

  return (
    <div>
      {" "}
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı Düzenleyiniz</label>
            <textarea
              value={taskDesc}
              rows={5}
              onChange={handleTaskChange}
              className="task-input"
            ></textarea>
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz</label>
            <textarea
              value={taskDesc}
              rows={5}
              onChange={handleTaskChange}
              className="task-input"
            ></textarea>
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
