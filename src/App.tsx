import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import PrivateRoute from "./components/common/PrivateRoute";
import { useSelector } from "react-redux";
import { IAuthState } from "./store/auth";

function App() {
    const auth = useSelector((state: IAuthState) => state.auth);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={
                        !auth.email ? <Login /> : <Navigate to={"/page"} />
                    }
                />
                <Route
                    path="/page"
                    element={<PrivateRoute auth={auth} element={<Home />} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
