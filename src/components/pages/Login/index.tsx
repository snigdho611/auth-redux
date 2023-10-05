import React, { FormEvent, useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "../../../store/auth";
import { login, getUser } from "../../../store/auth";

const Login = () => {
    const [credentials, setCredentials] = useState<{ email: string; password: string }>({
        email: "snigdho.howlader@gmail.com",
        password: "1234",
    });
    const user = useSelector((state: AuthState) => state.user);
    const dispatch = useDispatch();

    // console.log(user);

    // useEffect(() => {
    // dispatch(getUser());
    // }, [dispatch]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (credentials.email === "snigdho.howlader@gmail.com" && credentials.password === "1234") {
            console.log(credentials);
            localStorage.setItem("user", credentials.email);
            dispatch(login(credentials));
        }
    };

    return (
        <div className="login">
            <form className="login_form" onSubmit={handleSubmit}>
                <div className="login_form_row">
                    <label htmlFor="">Email:</label>
                    <input
                        value={credentials.email}
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
