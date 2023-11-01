import { Navigate, Outlet } from "react-router-dom";
import { IAuthStateProp } from "../../../interfaces";
import { useSelector } from "react-redux";

const PrivateRoute: React.FC = () => {
    const auth = useSelector((state: IAuthStateProp) => state.auth);
    return auth.username && auth.id && auth.token ? <Outlet /> : <Navigate to={"/login"} />
};

export default PrivateRoute;
