import {useEffect, useState} from "react";
import {getAllFormsInfo} from "../../services/admin-service";
import {Doughnut, Pie} from "react-chartjs-2";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const AdminGraphEducation = () => {

    const [graphData, setGraphData] = useState({});
    const {currentAdmin} = useSelector(state => state.adminData)
    const navigate = useNavigate();


    useEffect(() => {

            const fetchData = async () => {
                const userList = await getAllFormsInfo()
                // setUserList(data);

                let list = {}
                for (let i = 0; i < userList.length; i++) {
                    console.log("userList", userList[i])
                    if (userList[i].education in list) {
                        list[userList[i].education] = list[userList[i].education] + 1;
                    } else {

                        list[userList[i].education] = 1
                    }
                }


                setGraphData(list)
                console.log("list", list)
            }

            fetchData();


            console.log("graphData", graphData)


        }, []
    )

    const graphState = {
        labels: ['High School', 'Bachelors', 'Masters', 'PhD'],
        datasets: [
            {
                label: 'Education',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4'
                ],
                data: [graphData["High School"], graphData["Bachelors"], graphData["Masters"], graphData["PhD"]]
            }
        ]
    }
    if (Object.keys(currentAdmin).length > 0)
        return (
            <div className="container m-2 p-1 w-75 h-25">
                <h1> Number of People with Education Levels</h1>
                <Doughnut
                    data={graphState}
                    options={{

                        plugins: {
                            title: {
                                display: true,
                                text: 'Education Graph',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }
                    }}


                />

            </div>
        )
    else {
        console.log("Please log in to continue")
        navigate("/admin/login")
    }


}

export default AdminGraphEducation
