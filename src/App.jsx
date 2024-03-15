import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import EmailView from "./components/EmailView.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/email/:id" element={<EmailView />} />
      </Routes>
    </Router>
  );
}

export default App;
