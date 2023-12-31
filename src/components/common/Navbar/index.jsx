import { useDispatch, useSelector } from 'react-redux'
import { removeLogin } from '../../../store/auth';
import "./index.scss"

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  return (
    <nav className="nav">
      {
        auth.username && auth.id && auth.token ? <button className="nav_button"
          onClick={() => {
            dispatch(removeLogin());
          }}
        >
          Log Out
        </button> : null
      }
    </nav>
  )
}

export default Navbar