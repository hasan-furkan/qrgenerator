import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "./pages/Header";

import "react-toastify/dist/ReactToastify.css";
import { Content } from "./pages/Content";
import { ShowQr } from "./pages/ShowQr";

function App() {
  const [username, setUsername] = useState();

  return (
    <div className="mx-auto">
      <Header username={username} setUsername={setUsername} />
      <Content />
      <ShowQr username={username} />
      <ToastContainer />
    </div>
  );
}

export default App;
