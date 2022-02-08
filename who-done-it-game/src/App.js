import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Introduction from "./components/Introduction";
import GameMain from "./components/GameMain";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/intro" element={<Introduction />} />
          <Route path="/main" element={<GameMain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
