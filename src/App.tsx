import { Outlet } from "react-router-dom";
import Navbar from "./components/outlet/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
