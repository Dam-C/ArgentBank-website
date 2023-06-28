import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  HomeContent,
  HomePage,
  LoginPage,
  ProtectedRoute,
  EditTransacPage,
  UserPage,
} from "./0_elementsIndex/elementsIndex.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomeContent />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route
            path="/user-page"
            element={
              <ProtectedRoute>
                <UserPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-edit-transac"
            element={
              <ProtectedRoute>
                <EditTransacPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
