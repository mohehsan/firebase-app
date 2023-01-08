import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/config/redux";

// pages
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
