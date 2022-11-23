import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import MyReferral from "./Pages/MyReferral";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/referral/:userId`}
          target="_blank"
          element={<MyReferral />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
