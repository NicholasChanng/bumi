import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../src/components/Format/Layout/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path='/mission-statement' element={<Mission/>}> */}
        </Route>
    </Routes>
  );
}

export default App;
