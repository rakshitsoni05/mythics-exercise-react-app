import {useState} from "react";
import {createUserInfo} from "../../services/user-service";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";

const UserForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [phoneNumber, setPhoneNo] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [language, setLanguage] = useState([]);
    const [education, setEducation] = useState('');
    const { isAuthenticated} = useAuth0();
    const navigate = useNavigate();



    const [checkedState, setCheckedState] = useState(
        new Array(language.length).fill(false)
    );
    const list = ['English', 'Spanish', 'Hindi', 'French', 'German'];
    const handleOnChange = (position) => {
        let updatedCheckedState = checkedState
        let updatedLanguageList = language;
        if(checkedState[position]){
            updatedCheckedState[position] = false
            updatedLanguageList.splice(updatedLanguageList.indexOf(position), 1);
        }else {
            updatedCheckedState[position] = true
            updatedLanguageList.push(list[position])
        }
        setCheckedState(updatedCheckedState);
        setLanguage(updatedLanguageList)

        console.log("check for position ", position, " ", checkedState[position])
        console.log("language ", language,)
    }


    const handleSubmit = async () => {

        if (firstName === undefined || lastName === undefined || firstName === "" || lastName === "") {
            alert("Please enter Full Name")
        } else if (emailId === undefined || emailId === "") {
            alert("Please enter your Email Id")
        } else if (phoneNumber === undefined || phoneNumber === "") {
            alert("Please enter your Phone Number")
        } else if (gender === undefined || gender === "") {
            alert("Please select Gender")
        } else if (dob === undefined || dob === "") {
            alert("Please enter your Date of Birth")
        } else if (address === undefined || address === "") {
            alert("Please enter your Address")
        }
        console.log("gender -> ", gender);
        console.log("here")
        const user = {firstName, lastName, emailId, phoneNumber, gender, dob, address, language, education}
        const res = await createUserInfo(user)
        if (res) {
            navigate("/user/login")
            alert("Response submitted")


        }
        else{
            alert("Please submit all the fields correctly")
        }

    }
    if(isAuthenticated)
    return (

        <div className="Form-container">
            <div className="User-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title ">User Form</h3>
                    <div className="form-group mt-3">
                        <label>
                            First Name
                        </label>
                    </div>
                    <input
                        className="form-control mt-1"
                           onChange={(e) => setFirstName(e.target.value)}
                           placeholder="First Name"/>
                    <div className="form-group mt-3">
                        <label>
                            Last Name
                        </label>
                    </div>
                    <input className="form-control mt-1"
                           onChange={(e) => setLastName(e.target.value)}
                           placeholder="Last Name"/>

                    <div className="form-group mt-3">
                        <label>
                            Email Id
                        </label>
                    </div>
                    <input type="email"
                           className="form-control mt-1"
                           onChange={(e) => setEmailId(e.target.value)}
                           placeholder="Email Id"/>

                    <div className="form-group mt-3">
                        <label>
                            Phone Number
                        </label>
                    </div>
                    <input type="number"
                        className="form-control mt-1"
                           onChange={(e) => setPhoneNo(e.target.value)}
                           placeholder="Phone Number"/>

                    <div className="radio form-group mt-3">
                        <label>
                            Gender
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="form-check-input m-1 p-1"
                                   type="radio" value="Male" checked={gender === "Male"}
                                   onChange={e => setGender(e.target.value)}
                            />
                            Male
                        </label>
                    </div>
                    <div>
                        <label>

                            <input className="form-check-input m-1 p-1"
                                   type="radio" value="Female" checked={gender === "Female"}
                                   onChange={e => setGender(e.target.value)}
                            />
                            Female
                        </label>
                    </div>
                    <div>
                        <label>

                            <input className="form-check-input m-1 p-1"
                                   type="radio" value="NA" checked={gender === "NA"}
                                   onChange={e => setGender(e.target.value)}
                            />
                            Do not wish to answer
                        </label>
                    </div>
                    <div className="form-group mt-3">
                        <label>
                            Date of Birth
                        </label>
                    </div>
                    <input className="form-control mt-1"
                           type="date"
                           onChange={(e) => setDob(e.target.value)}
                           placeholder="Date of Birth"/>

                    <div className="form-group mt-3">
                        <label>
                            Address
                        </label>
                    </div>
                    <textarea className="form-control mt-1"
                              onChange={(e) => setAddress(e.target.value)}
                              placeholder="Address"/>

                    <div className="form-group mt-3">
                        <label>
                            Languages
                        </label>
                    </div>
                    <label>
                        <input
                            className="form-check-input m-1 p-1"
                            type="checkbox"
                            value="English"
                            checked={checkedState[0]}
                            onChange={() => handleOnChange(0)}

                        />
                        English
                    </label>
                    <br></br>
                    <label>
                        <input className="form-check-input m-1 p-1"
                               type="checkbox"
                               value="Spanish"
                               checked={checkedState[1]}
                               onChange={() => handleOnChange(1)}
                        />
                        Spanish
                    </label>
                    <br></br>
                    <label>
                        <input
                            className="form-check-input m-1 p-1"
                            type="checkbox"
                            value="Hindi"
                            checked={checkedState[2]}
                            onChange={() => handleOnChange(2)}
                        />
                        Hindi
                    </label>
                    <br></br>
                    <label>
                        <input
                            className="form-check-input m-1 p-1"
                            type="checkbox"
                            value="French"
                            checked={checkedState[3]}
                            onChange={() => handleOnChange(3)}
                        />
                        French
                    </label>
                    <br></br>
                    <label>
                        <input
                            className="form-check-input m-1 p-1"
                            type="checkbox"
                            value="German"
                            checked={checkedState[4]}
                            onChange={() => handleOnChange(4)}
                        />
                        German
                    </label>

                    <div className="form-group mt-3">
                        <label>
                            Highest Education
                        </label>
                    </div>
                    <select className="form-select mt-1"
                            onChange={(e) => setEducation(e.target.value)}>
                        <option> Please select</option>
                        <option value="High School"> High School</option>
                        <option value="Bachelors"> Bachelors</option>
                        <option value="Masters"> Masters</option>
                        <option value="PhD"> PhD</option>

                    </select>
                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-dark"
                                onClick={() => handleSubmit()}>

                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    else
    {

        navigate("/user/login")

    }


}

export default UserForm;