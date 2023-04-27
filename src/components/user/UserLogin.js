import {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";


const UserLogin = () => {

    const [emailId, setEmailId] = useState('');
    const {logout, isAuthenticated} = useAuth0();
    const {isLoading, error} = useAuth0();

    const {loginWithRedirect} = useAuth0();

    return (

        <div className="Auth-form-container">
            <div className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title ">User Login</h3>
                    {error && <p>Authentication Error</p>}
                    {!error && isLoading && <p>Loading...</p>}
                    {!error && !isLoading && (
                        <>

                            <div className="d-grid gap-2 mt-3">
                                {!isAuthenticated && <button
                                    type="submit"
                                    className="btn btn-dark"
                                    onClick={() => loginWithRedirect()}>
                                    Login
                                </button>}
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                {isAuthenticated && (<button
                                    type="submit"
                                    className="btn btn-dark"
                                    onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                                    Logout
                                </button>)}
                            </div>
                        </>)}
                </div>
            </div>
        </div>

    )
}
export default UserLogin;