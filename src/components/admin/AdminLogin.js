import "./index.css"
import {useState} from "react";
import {adminLogin} from "../../services/admin-service";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {adminLoginThunk} from "../reducer/admin-thunk";

const AdminLogin = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogin = async () => {
        const user = {username, password}
        const loginRes = await dispatch(adminLoginThunk(user))
        if (loginRes) {
            navigate('/admin/home')
        } else {
            alert("Invalid username or password")
        }

    }

    return (

        <div className="Auth-form-container">
            <div className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title ">Admin Login</h3>
                    <div className="form-group mt-3">
                        <label> Username</label>
                    </div>
                    <input className="form-control mt-1"
                           placeholder="Enter username"
                           onChange={(e) => setUserName(e.target.value)}/>
                    <div className="form-group mt-3">
                        <label> Password</label>
                    </div>
                    <input className="form-control mt-1"
                           placeholder="Enter password" type="password"
                           onChange={(e) => setPassword(e.target.value)}/>
                    <div className="d-grid gap-2 mt-3">
                        <button
                            type="submit"
                            className="btn btn-dark"
                            onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin