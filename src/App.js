import "./App.css";
import ProjectList from "./component/ProjectList";
import ProjectManagement from "./component/ProjectManagement";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <ProjectList />
      <ProjectManagement />
    </div>
  );
}
