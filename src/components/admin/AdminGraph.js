import {useEffect, useState} from "react";
import {getAllFormsInfo} from "../../services/admin-service";
import {ArcElement, Tooltip, Legend, Chart} from 'chart.js'
import {Pie} from 'react-chartjs-2';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

Chart.register(ArcElement, Tooltip, Legend);

const AdminGraph = () => {

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
                for (let j = 0; j < userList[i].language.length; j++) {
                    console.log("userList", userList[i].language[j])
                    if (userList[i].language[j] in list) {
                        console.log("here in if", userList[i].language[j])
                        list[userList[i].language[j]] = list[userList[i].language[j]] + 1;
                    } else {
                        console.log("here in else", userList[i].language[j])
                        list[userList[i].language[j]] = 1
                    }
                }
            }

            setGraphData(list)
            console.log("list", list)
        }

        fetchData();
        console.log("graphData", graphData)


    }, [])

    const graphState = {
        labels: ['English', 'Spanish', 'Hindi', 'French', 'German'],
        datasets: [
            {
                label: 'Languages',
                data: [graphData["English"], graphData["Spanish"], graphData["Hindi"], graphData["French"], graphData["German"]],

                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                ],


            },
        ],
    }

    if (Object.keys(currentAdmin).length > 0)
        return (
            <div className="container m-2 p-1 w-75 h-25">
                <h1> Number of People Speaking Each Language</h1>
                <Pie className="container"
                     data={graphState}
                     options={{
                         title: {
                             display: true,
                             text: 'Language Graph',
                             fontSize: 20
                         },
                         legend: {
                             display: true,
                             position: 'right'
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

export default AdminGraph