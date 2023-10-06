import { useSelector } from "react-redux";
import { AuthState } from "../../../store/auth";

const Home = () => {
    const log = useSelector((state: AuthState) => state.auth.log);
    // console.log(log);
    return <div>1234</div>;
};

export default Home;
