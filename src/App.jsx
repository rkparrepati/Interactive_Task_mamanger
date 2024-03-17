// import { useState } from 'react';
import Schedule from './components/Schedule';
import SideBar from './components/SideBar';
import { useState } from 'react';
import DashBoard from './components/DashBoard.jsx';
import CategoryContext from './store/CategoryContext';

function App() {
  const [taskCategory, setTaskCategory] = useState('all');

  function handleSetCategory(category) {
    setCategory(category);
  }

  return (
    <CategoryContext.Provider value={[taskCategory, setTaskCategory]}>
      <div className="task-manager">
        <SideBar setCategory={handleSetCategory} />
        <DashBoard category={taskCategory} />
        <Schedule />
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
