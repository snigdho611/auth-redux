import { useDispatch, useSelector } from "react-redux";
import { IAuthState, removeLogin } from "../../../store/auth";

const Home = () => {
    const dispatch = useDispatch();
    const login = useSelector((state: IAuthState) => state.auth);

    console.log(login);

    return (
        <div>
            <span>You are logged in</span>
            <button
                onClick={() => {
                    dispatch(removeLogin());
                }}
            >
                Log Out
            </button>
        </div>
    );
};

export default Home;
