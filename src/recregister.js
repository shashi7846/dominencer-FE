import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Postrecregister } from "./api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faMailBulk, faPhone, faUser} from '@fortawesome/free-solid-svg-icons'

function Recregister(){

    let [username,setUsername] =useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [phone,setPhone]=useState("");

    let history=useHistory();

    let userData = { username,email, password ,phone}

    return(
        <>
        <div class="container mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="card1">
                        <div class="card-header">
                            <h3>Recruiter Register</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                await Postrecregister(userData);
                                setEmail("");
                                setPassword("");
                                setUsername("");
                                setPhone("");
                                history.push(`/reclogin`);
                            }}>
                            <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text text-white"><FontAwesomeIcon icon={faUser} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="User Name" required value={username} onChange={(e) => {
                                        setUsername(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text text-white"><FontAwesomeIcon icon={faMailBulk} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="email" class="form-control" placeholder="email" required value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}/>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text text-white"><FontAwesomeIcon icon={faKey} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" required value={password} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text text-white"><FontAwesomeIcon icon={faPhone} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="tel" class="form-control" placeholder="99xx99xx99" pattern="[0-9]{10}" required value={phone} onChange={(e) => {
                                        setPhone(e.target.value);
                                    }} />
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Register" class="btn float-right  btn-dark" />
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                             have an account?<Link to="/reclogin">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recregister;
