import {useNavigate} from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    return (

        <div className="Auth-form-container">
            <div className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Welcome</h3>
                    <div className="d-grid gap-2 mt-4 ">
                        <button className="btn btn-dark"
                                onClick={() => {
                                    navigate("/user/login")
                                }}
                                type="submit">User Login
                        </button>

                    </div>

                    <div className="d-grid gap-2 mt-4">

                        <button className="btn btn-dark"
                                onClick={() => {
                                    navigate("/admin/login")
                                }} type="submit">Admin Login
                        </button>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default HomePage