import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
