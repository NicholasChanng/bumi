import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../src/components/Format/Layout/layout";
import Header from "./components/Format/Header/header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
