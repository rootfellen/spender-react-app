import Header from "./components/header";
import Home from "./pages/home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from "./pages/add-expense";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add-expenses" element={<AddExpense />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
