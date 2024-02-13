import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./lib/middlewares/AuthContext";
import Authguard from "./lib/middlewares/AuthGuard";
import { NotFound, Signin, Signup } from "./lib/pages";
import customTheme from "./lib/theme/MuiTheme";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={customTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Authguard element={<Home />} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
