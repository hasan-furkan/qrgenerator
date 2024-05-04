import { ToastContainer } from "react-toastify";
import { Header } from "./pages/Header";

import "react-toastify/dist/ReactToastify.css";
import { Content } from "./pages/Content";
import { ShowQr } from "./pages/ShowQr";

function App() {
  return (
    <div className="mx-auto">
      <Header />
      <Content />
      <ShowQr />
      <ToastContainer />
    </div>
  );
}

export default App;
