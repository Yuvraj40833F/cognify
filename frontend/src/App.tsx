import Sidebar from "./components/Sidebar.tsx";
import Dashboard from "./components/Dashboard.tsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />

    </div>
  );
}

export default App;