import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import MyReferral from "./Pages/MyReferral";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path={`/thankyou/:userId`} element={<MyReferral />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
