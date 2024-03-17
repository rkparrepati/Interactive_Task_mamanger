import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import TasksList from './TasksList.jsx';
// import TasksListContext from '../store/tasks-list-context.jsx';
import TaskTypeContext from '../store/TaskTypeContext.jsx';
import CategoryContext from '../store/CategoryContext.jsx'; // Import CategoryContext

export default function TaskSummary() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [categoryInput, setCategoryInput] = useState('all');
  const [taskCategory] = useContext(CategoryContext);
  const taskTypeCtx = useContext(TaskTypeContext);

  // useEffect(() => {
  //   setCategoryInput(taskCategory); // Update categoryInput when category prop changes
  // }, [taskCategory]);

  useEffect(() => {
    let url = `http://localhost:9090/task/all?category=${taskCategory}&type=${taskTypeCtx}`;
    console.log(url);
    async function fetchTasks() {
      try {
        const response = await axios.get(url);
        setTasks(response.data);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setError('Error: ' + error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          setError('Error: No response received from server');
        } else {
          // Something happened in setting up the request that triggered an Error
          setError('Error: ' + error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, [taskCategory, taskTypeCtx]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  function handleCheckedStateChange(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, checked: !task.checked };
        }
        return task;
      })
    );
  }
  // function handleTodaydTaskCheckedStateChange(id) {
  //   setTodayTasks(
  //     todayTasks.map((task) => {
  //       if (task.id === id) {
  //         return {
  //           ...task,
  //           checked: !task.checked,
  //           statusCss: statusMapping[task.status],
  //         };
  //       }
  //       return task;
  //     })
  //   );
  // }

  return (
    <>
      <div className="header today">Todays Tasks</div>
      {/* <ul className="tasks-wrapper">
        {tasks
          .filter((task) => task.dueDate === 'Today')
          .map((task) => (
            <li
              key={`${task.id}-${task.checked}`}
              className="task"
              onClick={() => handleCheckedStateChange(task.id)}
            >
              <input
                className="task-item"
                name="task"
                type="checkbox"
                defaultChecked={task.checked}
                id={task.id}
              />
              <label htmlFor={task.id}>
                <span className="label-text">{task.label}</span>
              </label>

              <span className={`tag ${task.statusCss}`}>{task.status}</span>
            </li>
          ))}
      </ul> */}
      <TasksList
        tasks={tasks}
        dueDate="Today"
        onClickFunction={handleCheckedStateChange}
      />
      <div className="header upcoming">Upcoming Tasks</div>
      <TasksList
        tasks={tasks}
        dueDate="Upcoming"
        onClickFunction={handleCheckedStateChange}
      />
      <div className="header overdue">Overdue Tasks</div>
      <TasksList
        tasks={tasks}
        dueDate="Overdue"
        onClickFunction={handleCheckedStateChange}
      />
    </>
  );
}
