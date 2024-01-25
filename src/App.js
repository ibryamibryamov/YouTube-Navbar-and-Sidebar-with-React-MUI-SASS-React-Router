import "./App.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes className="App">
      <Route path="/" Component={LandingPage} />
    </Routes>
  );
}

export default App;
