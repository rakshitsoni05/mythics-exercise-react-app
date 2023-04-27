import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserForm from "./components/user";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import AdminHome from "./components/admin";
import AdminLogin from "./components/admin/AdminLogin";
import HomePage from "./HomePage";
import UserLogin from "./components/user/UserLogin";
import AdminGraph from "./components/admin/AdminGraph";
import AdminGraphEducation from "./components/admin/AdminGraphEducation";
import adminReducer from "./components/reducer/admin-reducer";


function App() {

    const store = configureStore({
        reducer: {
            adminData: adminReducer,
        }
    });


    return (
        <div className="container">
            <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< HomePage/>}/>
                    <Route path="/form" element={< UserForm/>}/>
                    <Route path="/user/login" element={< UserLogin/>}/>
                    <Route path="/admin/login" element={< AdminLogin/>}/>
                    <Route path="/admin/home" element={< AdminHome/>}/>
                    <Route path="/admin/graph/language" element={< AdminGraph/>}/>
                    <Route path="/admin/graph/education" element={< AdminGraphEducation/>}/>
                </Routes>
            </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
