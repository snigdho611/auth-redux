import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthState } from "../../../store/auth";

// export { PrivateRoute };

export const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const auth = useSelector((state: AuthState) => state.auth);

    if (!auth.email) {
        return <Navigate to="/login" />;
    }

    return children;
};
