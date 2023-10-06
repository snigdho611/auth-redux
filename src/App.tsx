import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./components/pages/Login";

import Home from "./components/pages/Home";
import { useSelector } from "react-redux";
import { AuthState } from "./store/auth";

function App() {
    const auth = useSelector((state: AuthState) => state.auth);
    console.log(auth);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route element={auth.email ? <Outlet /> : <Navigate to={"/login"} />}>
                    <Route path="/page" element={<Home />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
