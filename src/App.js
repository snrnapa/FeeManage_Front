import "./App.css";
import ApiFetch from "./components/ApiFetch";
import Fee from "./components/Fee";
import PersonIcon from "@mui/icons-material/Person";
import TrainIcon from "@mui/icons-material/Train";

function App() {
  return (
    // <div className="App">
    <div>
      <PersonIcon />
      <ApiFetch />

      <hr />
      <TrainIcon />
      <Fee />
    </div>
  );
}

export default App;
