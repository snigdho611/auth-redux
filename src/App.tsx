import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/Login";

import Home from "./components/pages/Home";
import PrivateRoute from "./components/common/PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthState, saveLogin } from "./store/auth";

function App() {
    const auth = useSelector((state: AuthState) => state.auth);

    const dispatch = useDispatch();
    useEffect(() => {
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("token");
        if (email && token) {
            dispatch(saveLogin({ email: email, token: token }));
        }
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={!auth.email ? <Login /> : <Navigate to={"/page"} />} />
                <Route path="/page" element={<PrivateRoute auth={auth} element={<Home />} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
