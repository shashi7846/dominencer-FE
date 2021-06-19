import axios from "axios";

export function Postlogin(data){
    return axios.post(`https://dominencernode.herokuapp.com/login`,data)
}

export function Postregister(data){
    return axios.post(`https://dominencernode.herokuapp.com/register`,data)
}

export function GetuserbyEmail(id){
    return axios.get(`https://dominencernode.herokuapp.com/user/${id}`)
}

export function Postreclogin(data){
    return axios.post(`https://dominencernode.herokuapp.com/reclogin`,data)
}

export function Postrecregister(data){
    return axios.post(`https://dominencernode.herokuapp.com/recregister`,data)
}

export function GetrecruiterbyEmail(id){
    return axios.get(`https://dominencernode.herokuapp.com/recruiter/${id}`)
}

export function Postcompany(data){
    return axios.post(`https://dominencernode.herokuapp.com/company`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function Postappliedjobs(data){
    return axios.post(`https://dominencernode.herokuapp.com/apply`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function GetrecruiterbyId(id){
    return axios.get(`https://dominencernode.herokuapp.com/recruiters/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function GetuserbyId(id){
    return axios.get(`https://dominencernode.herokuapp.com/users/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function Getjobs(){
    return axios.get(`https://dominencernode.herokuapp.com/job`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function GetappliedjobId(id){
    return axios.get(`https://dominencernode.herokuapp.com/appliedjob/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function Getcandidatesdetailsbyemail(id){
    return axios.get(`https://dominencernode.herokuapp.com/viewcandidates/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

export function GetjobId(id){
    return axios.get(`https://dominencernode.herokuapp.com/jobs/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}