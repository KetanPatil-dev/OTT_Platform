import Home from "./pages/Home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import TitleMovie from "./TiltleMovie/TitleMovie";
import Protected from "./Protected";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Protected><Home/></Protected>} />
        <Route path="/player/:id" element={<Protected><Player /></Protected>} />
        <Route path="titleMovie" element={<Protected><TitleMovie/></Protected>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
