import { FormEvent, useEffect } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { useLogin } from "../../../hooks/useLogin";
import { saveLogin } from "../../../store/auth";

const Login = () => {
    const dispatch = useDispatch();

    const { credentials, setCredentials, login, data } = useLogin();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        login();
    };

    useEffect(() => {
        if (data) {
            dispatch(saveLogin(data));
        }
    }, [data, dispatch]);

    return (
        <div className="login">
            <form className="login_form" onSubmit={handleSubmit}>
                <div className="login_form_row">
                    <label htmlFor="">Email:</label>
                    <input
                        value={credentials?.email}
                        onChange={(e) => setCredentials((prevState) => ({ ...prevState, email: e.target.value }))}
                        type="text"
                        name=""
                        id=""
                    />
                </div>
                <div className="login_form_row">
                    <label htmlFor="">Password:</label>
                    <input
                        value={credentials.password}
                        onChange={(e) => setCredentials((prevState) => ({ ...prevState, password: e.target.value }))}
                        type="text"
                        name=""
                        id=""
                    />
                </div>
                <div className="login_form_row">
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
