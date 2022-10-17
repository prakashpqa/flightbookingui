import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Home from "./pages/Home/Home";
import {List} from "@mui/material";
import Flight from "./pages/Flight/Flight";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flights" element={<List/>}/>
        <Route path="/flights/:id" element={<Flight/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
