import { FormEvent } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { useLogin } from "../../../hooks/useLogin";
import { saveLogin } from "../../../store/auth";

const Login = () => {
    const dispatch = useDispatch();
    const { credentials, setCredentials } = useLogin();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(
            saveLogin({
                _id: "1234",
                email: "snigdho.howlader@gmail.com",
                role: "admin",
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ",
                user: {
                    _id: "2345",
                    name: "Snigdho Dip Howlader",
                    phone: "+1 (222) 222-2222",
                },
                verified: true,
            })
        );
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="form_label" htmlFor="">
                Email:
            </label>
            <input
                className="form_input"
                value={credentials?.email}
                onChange={(e) =>
                    setCredentials((prevState) => ({
                        ...prevState,
                        email: e.target.value,
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
        </form>
    );
};

export default Login;
