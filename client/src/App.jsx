import { ToastContainer } from "react-toastify";
import { Header } from "./pages/Header";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="mx-auto">
      <Header />
      <ToastContainer />
    </div>
  );
}

export default App;
