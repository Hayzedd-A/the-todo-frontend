import "./App.css";
import Calender from "./pages/Calender";
import Home from "./pages/Home";
import Parent from "./pages/Parent";

function App() {
  return (
    <div className="App">
      <Parent>
        <Home />
        <Calender />
      </Parent>
    </div>
  );
}

export default App;
