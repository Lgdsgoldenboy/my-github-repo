import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./layout/HomePage";
import Repo from "./pages/Repo/Repo";
import RepoContent from "./pages/RepoContent/RepoContent";
import Error from "./pages/Error/Error";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/repo" element={<Repo />} />
          <Route path="/repo-content" element={<RepoContent />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
