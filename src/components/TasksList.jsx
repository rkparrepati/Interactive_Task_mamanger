export default function TasksList({
  children,
  tasks,
  dueDate,
  onClickFunction,
}) {
  return (
    <ul className="tasks-wrapper">
      {tasks
        .filter((task) => task.dueDate === dueDate)
        .map((task) => (
          <li
            key={`${task.id}-${task.checked}`}
            className="task"
            onClick={() => onClickFunction(task.id)}
          >
            <input
              className="task-item"
              name="task"
              type="checkbox"
              defaultChecked={task.checked}
              //onChange={() => {}}
              id={task.id}
            />
            <label htmlFor={task.id}>
              <span className="label-text">{task.label}</span>
            </label>
            <span className={`tag ${task.status.toLowerCase()}`}>
              {task.status}
            </span>
          </li>
        ))}
    </ul>
  );
}
