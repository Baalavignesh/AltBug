import { Login } from "@mui/icons-material";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AskQuestion from "./app/askquestion/askquestion.component";
import GetVerified from "./app/getverified/getverified.component";
import Profile from "./app/profile/profile.component";
import WelcomePage from "./app/welcome/welcome.component";
import NonPrivateRoute from "./Components/Routes/NonPrivateRoutes";
import PrivateRoute from "./Components/Routes/PrivateRoutes";
import HomePage from "./home-page/home-page.component";
import LoginPage from "./login-page/login-page.component";
import SignUpPage from "./signup-page/signup-page.component";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/app" element={<WelcomePage />}></Route>
        <Route path="app/profile" element={<Profile />}></Route>
        <Route path="/app/askquestion" element={<AskQuestion />}></Route>
        <Route path="/app/getverified" element={<GetVerified />}></Route>
      </Route>

      <Route
        path="/"
        element={
          <NonPrivateRoute>
            <HomePage />
          </NonPrivateRoute>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <NonPrivateRoute>
            <LoginPage />
          </NonPrivateRoute>
        }
      ></Route>
      <Route
        path="/register"
        element={
          <NonPrivateRoute>
            <SignUpPage />
          </NonPrivateRoute>
        }
      ></Route>
      <Route path="*" element={<Navigate to="/app" replace />} />
    </Routes>
  );
}

export default App;
