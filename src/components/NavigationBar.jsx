import taskTypes from '../data/taskTypes';
// import '../css/NavigationBar.css';
export default function NavigationBar({ onClick }) {
  return (
    <nav id="navbar" className="navbar">
      <ul className="content-categories">
        {taskTypes.map((taskType, index) => (
          <li key={index}>
            <input
              className="nav-item"
              name="nav"
              type="radio"
              id={`opt-${index + 1}`}
              // defaultChecked={index === 0}
              onClick={() => onClick(taskType)}
            />
            <label className="category" htmlFor={`opt-${index + 1}`}>
              {taskType}
            </label>
          </li>
        ))}
      </ul>
    </nav>
  );
}
