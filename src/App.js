import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListTask from "./Components/ListTask/ListTask";
import TaskAdd from "./Components/TaskAdd/TaskAdd";
function App() {
  return (
    <div className="App">
      <TaskAdd />
      <ListTask />
    </div>
  );
}

export default App;
