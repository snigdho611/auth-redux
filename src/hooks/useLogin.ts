import { useState } from "react";

export const useLogin = () => {
    const [credentials, setCredentials] = useState<{ email: string; password: string }>({
        email: "snigdho.howlader@gmail.com",
        password: "Snigdho@123",
    });
    const [data, setData] = useState<{
        token: string;
        email: string;
    } | null>(() => {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");
        if (token && email) {
            return { token: token, email: email };
        }
        return null;
    });

    const login = () => {
        fetch(`http://127.0.0.1:8000/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        })
            .then((res) => res.json())
            .then((json) => {
                localStorage.setItem("token", json.data.token);
                localStorage.setItem("email", json.data.email);
                setData({ token: json.data.token, email: json.data.email });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return { credentials, setCredentials, login, data };
};
