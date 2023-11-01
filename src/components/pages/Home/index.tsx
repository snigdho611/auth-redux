import { useSelector } from "react-redux";
import "./index.scss"
import Navbar from "../../common/Navbar";
import { IAuthStateProp } from "../../../interfaces";

const Home = () => {
    // const dispatch = useDispatch();
    const login = useSelector((state: IAuthStateProp) => state.auth);

    console.log(login);

    return (
        <div className="home">
            <Navbar />
            <h2 className="home_header">You are logged in!</h2>
        </div>
    );
};

export default Home;
