import { useState } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { saveLogin } from "../../../store/auth";
import Navbar from "../../common/Navbar";

const Login = () => {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        username: "kminchelle",
        password: "0lelplR",
    });
    const [response, setResponse] = useState({
        message: "", loading: false, data: null
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setResponse({ message: "", loading: true, data: null })
        if (credentials.username === "" || credentials.password === "") {
            return setResponse({ message: "Both fields are required", loading: false, data: null })
        }

        fetch(`https://dummyjson.com/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        })
            .then((res) => {
                console.log(res.status)
                if (res.status === 200) {
                    return res.json()
                } else {
                    throw new Error("Invalid credentials")
                }
            })
            .then((json) => {
                setResponse({ loading: false, message: "Successfully logged in", data: json });

                // This part of the code will save the response to redux
                dispatch(saveLogin(json))
            })
            .catch((error) => {
                // console.log(error);
                setResponse({ message: error.message, loading: false, data: null })
            });
    };

    return (
        <>
            <Navbar />
            <form className="form" onSubmit={handleSubmit}>
                <span className="form_head">Login</span>
                <label className="form_label" htmlFor="">
                    Email:
                </label>
                <input
                    className="form_input"
                    value={credentials.username}
                    onChange={(e) =>
                        setCredentials((prevState) => ({
                            ...prevState,
                            username: e.target.value,
                        }))
                    }
                    type="text"
                />
                <label className="form_label" htmlFor="">
                    Password:
                </label>
                <input
                    className="form_input"
                    value={credentials.password}
                    onChange={(e) =>
                        setCredentials((prevState) => ({
                            ...prevState,
                            password: e.target.value,
                        }))
                    }
                    type="text"
                />
                <button className="form_button" type="submit">
                    Log In
                </button>
                <div className="form_response">
                    {response.loading ? "Please wait..." : response.message}
                </div>
            </form>
        </>
    );
};

export default Login;
