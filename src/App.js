import "antd/dist/antd.css";
import "./App.css";
import MainPage from "./components/mainPage/MainPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
