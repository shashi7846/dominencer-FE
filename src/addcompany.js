import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { GetrecruiterbyId, Postcompany } from "./api";
import { faAward, faBuilding, faCalendarDay, faClipboard, faLocationArrow, faVial } from "@fortawesome/free-solid-svg-icons";

function Addcompany(props) {
    let [companyname, setCompanyname] = useState("");
    let [jobtitle, setJobtitle] = useState("");
    let [location, setLocation] = useState("");
    let [skill, setSkill] = useState("");
    let [experience, setExperience] = useState("");
    let [date, setDate] = useState("");
    let [email,setuseremail]=useState("");

    useEffect(async () => {

        console.log(props)
        let users = await GetrecruiterbyId(props.match.params.id);
        setuseremail(users.data.email)
        console.log("Mounted")
    }, [])

    let userData = { companyname, jobtitle, location, skill, experience,date,email:email}
    let history = useHistory();

    return (
        <>
            <div class="container mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="card1">
                        <div class="card-header">
                            <h3><FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon> Add Job</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                await Postcompany(userData);
                                setCompanyname("");
                                setJobtitle("");
                                setLocation("");
                                setSkill("");
                                setExperience("");
                                setDate("");
                            }}>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text text-light"><FontAwesomeIcon icon={faBuilding} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Company Name" required value={companyname} onChange={(e) => {
                                        setCompanyname(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text text-light"><FontAwesomeIcon icon={faClipboard} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Job title" required value={jobtitle} onChange={(e) => {
                                        setJobtitle(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text text-light"><FontAwesomeIcon icon={faLocationArrow} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Job loacation" required value={location} onChange={(e) => {
                                        setLocation(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text text-light"><FontAwesomeIcon icon={faAward} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Skills Required" required value={skill} onChange={(e) => {
                                        setSkill(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text text-light"><FontAwesomeIcon icon={faVial} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Experince Required" required value={experience} onChange={(e) => {
                                        setExperience(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text text-light"><FontAwesomeIcon icon={faCalendarDay} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="date" class="form-control" placeholder="Date Posted" required value={date} onChange={(e) => {
                                        setDate(e.target.value);
                                    }} />
                                </div>

                                <div class="form-group">
                                    <input type="submit" value="Add Job" class="btn float-right  btn-dark" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-dark " onClick={() => {
                                        history.push(`/viewcandidates/${props.match.params.id}`);
                                    }}>View Candidates</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Addcompany) ;
