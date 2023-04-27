import {useEffect, useState} from "react";
import {getAllFormsInfo} from "../../services/admin-service";
import Table from "react-bootstrap/Table";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const AdminHome = () => {

    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();
    const {currentAdmin} = useSelector(state => state.adminData)

    useEffect(() => {

        const fetchData = async () => {
            const data = await getAllFormsInfo();
            console.log(data)
            setUserList(data);
        }

        fetchData();

    }, [])

    if (Object.keys(currentAdmin).length > 0)

        return (

            <div className="container m-2 p-1">
                {  console.log("if" ,currentAdmin)}
                <div className="row">
                    <div className="col-7">
                        <h1> Welcome ! </h1>
                    </div>
                    <div className="col-2">
                        <button
                            onClick={() => navigate("/admin/graph/education")}
                            className="btn btn-dark">
                            Education Graph
                        </button>
                    </div>
                    <div className="col">
                        <button
                            onClick={() => navigate("/admin/graph/language")}
                            className="btn btn-dark">
                            Language Graph
                        </button>
                    </div>

                </div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Contact Number</th>
                        <th>Gender</th>
                        <th> Date of Birth</th>
                        <th>Languages Known</th>
                        <th>Qualification</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userList?.map((info) => (
                        <>
                            <tr>
                                <td>{info.firstName} {info.lastName}</td>
                                <td>{info.emailId}</td>
                                <td>{info.phoneNumber}</td>
                                <td>{info.gender}</td>
                                <td>{info.dob.split("T")[0]}</td>
                                <td>{info.language?.map((l) => (
                                    <> {l}   </>
                                ))}</td>
                                <td>{info.education}</td>
                            </tr>
                        </>
                    ))}

                    </tbody>
                </Table>
            </div>
        )
    else {
        console.log("Please log in to continue")
        console.log(currentAdmin)
        navigate("/admin/login")
    }
}

export default AdminHome