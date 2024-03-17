import NavigationBar from './NavigationBar';
import TaskSummary from './TaskSummary.jsx';
import TaskTypeContext from '../store/TaskTypeContext'; // Correct import path
import { useState } from 'react';

export default function DashBoard({ category }) {
  const [taskType, setTaskType] = useState('all');

  const handleTaskTypeChange = (taskTypeValue) => {
    setTaskType(taskTypeValue); // Set the selected task type
  };

  return (
    <TaskTypeContext.Provider value={taskType}>
      <div className="page-content">
        <NavigationBar onClick={handleTaskTypeChange} />
        <TaskSummary category={category} />
      </div>
    </TaskTypeContext.Provider>
  );
}
