import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import PrivateRoute from "./components/common/PrivateRoute";
import { useSelector } from "react-redux";
import { IAuthStateProp } from "./interfaces";

function App() {
    const auth = useSelector((state: IAuthStateProp) => state.auth);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={"/login"} />} />
                <Route path="/login" element={!auth.username ? <Login /> : <Navigate to={"/page"} />} />
                <Route element={<PrivateRoute />} >
                    <Route path="/page" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
