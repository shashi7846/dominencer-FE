import React from 'react'
import {Link,useHistory} from "react-router-dom";
import "./Navbar.css";
function Nav() {
 
    let history=useHistory();

return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-#282c34">
            <a class="navbar-brand text-light">Dominencer Hiring</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" >
                <div className="navbar-nav">
                    <Link class="nav-item nav-link active text-light" to="/">Home</Link>
                    <Link class="nav-item nav-link text-light" to="/reclogin">RecruiterLogin</Link>
                    <Link class="nav-item nav-link text-light" to="/recregister">Recruiter Register</Link>
                    <Link class="nav-item nav-link text-light" to="/login">Login</Link>
                    <Link class="nav-item nav-link text-light" to="/register">Register</Link>
                    
                    <Link class="nav-item nav-link text-light" to="/login" onClick={()=>{
                         window.localStorage.removeItem("app_token");
                        //  setisAuth(false)
                         history.push(`/login`);
                    }}>Logout</Link>
                </div>
            </div>
        </nav>
    </>
)

}
export default Nav

// import React from "react";
// import { Link, useHistory } from "react-router-dom";
// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// // import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import "./Navbar.css";
// function Nav() {


//     let history=useHistory();

//     return (
//         <>
//             <nav class="navbar navbar-expand-lg navbar-light bg-#282c34">
//                 <a class="navbar-brand text-light">HIRING</a>
//                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//                     <div class="navbar-nav">
//                         <Link class="nav-item nav-link active text-light" to="/">Home</Link>
//                         <Link class="nav-item nav-link text-light" to="/reclogin">Recruiter Login</Link>
//                         <Link class="nav-item nav-link text-light" to="/recregister">Recruiter Register</Link>
//                         <Link class="nav-item nav-link text-light" to="/login">Login</Link>
//                         <Link class="nav-item nav-link text-light" to="/register">Register</Link>
//                         <Link class="nav-item nav-link text-light" to="/login" onClick={()=>{
//                              window.localStorage.removeItem("app_token");
//                             //  setisAuth(false)
//                              history.push(`/login`);
//                         }}>Logout</Link>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Nav;
