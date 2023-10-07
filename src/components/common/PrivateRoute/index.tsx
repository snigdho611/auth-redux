import { ReactNode } from "react";
import Login from "../../pages/Login";
import { Navigate } from "react-router-dom";

interface IPrivateRouteProps {
    auth: { email: string | null; token: string | null };
    element: ReactNode;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ auth, element }) => {
    if (auth && auth.email) {
        return element;
    }
    return <Navigate to={"/login"} />;
};

export default PrivateRoute;
